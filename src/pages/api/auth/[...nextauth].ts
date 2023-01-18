// @ts-nocheck
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { prisma } from "../../../utils/db";
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient({ log: ['query'] });

const createIfNotExists = async (
  name: string,
  email: string,
  avatar: string
) => {
  const userExists = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!userExists) {
    // create user in database
    const res = await prisma.user.create({
      data: {
        name: name,
        email: email,
        avatar: avatar,
      },
    });
    return res;
  }
  return userExists!;
};

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, profile }) {
      console.log("user", user);
      await createIfNotExists(user.name, user.email, user.image);
      return true;
    },
    async session({ session, token }) {
      session.user.uid = token.sub;
      const user = await createIfNotExists(
        session.user.name,
        session.user.email,
        session.user.image
      );
      console.log("user", user);
      session.user.id = user.id;
      session.user.avatar = user.avatar;
      session.user.tag = user.username;
      return session;
    },
  },
};

export default NextAuth(authOptions);

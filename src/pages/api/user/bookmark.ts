//@ts-nocheck
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";
import { compare } from "bcrypt";
const saltRounds = 10;

const deleteBookmark = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { userEmail, blogId } = req.body;
    const user = await prisma.user.findFirst({
      where: {
        email: userEmail,
      },
    });

    if (!user) {
      res.status(400).json({ message: "User does not exist" });
      return;
    }
    const index = user.bookmarks.indexOf(blogId);
    if (index > -1) {
      user.bookmarks.splice(index, 1);
    }

    const updatedUser = await prisma.user.update({
      where: {
        email: userEmail,
      },
      data: {
        bookmarks: user.bookmarks,
      },
    });
    res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const addBookmark = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { userEmail, blogId } = req.body;
    const user = await prisma.user.findFirst({
      where: {
        email: userEmail,
      },
    });
    if (!user.bookmarks.includes(blogId)) {
      const user = await prisma.user.update({
        where: {
          email: userEmail,
        },
        data: {
          bookmarks: {
            push: blogId,
          },
        },
      });
    }

    if (!user) {
      res.status(400).json({ message: "User does not exist" });
      return;
    }
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getBookmark = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { userEmail } = req.query;
    const user = await prisma.user.findFirst({
      where: {
        email: userEmail,
      },
    });

    if (!user) {
      res.status(400).json({ message: "User does not exist" });
      return;
    }

    const bookmarkedBlogs = await prisma.blog.findMany({
      where: {
        id: {
          in: user.bookmarks,
        },
      },
    });

    res.status(200).json(bookmarkedBlogs);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  switch (method) {
    case "GET":
      getBookmark(req, res);
      break;
    case "POST":
      addBookmark(req, res);
      break;
    case "PATCH":
      deleteBookmark(req, res);
      break;
    case "DELETE":
      break;
    default:
      res.status(500).json({ message: "Method not allowed" });
      break;
  }
}

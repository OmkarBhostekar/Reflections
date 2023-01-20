//@ts-nocheck
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";
import { compare } from "bcrypt";
const saltRounds = 10;

const addBookmark = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const userEmail = req.query.userEmail as string;
    const blogId = req.query.blogId as string;
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

    if (!user) {
      res.status(400).json({ message: "User does not exist" });
      return;
    }
    // user.bookmarks.push(blogId);

    // const updatedUser = await prisma.user.update({
    //   where: {
    //     email: userEmail,
    //   },
    //   data: {
    //     bookmarks : [...user.bookmarks, blogId]
    //   }
    // });

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getBookmarks = async (req: NextApiRequest, res: NextApiResponse) => {
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

    res.status(200).json(user.bookmarks);
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
      getBookmarks(req, res);
      break;
    case "POST":
      break;
    case "PATCH":
      break;
    case "DELETE":
      break;
    default:
      res.status(500).json({ message: "Method not allowed" });
      break;
  }
}

import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";

const getMyBlogs = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { userName } = req.query;
    const blogs = await prisma.blog.findMany({
      // @ts-ignore
      where: { authors: userName },
    });
    if (!blogs) {
      res.status(400).json({ message: "Blog doesn't exist" });
      return;
    }
    res.status(200).send(blogs);
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
      getMyBlogs(req, res);
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

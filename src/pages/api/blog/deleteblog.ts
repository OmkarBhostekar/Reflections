import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";

const deleteBlog = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {blogId} = req.body;
    const blog = await prisma.blog.delete({
      where: { id: blogId }
    });
    if (!blog) {
      res.status(400).json({ message: "Blog doesn't exist" });
      return;
    }
    res.status(200).json({ message: "Blog deleted" });
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
      break;
    case "POST":
      deleteBlog(req, res);
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

import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../utils/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  switch (method) {
    case "GET":
      const blogs = await prisma.blog.findMany({
        take: 10,
      });
      res.status(200).json(blogs);
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

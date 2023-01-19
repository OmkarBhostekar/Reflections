import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";

const fetchBlogByCategory = async (
  category: string,
  page: number,
  res: NextApiResponse,
  req: NextApiRequest
) => {
  try {
    const blogs = await prisma.$transaction([
      prisma.blog.findMany({
        select: {
          id: true,
          index: true,
          title: true,
          text: true,
          tags: true,
          timestamp: true,
          url: true,
        },
        where: {
          tags: {
            has: category,
          },
        },
        skip: (page - 1) * 20,
        take: 20,
      }),
      prisma.blog.count({
        where: {
          tags: {
            has: category,
          },
        },
      }),
    ]);
    res.status(200).json({
      blogs: blogs[0],
      pages: Math.ceil(blogs[1] / 20),
    });
  } catch (error) {
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
      let page = 1;
      const category = req.query.category as string;
      if (req.query.page) page = parseInt(req.query.page as string);
      fetchBlogByCategory(category, page, res, req);
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

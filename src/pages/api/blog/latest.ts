import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";

const getLatest = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const latestBlogs = await prisma.blog.findMany({
      orderBy: {
        timestamp: "desc",
      },
      select: {
        id: true,
        title: true,
        index: true,
        text: true,
        timestamp: true,
        tags: true,
      },
      take: 10,
    });
    // const blogs = await prisma.blog.findMany({
    //   where: {
    //     index: {
    //       in: indices,
    //     },
    //   },
    //   select: {
    //     id: true,
    //     title: true,
    //     index: true,
    //     text: true,
    //     timestamp: true,
    //     tags: true,
    //   },
    // });
    res.status(200).send(latestBlogs);
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
      getLatest(req, res);
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

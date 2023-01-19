import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";

const getRecommendations = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const id = req.query.id as string;
    const blog = await prisma.blog.findUnique({
      where: { id: id },
      select: {
        id: true,
        index: true,
        title: true,
      },
    });
    if (!blog) {
      res.status(400).json({ message: "Blog doesn't exist" });
      return;
    }
    const rec = await fetch(process.env.MODEL_API_ENDPOINT + "/recommend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        index: blog.index,
      }),
    });
    console.log(rec);
    const recs = await rec.json();
    const indices = recs["result"];
    if (indices == undefined) {
      res.status(200).send([]);
      return;
    }
    const blogs = await prisma.blog.findMany({
      where: {
        index: {
          in: indices,
        },
      },
      select: {
        id: true,
        title: true,
        index: true,
        text: true,
        timestamp: true,
        tags: true,
      },
    });
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
      getRecommendations(req, res);
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

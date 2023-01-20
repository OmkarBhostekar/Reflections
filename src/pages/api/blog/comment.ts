import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";

const addComment = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id, comment, author, authorImage } = req.body;
    const comments = [];
    comments.push(comment);
    console.log(author);
    const sentiment = await fetch(
      `${process.env.MODEL_API_ENDPOINT}/sentiment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comments: comments,
        }),
      }
    );
    const sentimentResult = await sentiment.json();
    const result = sentimentResult["result"][0] == 1 ? "positive" : "negative";
    const body = {
      text: comment,
      author: author,
      authorImage: authorImage,
      sentiment: result,
    };
    await prisma.blog.update({
      where: { id: id },
      data: {
        comments: {
          push: body,
        },
      },
    });
    res.status(200).json({ result: body });
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
      addComment(req, res);
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

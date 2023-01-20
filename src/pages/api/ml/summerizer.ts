import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";

const summerizer = async (
  str: string,
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    fetch(`${process.env.MODEL_API_ENDPOINT}/summarizer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: str }),
    })
      .then((res) => res.json())
      .then((data) => {
        res.status(200).json({ result: data.result });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
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
      const str = req.body.text as string;
      if (str === undefined || str === null || str === "")
        res.status(400).json({ message: "Bad Request" });
      summerizer(str, req, res);
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

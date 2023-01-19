import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";

const correctString = async (
  str: string,
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    fetch(`${process.env.MODEL_API_ENDPOINT}/corrector`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: str }),
    })
      .then((res) => res.json())
      .then((data) => {
        res.status(200).json(data);
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
      correctString(str, req, res);
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

import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";

const createUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, email, avatar } = req.body;
    const userExists = await prisma.user.findUnique({
      where: {
        // @ts-ignore
        email: email,
      },
    });
    if (userExists) {
      res.status(400).json({ message: "User already exists" });
      return;
    }
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        avatar: avatar,
      },
    });
    res.status(200).json(user);
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
      creatUser(req, res);
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

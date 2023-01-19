import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";
import { hash } from "bcrypt";
const saltRounds = 10;

const resetPass = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    console.log(req.body);

    const user = await prisma.user.findFirst({
      where: {
        // @ts-ignore
        email: email,
      },
    });
    if (!user) {
      res.status(400).json({ message: "User doesn't exist" });
      return;
    }
    hash(password, saltRounds, async (err, hash) => {
      if (err) {
        console.log(err);

        res.status(500).json({ message: "Hashing error" });
        return;
      }
      const newUser = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          password: hash,
        },
        select: {
          id: true,
          name: true,
          avatar: true,
          email: true,
        },
      });
      res.status(200).json(newUser);
    });
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
      resetPass(req, res);
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

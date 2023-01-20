import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";


const deleteBlog = async (req: NextApiRequest, res: NextApiResponse) => {
    try {

        const id = req.query.id as string;
        const username = req.body.username;
        const blog = await prisma.blog.findUnique({
            where: { id: id },
            select: {
                id: true,
                index: true,
                title: true,
                username: true,
            },
        });
        if (!blog) {
            res.status(400).json({ message: "Blog doesn't exist" });
            return;
        }

        if (blog.username === username) {

            blog.username = req.body.username;
           
            const deleteBlog = await prisma.blog.delete({
                where: {
                    id: id,
                },
            });
        } else {
            res.status(400).json({ message: "You are not the owner of this blog" });
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
        break;
      case "PATCH":
        break;
      case "DELETE":
        deleteBlog(req, res);
        break;
      default:
        res.status(500).json({ message: "Method not allowed" });
        break;
    }
  }
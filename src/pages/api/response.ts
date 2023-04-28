import connectMongo from "@/utils/connectMongo";
import Response from "@/models/Response";
import { NextApiRequest, NextApiResponse } from "next";
import { IResponse } from "@/utils/types";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addTest(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongo();
    if (req.method === "POST") {
      try {
        const { user, responses }: IResponse = req.body;

        const foundUser = await Response.find({ user: user });

        if (foundUser.length > 0) {
          return res.status(400).json({ message: "User already exists" });
        }

        const response = new Response({
          user,
          responses,
          completed: true,
        });
        await response.save();
        res.status(200).json({ message: "Survey added successfully" });
      } catch (error) {
        res.status(400).json({ message: "Bad Request" });
      }
    } else {
      res.status(405).json({ message: "Unsupported Request" });
    }
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

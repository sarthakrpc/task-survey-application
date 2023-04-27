import connectMongo from "@/utils/connectMongo";
import Survey from "@/models/SurveyModel";
import { NextApiRequest, NextApiResponse } from "next";
import { ISurvey } from "@/utils/types";

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
      const { question, inputType, inputOptionsRating } : ISurvey =
        req.body;
      const survey = new Survey({
        question,
        inputType,
        inputOptionsRating,
      });
      await survey.save();
      res.status(200).json({ message: "Survey added successfully" });
    } else if (req.method === "GET") {
      const surveys = await Survey.find({});
      res.status(200).json({ surveys });
    } else {
      res.status(405).json({ message: "Unsupported Request" });
    }
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

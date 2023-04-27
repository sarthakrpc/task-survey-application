import { Schema, model, models } from "mongoose";
import { ISurvey } from "@/utils/types";

const surveySchema = new Schema<ISurvey>(
  {
    question: {
      type: String,
      required: true,
    },

    inputType: {
      type: String,
      enum: ["text", "rating"],
      required: true,
    },

    inputOptionsRating: {
      type: [String],
      required: false,
    },
  },

  {
    timestamps: true,
  }
);

const Survey = models.Survey || model("Survey", surveySchema);

export default Survey;

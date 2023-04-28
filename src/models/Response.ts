import { Schema, model, models } from "mongoose";
import { IResponse } from "@/utils/types";

const responseSchema = new Schema<IResponse>(
  {
    user: {
      type: String,
      required: true,
    },

    responses: [
      {
        questionId: {
          type: Schema.Types.ObjectId,
          required: false,
          unique: false,
        },
        answer: {
          type: String,
          required: false,
        },
      },
    ],
    completed: {
      type: Boolean,
      required: false,
    },
  },

  {
    timestamps: true,
  }
);

const Response = models.Response || model("Response", responseSchema);

export default Response;

import { Schema, model, models } from "mongoose";

const dataSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },

    responses: [
      {
        questionId: {
          type: Schema.Types.ObjectId,
          required: true,
          unique: true,
        },
        answer: {
          type: String,
          required: true,
        },
      },
    ],
  },

  {
    timestamps: true,
  }
);

const Data = models.Data || model("Data", dataSchema);

export default Data;

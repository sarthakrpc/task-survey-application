interface ISurvey {
  question: string;
  inputType: "text" | "rating";
  inputOptionsRating: [String] | null;
}

interface IResponse {
  user: string;
  responses:
    | [
        {
          questionId: string | null;
          answer: string | null;
        }
      ]
    | null;
  completed: boolean | null;
}

export type { ISurvey, IResponse };

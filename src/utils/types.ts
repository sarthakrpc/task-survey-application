interface ISurvey {
  question: string;
  inputType: "text" | "rating";
  inputOptionsRating: [String] | null;
}

export type { ISurvey };

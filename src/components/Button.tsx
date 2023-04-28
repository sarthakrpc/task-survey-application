import React from "react";

type ButtonProps = {
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
};

const Prev = ({ currentQuestion, setCurrentQuestion }: ButtonProps) => {
  return (
    <button
      className="px-5 py-2 text-white font-semibold rounded-md bg-blue-600 hover:bg-blue-700 transition-all"
      onClick={() => setCurrentQuestion(currentQuestion - 1)}
    >
      Prev
    </button>
  );
};

const Next = ({ currentQuestion, setCurrentQuestion }: ButtonProps) => {
  return (
    <button
      className="px-5 py-2 text-white font-semibold rounded-md bg-pink-500 hover:bg-pink-600 transition-all"
      onClick={() => setCurrentQuestion(currentQuestion + 1)}
    >
      Next
    </button>
  );
};

export { Prev, Next };

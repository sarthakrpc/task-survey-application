import React from "react";

const Prev = () => {
  return (
    <button className="px-5 py-2 text-white font-semibold rounded-md bg-blue-600 hover:bg-blue-700 transition-all">
      Prev
    </button>
  );
};

const Next = () => {
  return (
    <button className="px-5 py-2 text-white font-semibold rounded-md bg-pink-500 hover:bg-pink-600 transition-all">
      Next
    </button>
  );
};

export { Prev, Next };

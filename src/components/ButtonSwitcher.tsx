import { Prev, Next } from "./Button";

interface PropTypes {
	surveys: any;
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonSwitcher = ({
  surveys,
  currentQuestion,
  setCurrentQuestion,
  setOpen,
}: PropTypes) => {
  return (
    <div className="flex flex-row justify-between">
      {currentQuestion === 1 ? (
        <div className="m-auto"></div>
      ) : (
        <Prev
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
        />
      )}

      {currentQuestion === surveys.length ? (
        <button
          className="px-5 py-2 text-white font-semibold rounded-md bg-green-500 hover:bg-green-600 transition-all"
          onClick={() => setOpen(true)}
        >
          Finish
        </button>
      ) : (
        <Next
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
        />
      )}
    </div>
  );
};

export default ButtonSwitcher;

import { Prev, Next } from "@/components/Button";
import { ISurvey } from "@/utils/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import axios from "axios";
import { checkEnvironment } from "@/components/checkEnvironment";
import { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import ButtonSwitcher from "@/components/ButtonSwitcher";

interface id extends ISurvey {
  _id: string;
}

interface SurveyProps {
  surveys: [id];
}

export async function getData() {
  const { data } = await axios.get(checkEnvironment().concat("question"));
  return data;
}

export const getServerSideProps = async () => {
  const { surveys }: SurveyProps = await getData();

  if (!surveys) {
    return {
      notFound: true,
    };
  }
  return {
    props: { surveys }, // will be passed to the page component as props
  };
};

const Survey = ({
  surveys,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Random user generator
    const user = Math.random().toString(36).substring(7);
    sessionStorage.setItem("user", user);
  }, []);

  const [answers, setAnswers] = useState<Object[]>([]);

  const submitValue = (id: string, data: string) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: data,
    }));
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center p-2">
        <div className="text-center rounded-lg border border-black/10 sm:p-8 p-4 py-6 bg-blue-100 w-full max-w-lg">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-black/90">Customer Survey</h2>
          </div>

          <div className="text-right mr-2 mb-6">
            <h5 className="text-base font-semibold text-gray-900/90">
              {currentQuestion + "/5"}
            </h5>
          </div>

          <div className="mb-8 flex flex-row items-start justify-center text-left">
            <h6 className="text-base font-semibold text-gray-950 mr-2">{`${currentQuestion}.`}</h6>
            <div className="flex flex-col">
              <h6 className="text-base font-semibold text-gray-950 mb-4">
                {surveys[currentQuestion - 1].question}
              </h6>
              <div className="flex flex-wrap justify-center items-center">
                {surveys[currentQuestion - 1]?.inputType === "text" ? (
                  <input
                    type="text"
                    className="w-full h-10 px-3 text-base placeholder-gray-500 border rounded-lg focus:outline-1 outline-blue-200"
                    placeholder="Enter your answer here"
                    value={answers[surveys[currentQuestion - 1]?._id] || ""}
                    onChange={(e) => {
                      submitValue(
                        surveys[currentQuestion - 1]?._id,
                        e.target.value
                      );
                    }}
                  />
                ) : (
                  <>
                    {surveys[currentQuestion - 1]?.inputOptionsRating?.map(
                      (option, index) => {
                        return (
                          <button
                            key={index}
                            className={`flex justify-center items-center w-8 h-8 p-2 mr-2 mb-2 border-gray-400 border leading-none font-semibold rounded-full text-center  transition-all cursor-pointer ${
                              answers[surveys[currentQuestion - 1]?._id] ===
                              option.toString()
                                ? "bg-red-600 text-white"
                                : "bg-white"
                            }`}
                            value={answers[surveys[currentQuestion - 1]?._id]}
                            onClick={() => {
                              submitValue(
                                surveys[currentQuestion - 1]?._id,
                                option.toString()
                              );
                            }}
                          >
                            {option}
                          </button>
                        );
                      }
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          <ButtonSwitcher
            surveys={surveys}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            setOpen={setOpen}
          />

          <div className="m-auto"></div>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} answers={answers} />
    </>
  );
};

export default Survey;

import { Prev, Next } from "@/components/Button";

const Survey = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-2">
      <div className="text-center rounded-lg border border-black/10 sm:p-8 p-4 py-6 bg-blue-100">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-black/90">Customer Survey</h2>
        </div>

        <div className="text-right mr-2 mb-6">
          <h5 className="text-base font-semibold text-gray-900/90">{"1/5"}</h5>
        </div>

        <div className="mb-8 flex flex-row items-start justify-start text-left">
          <h6 className="text-base font-semibold text-gray-950 mr-2">1.</h6>
          <div className="flex flex-col">
            <h6 className="text-base font-semibold text-gray-950 max-w-xl mb-4">
              meyou recommend us to your friends and family?
            </h6>
            <div className="flex flex-wrap justify-center items-center">
              <div className="flex flex-row">
                <button className="flex justify-center items-center w-8 h-8 p-2 mr-2 mb-2 border-gray-400 border leading-none font-semibold rounded-full text-center bg-white hover:bg-red-100 transition-all cursor-pointer">
                  1
                </button>
                <button className="flex justify-center items-center w-8 h-8 p-2 mr-2 mb-2 border-gray-400 border leading-none font-semibold rounded-full text-center bg-white hover:bg-red-100 transition-all cursor-pointer">
                  2
                </button>
                <button className="flex justify-center items-center w-8 h-8 p-2 mr-2 mb-2 border-gray-400 border leading-none font-semibold rounded-full text-center bg-white hover:bg-red-100 transition-all cursor-pointer">
                  3
                </button>
                <button className="flex justify-center items-center w-8 h-8 p-2 mr-2 mb-2 border-gray-400 border leading-none font-semibold rounded-full text-center bg-white hover:bg-red-100 transition-all cursor-pointer">
                  4
                </button>
                <button className="flex justify-center items-center w-8 h-8 p-2 mr-2 mb-2 border-gray-400 border leading-none font-semibold rounded-full text-center bg-white hover:bg-red-100 transition-all cursor-pointer">
                  5
                </button>
              </div>
              <div className="flex flex-row"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <Prev />
          <Next />
        </div>

        <div className="m-auto"></div>
      </div>
    </div>
  );
};

export default Survey;

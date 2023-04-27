import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-2">
      <div className="text-center rounded-lg border border-black/10 w-fit sm:p-8 p-4 py-6 bg-blue-100">
        <div className="mb-3">
          <h1 className="text-3xl font-bold text-black/90">WELCOME</h1>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-medium text-gray-900/90">
            This is a customer satisfaction survey
          </h2>
        </div>

        <div className="mb-4">
          <h6 className="text-base font-normal text-blue-700 max-w-md m-auto leading-4">
            Thanks for being a loyal customer. Please take a few minutes to help
            us improve our services by taking the survey. To begin, click the
            button below.
          </h6>
        </div>

        <div className="m-auto">
          <Link href="/survey">
            <button className="px-5 py-2 text-white font-semibold rounded-md bg-blue-600">
              Start
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

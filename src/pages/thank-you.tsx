import { useRouter } from "next/router";
import { useEffect } from "react";

const Thank = () => {
  const router = useRouter();
  useEffect(() => {
    sessionStorage.clear();
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center p-2">
      <div className="text-center rounded-lg border border-black/10 h-96 sm:p-8 sm:px-16 p-4 py-6 w-full bg-blue-100">
        <div className="mb-3 flex justify-center items-center w-full h-full">
          <h1 className="text-3xl font-bold text-blue-800/90">
            Thank you for your response
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Thank;

import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="lg:w-full max-w-screen-lg m-auto">
      <Component {...pageProps} />
    </div>
  );
}

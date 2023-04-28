import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NProgress from "nprogress";
import Router from "next/router";
import "nprogress/nprogress.css";

NProgress.configure({
  showSpinner: false,
  easing: "ease",
  speed: 500,
  trickleSpeed: 800,
});
Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  NProgress.done();
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="lg:w-full max-w-screen-lg m-auto">
      <Component {...pageProps} />
    </div>
  );
}

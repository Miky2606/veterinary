import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout/layout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ToastContainer
        position="top-center"
        pauseOnFocusLoss={false}
        autoClose={2000}
      />
    </Layout>
  );
}

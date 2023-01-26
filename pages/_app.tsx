import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout/layout";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

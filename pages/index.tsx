import Head from "next/head";
import { About } from "../components/about/about";
import { Contact } from "../components/contact/contact";
import { Hero } from "../components/hero/home_view";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fiddlesticks Veterinary</title>
        <meta
          name="description"
          content="We are a full service animal hospital located in Fort Myers. Dr. Lisa Cooper and Dr. Brian Theiss have been practicing veterinary medicine for over 25 years. "
        />
        <link rel="icon" href="/img/logo.png" />
        <link rel="shorcut icon" href="/img/logo.png" />
      </Head>
      <Hero />
      <About />
      <Contact />
    </>
  );
}

import Home from "@/layouts/home";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <meta name="description" content="kappa-square" />
        <title>Kappa Square</title>
      </Head>
      <Home />
    </>
  );
}

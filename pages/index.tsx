import Home from "@/layouts/home";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="KAPPA SQUARE LIMITED (Project Developers/Promoters) is a proprietary investment family office with a focus on real estate development."
        />
        <title>Kappa Square</title>
      </Head>
      <Home />
    </>
  );
}

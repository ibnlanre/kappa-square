import { Portfolio } from "@/layouts/portfolio";
import Head from "next/head";

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <meta name="description" content="about-us" />
        <title>Kappa Square | About Us</title>
      </Head>
      <Portfolio />
    </>
  );
}

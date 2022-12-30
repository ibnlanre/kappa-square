import { Portfolio } from "@/layouts/portfolio";
import Head from "next/head";

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <meta name="description" content="portfolio" />
        <title>Kappa Square | Portfolio</title>
      </Head>
      <Portfolio />
    </>
  );
}

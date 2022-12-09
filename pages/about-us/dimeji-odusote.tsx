import { Directors } from "@/layouts/aboutUs/directors";
import { DimejiOdusotePage } from "@/layouts/aboutUs/directors/dimejiOdusote";

import Head from "next/head";

export default function () {
  return (
    <Directors person={<DimejiOdusotePage />}>
      <Head>
        <meta name="description" content="dimeji-odusote" />
        <title>About Us | Dimeji Odusote</title>
      </Head>
    </Directors>
  );
}

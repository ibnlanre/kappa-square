import { Directors } from "@/layouts/aboutUs/directors";
import { FemiOdusotePage } from "@/layouts/aboutUs/directors/femiOdusote";

import Head from "next/head";

export default function () {
  return (
    <Directors person={<FemiOdusotePage />}>
      <Head>
        <meta name="description" content="femi-odusote" />
        <title>About Us | Femi Odusote</title>
      </Head>
    </Directors>
  );
}

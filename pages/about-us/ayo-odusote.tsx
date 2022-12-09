import { Directors } from "@/layouts/aboutUs/directors";
import { AyoOdusotePage } from "@/layouts/aboutUs/directors/ayoOdusote";

import Head from "next/head";

export default function () {
  return (
    <Directors person={<AyoOdusotePage />}>
      <Head>
        <meta name="description" content="ayo-odusote" />
        <title>About Us | Ayo Odusote</title>
      </Head>
    </Directors>
  );
}

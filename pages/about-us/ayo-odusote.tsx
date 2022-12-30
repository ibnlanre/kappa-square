import { Directors } from "@/layouts/aboutUs/boardOfDirectors/directors";
import { AyoOdusotePage } from "@/layouts/aboutUs/boardOfDirectors/directors/ayoOdusote";

import Head from "next/head";

export default function AyoOdusote() {
  return (
    <Directors person={<AyoOdusotePage />}>
      <Head>
        <meta name="description" content="Ayo Odusote" />
        <title>Kappa Square | About Us</title>
      </Head>
    </Directors>
  );
}

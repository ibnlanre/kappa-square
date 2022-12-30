import { Directors } from "@/layouts/aboutUs/directors";
import { FemiOdusotePage } from "@/layouts/aboutUs/directors/femiOdusote";

import Head from "next/head";

export default function FemiOdusote() {
  return (
    <Directors person={<FemiOdusotePage />}>
      <Head>
        <meta name="description" content="Femi Odusote" />
        <title>Kappa Square | About Us</title>
      </Head>
    </Directors>
  );
}

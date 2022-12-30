import { Directors } from "@/layouts/aboutUs/boardOfDirectors/directors";
import { DimejiOdusotePage } from "@/layouts/aboutUs/boardOfDirectors/directors/dimejiOdusote";

import Head from "next/head";

export default function DimejiOdusote() {
  return (
    <Directors person={<DimejiOdusotePage />}>
      <Head>
        <meta name="description" content="Dimeji Odusote" />
        <title>Kappa Square | About Us</title>
      </Head>
    </Directors>
  );
}

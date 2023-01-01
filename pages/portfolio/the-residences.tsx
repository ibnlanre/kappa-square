import { ActionIcon } from "@mantine/core";
import { ArrowLeft } from "iconsax-react";
import { useRef, useState } from "react";
import { css } from "@emotion/css";

import Link from "next/link";
import Head from "next/head";

import {
  Brochure,
  Details,
  Landing,
  Views,
} from "@/layouts/portfolio/property";

export default function TheResidencesPage() {
  const jumboRef = useRef<HTMLElement>();
  const linkRef = useRef<HTMLButtonElement>();

  const [offset, setOffset] = useState(false);

  function handleScroll() {
    if (jumboRef.current && linkRef.current) {
      const { top: linkTop, bottom: linkBottom } =
        linkRef.current.getBoundingClientRect();

      const { top: jumboTop, bottom: jumboBottom } =
        jumboRef.current.getBoundingClientRect();

      setOffset(linkBottom > jumboTop && linkTop < jumboBottom);
    }
  }

  return (
    <div onScroll={handleScroll} className="grid h-screen overflow-auto">
      <Head>
        <meta name="description" content="The Residences" />
        <title>Kappa Square | Portfolio</title>
      </Head>

      <article className="h-[100vh] w-full relative sm:pt-28">
        <Landing ref={jumboRef} />
        <section className="absolute top-0 h-full">
          <div className="top-0 hidden pb-6 pl-10 pt-14 lg:block lg:sticky">
            <Link href="/portfolio">
              <ActionIcon
                ref={linkRef}
                className={css({
                  color: offset ? "white" : "black",
                  "&:hover": {
                    color: "black",
                  },
                })}
                size="lg"
              >
                <ArrowLeft size={30} />
              </ActionIcon>
            </Link>
          </div>
        </section>
      </article>

      <section className="grid gap-12 clamp-body clump:py-[clamp(2rem,5vw,9rem)]">
        <Details />
        <Views />
        <Brochure />
      </section>
    </div>
  );
}

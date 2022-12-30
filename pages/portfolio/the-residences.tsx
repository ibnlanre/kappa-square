import { ActionIcon } from "@mantine/core";
import { ArrowLeft } from "iconsax-react";
import { useEffect, useRef, useState } from "react";
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
  const ref = useRef<HTMLElement>();
  const containerRef = useRef<HTMLDivElement>();
  const linkRef = useRef<HTMLButtonElement>();

  const [scroll, setScroll] = useState(0);
  const [offset, setOffset] = useState(false);

  useEffect(() => {
    if (ref.current && linkRef) {
      const { top: linkTop, bottom: linkBottom } =
        linkRef.current.getBoundingClientRect();
      const { top, bottom } = ref.current.getBoundingClientRect();
      setOffset(linkBottom > top && linkTop < bottom);
    }
  }, [scroll]);

  return (
    <div
      onScrollCapture={() => setScroll(containerRef.current?.scrollTop)}
      ref={containerRef}
      className="grid h-screen overflow-auto"
    >
      <Head>
        <meta name="description" content="The Residences" />
        <title>Kappa Square | Portfolio</title>
      </Head>

      <article className="h-[100vh] w-full relative sm:pt-28">
        <Landing ref={ref} />
        <section className="absolute top-0 h-full">
          <div className="top-0 hidden pb-6 pl-10 pt-14 lg:block sm:sticky">
            <Link href="/portfolio">
              <ActionIcon
                className={css({
                  color: offset ? "white" : "black",
                  "&:hover": {
                    color: "black"
                  },
                })}
                ref={linkRef}
                size="lg"
              >
                <ArrowLeft />
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

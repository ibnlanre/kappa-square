import { css } from "@emotion/css";

import AyoOdusote from "../assets/ayo-odusote.png";
import Image from "next/image";

export function AyoOdusotePage() {
  return (
    <article className="flex flex-col flex-1 gap-6 py-12 overflow-auto lg:block">
      <figure className="lg:float-left lg:w-[425px] w-full max-w-full lg:pr-6">
        <picture className="relative block pb-[45vmin]">
          <Image
            fill
            className="object-cover object-top"
            src={AyoOdusote.src}
            blurDataURL={AyoOdusote.blurDataURL}
            placeholder="blur"
            alt="Ayo Odusote"
          />
        </picture>
        <div className="grid w-full gap-3 py-6 text-white px-7 bg-primary-800 h-max">
          <h4>Ayo Odusote</h4>
          <small>- Director</small>
        </div>
      </figure>
      <section
        className={css({
          maxWidth:"100%",
          textAlign: "justify",
          marginInline: "-10px",
          marginBlock: "-24px",
          "& p": {
            marginInline: "10px",
            marginBlock: "24px",
          },
        })}
      >
        <p>
          Ayo is a Partner in Deloitte Consulting's strategy practice with 17
          years of consulting experience, serving clients in the Technology and
          Telecom sectors.
        </p>

        <p>
          He is also the leader of Deloitte's XaaS practice where he harnesses
          the breadth and depth of the firm's talent and capabilities to bring
          end to end solutions to clients looking to transition to an
          as-a-service business model or scale their existing XaaS offerings.
        </p>

        <p>
          He advises business leaders on business transformation, with specific
          expertise in transforming Sales, Channel, and Customer operations. He
          achieves this by designing new business-to-business experiences and
          implementing innovative digital capabilities across Lead to Cash
          lifecycle, to ultimately Elevate the Human Experience for their
          Customers and Partners.
        </p>

        <p>
          Ayo has a successful track record of helping clients implement new
          transformational capabilities - his technology background and business
          experience enables him to effectively play a critical leadership and
          mediation role, from concept through realization.
        </p>

        <p>
          Ayo joined Deloitte in 2005 after earning his MBA from the Robert H.
          Smith School of Business at the University of Maryland. Prior to
          business school he was a consultant with PwC Consulting. Ayo graduated
          from the University of Ife, with a Bachelor of Science in Computer
          Engineering.
        </p>
      </section>
    </article>
  );
}

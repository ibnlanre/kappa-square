import { css } from "@emotion/css";

import FemiOdusote from "../assets/femi-odusote.png";
import Image from "next/image";

export function FemiOdusotePage() {
  return (
    <article className="flex flex-col flex-1 gap-6 pb-12 mt-12 overflow-auto lg:block">
      <figure className="lg:float-left lg:w-[425px] w-full max-w-full lg:pr-6">
        <picture className="relative block pb-[45vmin]">
          <Image
            fill
            className="object-cover object-top"
            src={FemiOdusote.src}
            blurDataURL={FemiOdusote.blurDataURL}
            placeholder="blur"
            alt="Femi Odusote"
          />
        </picture>
        <div className="grid w-full gap-3 py-6 text-white px-7 bg-primary-800 h-max">
          <h4>Femi Odusote</h4>
          <small>- Director</small>
        </div>
      </figure>
      <section
        className={css({
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
          Femi has over 18 years of experience in the upstream sector of the oil
          industry. He has worked in various roles including Technical Research,
          Asset Management, Reservoir & Production Engineering, Production
          Operations, Reservoir Simulation, and Business Strategy/Planning.
        </p>

        <p>
          He began his career as an engineering trainee and has since been
          involved in various projects and initiatives that from the swamps of
          the Niger Delta to the shale basins of the continental USA.
        </p>

        <p>
          Femi is a proud alumnus of the Nigerian Navy Secondary School, Ojo and
          holds a BSc degree in Mechanical Engineering from the University of
          Lagos, an MSc in Petroleum and Natural Gas Engineering as well as an
          MBA both from the Pennsylvania State University, USA. He is a
          registered engineer in Nigeria as well as a member of the Society of
          Petroleum Engineers, and the Nigerian Society of Engineers.
        </p>

        <p>
          Femi has a passion for mentorship and development of young leaders
          especially in the engineering space. He has been involved in several
          student focused programs with the Society of Petroleum Engineers. He
          co-founded and is a director at LEEDS initiative, a non-profit and
          non-political organization founded to promote economic empowerment of
          Nigerian Engineers through Engineering and Technology.
        </p>

        <p>
          Femi is currently based in Lagos and is happily married with 2
          children.
        </p>
      </section>
    </article>
  );
}

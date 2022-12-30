import { css } from "@emotion/css";

import DimejiOdusote from "../assets/dimeji-odusote.png";
import Image from "next/image";

export function DimejiOdusotePage() {
  return (
    <article className="flex flex-col flex-1 gap-6 py-12 overflow-auto lg:block">
      <figure className="lg:float-left lg:w-[425px] w-full max-w-full lg:pr-6">
        <picture className="relative block pb-[45vmin]">
          <Image
            fill
            className="object-cover object-center"
            src={DimejiOdusote.src}
            blurDataURL={DimejiOdusote.blurDataURL}
            placeholder="blur"
            alt="Dimeji Odusote"
          />
        </picture>
        <div className="grid w-full gap-3 py-6 text-white px-7 bg-primary-800 h-max">
          <h4>Dimeji Odusote</h4>
          <small>- Director</small>
        </div>
      </figure>
      <section
        className={css({
          maxWidth: "100%",
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
          Dimeji is a Real Estate Development Professional with over a decade of
          management experience working across West Africa. He has served in
          various capacities along the real estate value chain - from
          Feasibility & Investments, to Design, Project Development, Operations
          and Asset Management. He has also been involved with a variety of
          asset types with extensive experience in the Hospitality sector among
          others.
        </p>

        <p>
          Dimeji is currently Principal at D_O_DESIGN BUILD, a design
          consultancy and project development firm he founded in 2018 with a
          commitment to demonstrating excellence in the built environment.
          Previous design projects include Golden Tulip Hotels in Oniru and
          Lekki. The firm is currently providing design and development
          management services for "3a Ikoya - The Residences", a high end multi
          terrace unit development in Ikoyi, Lagos.
        </p>

        <p>
          From 2020 to 2022, he was Executive Director, Real Estate at Sankore
          Investments. In this role he directed a multidisciplinary team in the
          development of an investment grade portfolio of assets in
          non-traditional and frontier sectors including PBSAs (Purpose Built
          Student Accommodation) and housing for young professionals.
        </p>

        <p>
          Prior to joining Sankore, he was Country Manager/MD of Mixta Senegal -
          a subsidiary of Mixta Africa, a pan-African Real Estate development
          company with a focus on mixed income residential developments and
          alternative interests in the hospitality sector.
        </p>

        <p>
          This was preceded by a Senior Manager role within the Hospitality &
          Retail Investment/ Development unit of Mixta Africa, where he
          functioned as Asset manager of operating assets including the Four
          Points by Sheraton Lagos and The Corporate Lodge & Cottages at Lakowe
          Lakes. In this role he also he also served as development manager on a
          number of pipeline developments including a 200 key 4-star hotel in
          Dakar, Senegal.
        </p>

        <p>
          Dimeji's other experiences include a role as Senior Manager
          (Development & Franchise services) with the West African subsidiary of
          the international hotel company, the Louvre Hotel Group; and a role as
          Real Estate Associate with the Lionstone Group, a proprietary
          investment company in Lagos.
        </p>

        <p>
          He started his career working as an Architect with the premier
          architectural firm, Design Group Nigeria, and also co-founded the
          Architecture and design illustration firms MindsEye Associates Ltd and
          MindsEye Ltd.
        </p>

        <p>
          Dimeji Holds Bachelors and Masters Degrees in Architecture from the
          University of Lagos, as well as a Masters Degree in Real Estate
          Development from the Massachusetts Institute of Technology (MIT).
        </p>
      </section>
    </article>
  );
}

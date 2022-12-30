import Image, { StaticImageData } from "next/image";

import Hexagons from "@/assets/hexagons.png";

import Ikoyi from "./assets/ikoyi/main.jpg";
import IkoyiOne from "./assets/ikoyi/image-1.png";
import IkoyiTwo from "./assets/ikoyi/image-2.png";
import IkoyiThree from "./assets/ikoyi/image-3.png";
import Link from "next/link";
import { clsx } from "@mantine/core";

type Content = {
  property: string;
  address: string;
  images: Array<StaticImageData>;
  main: StaticImageData;
  href: string;
};

const PORTFOLIO: Array<Content> = [
  {
    href: "/portfolio/the-residences",
    property: "The Residences @ 3a Ikoya",
    address: "3a Ikoya Avenue, Ikoyi",
    main: Ikoyi,
    images: [IkoyiOne, IkoyiTwo, IkoyiThree],
  },
];

export function Portfolio() {
  return (
    <article
      style={{
        backgroundImage: `url(${Hexagons.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className={clsx(
        "grid content-start w-full gap-10",
        "px-0 sm:pr-44 clump:sm:pr-[clamp(.5rem,15vw,11rem)]",
        "py-36 clump:py-[clamp(5rem,5vw,9rem)]",
        "sm:pl-32 clump:sm:pl-[clamp(1rem,4vw,8rem)] lg:pl-32"
      )}
    >
      <h2 className="px-4 text-3xl font-semibold uppercase sm:px-0">
        Portfolio
      </h2>
      <section
        style={{
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(310px, 100%), 1fr))",
        }}
        className="grid gap-5 px-0"
      >
        {PORTFOLIO.map((content) => {
          return (
            <Link key={content.property} href={content.href}>
              <figure className="relative grid w-full pb-[100%] cursor-pointer">
                <Image
                  fill
                  className="object-cover"
                  src={content?.main.src}
                  blurDataURL={content?.main.blurDataURL}
                  alt={content?.property}
                  placeholder="blur"
                  />
                <div className="absolute bottom-0 grid w-full gap-3 text-white p-7 bg-primary-800">
                  <p className="uppercase">{content.property}</p>
                  <p>{content.address}</p>
                </div>
              </figure>
            </Link>
          );
        })}
      </section>
    </article>
  );
}

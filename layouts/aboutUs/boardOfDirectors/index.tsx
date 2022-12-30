import { clsx } from "@mantine/core";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import AyoOdusote from "./assets/ayo-odusote.png";
import DimejiOdusote from "./assets/dimeji-odusote.png";
import FemiOdusote from "./assets/femi-odusote.png";

const DIRECTORS: Array<{
  name: string;
  image: StaticImageData;
  link: string;
  style: string;
}> = [
  {
    name: "Ayo Odusote",
    image: AyoOdusote,
    link: "ayo-odusote",
    style: "object-cover object-top",
  },
  {
    name: "Femi Odusote",
    image: FemiOdusote,
    link: "femi-odusote",
    style: "object-cover object-top",
  },
  {
    name: "Dimeji Odusote",
    image: DimejiOdusote,
    link: "dimeji-odusote",
    style: "object-cover",
  },
];

export function BoardOfDirectors() {
  return (
    <section className="grid gap-9">
      <h3 className="text-3xl font-semibold">Board of Directors</h3>
      <div className="grid gap-3 grid-cols-[repeat(auto-fit,_minmax(min(250px,100%),_1fr))] justify-items-stretch">
        {DIRECTORS.map(({ name, image, link, style }) => (
          <Link key={name} className="" href={"/about-us/" + link}>
            <figure className="relative grid group pt-[100%]">
              <Image
                fill
                className={style}
                src={image.src}
                blurDataURL={image.blurDataURL}
                placeholder="blur"
                alt={name}
              />

              <div
                className={clsx(
                  "group-hover:opacity-100 md:opacity-0",
                  "group-hover:bg-opacity-80 bg-primary-800",
                  "grid content-end w-full h-max text-white",
                  "absolute bottom-0 duration-500 px-7 py-6 gap-3"
                )}
              >
                <h4>{name}</h4>
                <small>- Director</small>
              </div>
            </figure>
          </Link>
        ))}
      </div>
    </section>
  );
}

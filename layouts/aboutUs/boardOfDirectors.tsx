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
}> = [
  {
    name: "Femi Odusote",
    image: FemiOdusote,
    link: "femi-odusote",
  },
  {
    name: "Ayo Odusote",
    image: AyoOdusote,
    link: "ayo-odusote",
  },
  {
    name: "Dimeji Odusote",
    image: DimejiOdusote,
    link: "dimeji-odusote",
  },
];

export function BoardOfDirectors() {
  return (
    <section className="grid gap-9">
      <h3 className="text-3xl font-semibold">Board of Directors</h3>
      <div className="grid md:grid-cols-3 gap-3 justify-items-stretch md:h-[30vh]">
        {DIRECTORS.map(({ name, image, link }) => (
          <figure key={name} className="relative grid group pt-[100%]">
            <Image
              fill
              className="object-cover object-top"
              src={image.src}
              blurDataURL={image.blurDataURL}
              placeholder="blur"
              alt={name}
            />
            <Link className="relative md:static" href={"/about-us/" + link}>
              <div
                className={clsx(
                  "md:absolute grid content-end w-full gap-3 py-6 text-white md:opacity-0 top-[100%] md:bottom-auto md:top-[80%]",
                  "duration-500 px-7 group-hover:bg-opacity-80 bg-primary-800 h-max group-hover:opacity-100"
                )}
              >
                <h4>{name}</h4>
                <small>- Director</small>
              </div>
            </Link>
          </figure>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";

import HouseWithMagnifyingGlass from "./assets/house-with-magnifying-glass.jpeg";

export function Heading() {
  return (
    <header className="contents">
      <h2 className="text-3xl font-semibold uppercase">About Us</h2>
      <figure className="relative grid h-[55vh]">
        <Image
          fill
          className="object-cover"
          src={HouseWithMagnifyingGlass.src}
          blurDataURL={HouseWithMagnifyingGlass.blurDataURL}
          alt="Tierra Mallorca - House with Magnifying Glass"
          placeholder="blur"
          priority
        />
      </figure>
    </header>
  );
}

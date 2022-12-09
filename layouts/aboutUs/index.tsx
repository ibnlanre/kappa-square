import { Heading } from "./heading";
import { WhoWeAre } from "./whoWeAre";
import { BoardOfDirectors } from "./boardOfDirectors";

import Hexagons from "@/assets/hexagons.png";

export function AboutUs() {
  return (
    <article
      style={{
        backgroundImage: `url(${Hexagons.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="grid h-screen pl-32 overflow-auto text-justify gap-9 py-36 pr-44"
    >
      <Heading />
      <WhoWeAre />
      <BoardOfDirectors />
    </article>
  );
}

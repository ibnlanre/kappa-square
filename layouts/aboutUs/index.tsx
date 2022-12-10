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
      className="grid h-screen overflow-auto gap-9 clamp-body"
    >
      <Heading />
      <WhoWeAre />
      <BoardOfDirectors />
    </article>
  );
}

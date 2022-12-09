import Image, { StaticImageData } from "next/image";
import { useState } from "react";

import Hexagons from "@/assets/hexagons.png";

import IkoyiOne from "./assets/ikoyi/image-1.png";
import IkoyiTwo from "./assets/ikoyi/image-2.png";
import IkoyiThree from "./assets/ikoyi/image-3.png";
import { PortfolioModal } from "./modal";

type Content = {
  property: string;
  address: string;
  images: Array<StaticImageData>;
};

const PORTFOLIO: Array<Content> = [
  {
    property: "3A IKOYA RESIDENCE",
    address: "40A, Raymond Njoku street, Ikoyi, Lagos.",
    images: [IkoyiOne, IkoyiTwo, IkoyiThree],
  },
];

export function Portfolio() {
  const [modalContent, setModalContent] = useState<{
    open: boolean;
    content?: Content;
  }>({
    open: false,
  });

  return (
    <article
      style={{
        backgroundImage: `url(${Hexagons.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="grid content-start w-full gap-10 pl-32 pr-44 pt-36"
    >
      <h2 className="text-3xl font-semibold uppercase">About Us</h2>
      <section
        style={{
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(275px, 100%), 1fr))",
        }}
        className="grid gap-5"
      >
        {PORTFOLIO.map((content) => {
          return (
            <figure
              key={content.property}
              onClick={() =>
                setModalContent({
                  open: true,
                  content,
                })
              }
              className="relative grid w-full pb-[100%] group cursor-pointer"
            >
              <Image
                fill
                className="object-cover"
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11"
                alt="about us"
              />
              <div className="absolute bottom-0 grid w-full gap-3 text-white opacity-0 p-7 bg-primary-800 group-hover:opacity-80">
                <p className="uppercase">{content.property}</p>
                <p>{content.address}</p>
              </div>
            </figure>
          );
        })}
      </section>
      <PortfolioModal
        modalContent={modalContent}
        setModalContent={setModalContent}
      />
    </article>
  );
}

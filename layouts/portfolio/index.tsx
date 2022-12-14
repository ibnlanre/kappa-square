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

export type ModalContent = {
  open: boolean;
  content?: Content;
};

const PORTFOLIO: Array<Content> = [
  {
    property: "3A IKOYA RESIDENCE",
    address: "40A, Raymond Njoku street, Ikoyi, Lagos.",
    images: [IkoyiOne, IkoyiTwo, IkoyiThree],
  },
];

const initialValue = {
  open: false,
  content: null
}

export function Portfolio() {
  const [modalContent, setModalContent] = useState<ModalContent>(initialValue);
  const closeModal = () => setModalContent(initialValue);

  return (
    <article
      style={{
        backgroundImage: `url(${Hexagons.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="grid content-start w-full gap-10 px-0 clump:sm:pl-[clamp(1rem,4vw,8rem)] py-36 clump:py-[clamp(5rem,5vw,9rem)] sm:pl-32 sm:pr-44 clump:sm:pr-[clamp(.5rem,15vw,11rem)] lg:pl-32"
    >
      <h2 className="px-4 text-3xl font-semibold uppercase">Portfolio</h2>
      <section
        style={{
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(310px, 100%), 1fr))",
        }}
        className="grid gap-5 px-0"
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
                src={content?.images?.at(0)}
                blurDataURL={content?.images?.at(0).blurDataURL}
                placeholder="blur"
                alt="about us"
              />
              <div className="absolute bottom-0 grid w-full gap-3 text-white sm:opacity-0 p-7 bg-primary-800 group-hover:opacity-80">
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
        closeModal={closeModal}
      />
    </article>
  );
}

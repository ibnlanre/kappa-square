import { useEffect, useRef } from "react";

import Image from "next/image";
import anime from "animejs";

import IkoyaOne from "./assets/ikoya-1.jpg";
import IkoyaTwo from "./assets/ikoya-2.jpg";
import IkoyaThree from "./assets/ikoya-3.jpg";
import IkoyaFour from "./assets/ikoya-4.jpg";

const SLIDES = [
  {
    image: IkoyaOne,
    alt: "Poolhaus von Wintergarten-Schmidinger aus Gramastetten",
  },
  {
    image: IkoyaTwo,
    alt: "white concrete building",
  },
  {
    image: IkoyaThree,
    alt: "beige couch and armchair",
  },
  {
    image: IkoyaFour,
    alt: "round clear glass-top table",
  },
];

export function SlideShow() {
  const slides = useRef<HTMLImageElement>(null);

  useEffect(() => {
    anime({
      targets: slides.current,
      keyframes: [{ opacity: 0, duration: 2000 }],
      easing: "easeInOutQuad",
      direction: "alternate",
      autoplay: true,
      loop: true,
    });
  }, []);

  return (
    <>
      {Object.values(SLIDES).map(({ image, alt }, idx) => {
        return (
          <Image
            key={idx}
            blurDataURL={image.blurDataURL}
            ref={slides}
            className="object-cover"
            src={image.src}
            // height={image.height}
            // width={image.width}
            alt={alt}
            fill
          />
        );
      })}
    </>
  );
}

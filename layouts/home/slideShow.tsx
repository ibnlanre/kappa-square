import { motion } from "framer-motion";

import Image from "next/image";

import IkoyaOne from "./assets/ikoya-1.jpg";
import IkoyaTwo from "./assets/ikoya-2.jpg";
import IkoyaThree from "./assets/ikoya-3.jpg";

const SLIDES = [
  {
    image: IkoyaOne,
    alt: "ikoya-one",
  },
  {
    image: IkoyaTwo,
    alt: "ikoya-two",
  },
  {
    image: IkoyaThree,
    alt: "ikoya-three",
  },
];

export function SlideShow() {
  return (
    <>
      {Object.values(SLIDES).map(({ image, alt }, idx) => {
        return (
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
              type: "tween",
              delay: idx * 2,
              times: [0, 0.5, 1],
              repeatDelay: 3,
              repeat: Infinity,
              duration: 3,
              repeatType: "loop",
            }}
            className="absolute w-full h-full"
          >
            <Image
              blurDataURL={image.blurDataURL}
              className="object-cover"
              src={image.src}
              alt={alt}
              fill
            />
          </motion.div>
        );
      })}
    </>
  );
}

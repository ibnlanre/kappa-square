import { Divider } from "@mantine/core";
import { motion } from "framer-motion";
import { forwardRef, MutableRefObject } from "react";

import { SLIDES } from "./slides";
import { Ikoya } from "./ikoya";

import Image from "next/image";

export function _Landing(props, ref: MutableRefObject<HTMLElement>) {
  return (
    <figure ref={ref} className="relative grid w-full h-full overflow-hidden">
      {Object.values(SLIDES).map(({ image, alt }, idx) => (
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
            repeatDelay: SLIDES.length,
            duration: SLIDES.length,
            repeatType: "loop",
            repeat: Infinity,
          }}
          className="absolute w-full h-full"
        >
          <Image
            placeholder="blur"
            blurDataURL={image.blurDataURL}
            className="object-cover"
            src={image.src}
            alt={alt}
            fill
          />
        </motion.div>
      ))}
      <div
        className="relative w-full h-full bg-black bg-opacity-50"
        style={{
          mixBlendMode: "hue",
        }}
      />
      <section className="absolute grid gap-5 px-10 text-center text-white max-w-max place-self-center">
        <div className="grid gap-3 justify-items-center">
          <header className="flex gap-4">
            <h2 className="flex px-3 py-2 text-5xl clump:text-[clamp(2.25rem,5vw,3rem)] font-bold place-items-center bg-kappa-primary-dark">
              3A
            </h2>
            <Ikoya className="text-6xl clump:text-[clamp(8rem,15vw,10rem)]" />
          </header>
          <Divider size="sm" className="justify-self-stretch" color="white" />
          <h3 className="text-4xl clump:text-[clamp(1.65rem,5vw,2.25rem)]">
            The Residences
          </h3>
        </div>
        <p className="text-lg italic">
          Exclusive 5-bedroom terrace units in the heart of old Ikoyi
        </p>
      </section>
    </figure>
  );
}

export const Landing = forwardRef(_Landing);

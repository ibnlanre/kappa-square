import { ExportSquare } from "iconsax-react";
import { motion } from "framer-motion";

import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";

import { SLIDES } from "./slides";

export default function Home() {
  return (
    <div className="relative grid flex-1 h-screen">
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
            priority
            placeholder="blur"
            blurDataURL={image.blurDataURL}
            className="object-cover"
            src={image.src}
            alt={alt}
            fill
          />
        </motion.div>
      ))}

      <section className="bg-[#272727]/[.9] text-white grid gap-6 py-5 pl-3 pr-10 absolute bottom-28 sm:left-5 max-w-[18rem]">
        <h3 className="text-xl font-semibold">
          We have served various capacities in the real estate value chain
        </h3>
        <Link href="/portfolio">
          <button className="flex items-center gap-2">
            <p className="text-left underline">View Portfolio</p>
            <ExportSquare size={12} className="text-white" />
          </button>
        </Link>
      </section>

      <figure className="bg-white/[.9] text-white grid gap-6 p-5 relative top-28 mx-auto h-max w-36 sm:hidden">
        <Image
          src={logo}
          className="object-contain"
          width={logo.width}
          height={logo.height}
          alt="logo"
        />
      </figure>
    </div>
  );
}

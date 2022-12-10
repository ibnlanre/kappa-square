import { useEffect, useRef } from "react";

import Image from "next/image";
import anime from "animejs";

const SLIDES = [
  {
    link: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf",
    alt: "Poolhaus von Wintergarten-Schmidinger aus Gramastetten",
  },
  {
    link: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    alt: "white concrete building",
  },
  {
    link: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    alt: "beige couch and armchair",
  },
  {
    link: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff",
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
    <div className="relative grid flex-1 h-screen">
      {Object.values(SLIDES).map(({ link, alt }, idx) => {
        return (
          <Image
            key={idx}
            ref={slides}
            className="object-cover"
            alt={alt}
            src={link}
            fill
          />
        );
      })}
    </div>
  );
}

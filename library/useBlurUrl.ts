"use client";

type ImageType = "jpeg" | "png" | "webp";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

interface UseBlurURL {
  type?: `image/${ImageType}`;
  quality?: number;
}

export function useBlurURL({
  type = "image/webp",
  quality = 0.4,
}: UseBlurURL = {}) {
  const image = useRef<HTMLImageElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  const transparentPlaceholder = `data:${type};base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`;
  const [url, setUrl] = useState<string>(transparentPlaceholder);

  if (typeof window !== "undefined") {
    useLayoutEffect(() => {
      image.current = document.createElement("img");
      canvas.current = document.createElement("canvas");

      image.current.crossOrigin = "Anonymous";
      image.current.onload = function () {
        canvas.current.height = image.current.naturalHeight;
        canvas.current.width = image.current.naturalWidth;

        const context = canvas.current.getContext("2d");
        context.drawImage(image.current, 0, 0);
      };
    }, []);
  }

  useEffect(() => {
    setUrl(canvas?.current?.toDataURL(type, quality));
  }, [image.current?.src]);

  return function getBlurURL(src: string) {
    if (image.current) image.current.src = src;
    return url;
  };
}

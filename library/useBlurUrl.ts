"use client";

type ImageType = "jpeg" | "png" | "webp";

type NumericRange<
  start extends number,
  end extends number,
  range extends number = end,
  arr extends number[] = []
> = arr["length"] extends end
  ? range
  : NumericRange<start, end, range | arr["length"], [...arr, arr["length"]]>;

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Multiply } from "ts-arithmetic";

interface UseBlurURL {
  type?: `image/${ImageType}`;
  quality?: Multiply<NumericRange<0, 9>, 0.1> | 1;
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
    console.log(image.current);
    setUrl(canvas?.current?.toDataURL(type, quality));
  }, [image.current?.src]);

  return function getBlurURL(src: string) {
    if (image.current) image.current.src = src;
    return url;
  };
}

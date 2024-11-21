declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  > & { title?: string }>;
}

declare module "colorthief" {
  export default class ColorThief {
    getColor(img: HTMLImageElement | null): [number, number, number];
    getPalette(
      img: HTMLImageElement | null,
      colorCount?: number
    ): [number, number, number][];
  }
}

import { RefObject, useEffect, useState } from "react";

export interface IClientWidthHeight {
  canvasWidth: number;
  canvasHeight: number;
}

export const useClientWidthHeight = (ref: RefObject<HTMLElement>) => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const setClientWidthHeight = () => {
      if (ref.current) {
        console.log("canvasWidth", ref.current.clientWidth);
        console.log("canvasHeight", ref.current.clientHeight);
        setWidth(ref.current.clientWidth);
        setHeight(ref.current.clientHeight);
      }
    };

    setClientWidthHeight();
    window.addEventListener("resize", setClientWidthHeight);

    return () => window.removeEventListener("resize", setClientWidthHeight);
  }, [ref]);
  const clientWidthHeight = { width, height };

  return clientWidthHeight;
};

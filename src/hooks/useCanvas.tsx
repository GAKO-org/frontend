import { RefObject, useEffect, useRef } from "react";

interface ICanvas {
  canvasWidth: number;
  canvasHeight: number;
  isAnimation?: (ctx: CanvasRenderingContext2D) => void;
  init?: (ctx: CanvasRenderingContext2D) => void;
}

const useCanvas = ({ canvasWidth, canvasHeight, isAnimation, init }: ICanvas) =>
  // onKeyHandler?: (e: KeyboardEvent) => void
  {
    // readonly ref 이지만 객체 속성은 수정 가능
    //   null로 초기화 한 이유 => 아직 canvas 요소가 생성되지 않았기 때문
    //   나중에 RefObject 공부
    const canvasRef: RefObject<HTMLCanvasElement> =
      useRef<HTMLCanvasElement>(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");

      const setCanvas = () => {
        const devicePixelRatio = window.devicePixelRatio ?? 1;
        if (canvas && ctx) {
          // css 픽셀
          canvas.style.width = canvasWidth + "px";
          canvas.style.height = canvasHeight + "px";

          // canvas가 사용할 실제 픽셀 개수
          // dpr이 2이니까 더 많은 픽셀을 배당
          canvas.width = canvasWidth * devicePixelRatio;
          canvas.height = canvasHeight * devicePixelRatio;

          ctx.scale(devicePixelRatio, devicePixelRatio);
        }
      };
      setCanvas();
      if (ctx && init) {
        init(ctx);
      }
      if (ctx && isAnimation) {
        isAnimation(ctx);
      }

      // const handleMouseDown = (event) => {
      //   console.log("mousedown");
      //   mousedown = true;
      // };

      // const handleMouseUp = (event) => {
      //   mousedown = false;
      // };
    }, [canvasWidth, canvasHeight]);

    return canvasRef;
  };

export default useCanvas;

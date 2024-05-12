import useCanvas from "@/hooks/useCanvas";
import { IClientWidthHeight } from "@/hooks/useClientWidthHeight";
import { Particle } from "@/utils/particle";
import { RefObject, useState } from "react";

const RotateSky: React.FC<IClientWidthHeight> = ({
  canvasWidth,
  canvasHeight,
}) => {
  const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];
  const [mouseDown, setMouseDown] = useState<boolean>(false);
  let particles: any = [];
  let radians = 0;
  let alpha = 1;
  let mousedown = false;

  // const eventListener = (e : MouseEvent) => {

  // }

  const init = (ctx: CanvasRenderingContext2D) => {
    particles = [];
    for (let i = 0; i < 400; i++) {
      console.log("ctx.canvas.width", ctx.canvas.width);
      console.log("ctx.canvas.height", ctx.canvas.height);
      console.log("canvasWidth", canvasWidth);
      console.log("canvasHeight", canvasHeight);

      const canvas_width = ctx.canvas.width;
      const canvas_height = ctx.canvas.height;

      // css canvas픽셀 -> dpr이 1이면 상관없지만 1보다 커지면 canvas는 작아짐
      // const canvas_width = canvasWidth;
      // const canvas_height = canvasHeight;

      const x = Math.random() * canvas_width - canvas_width / 2;
      const y = Math.random() * canvas_height - canvas_height / 2;
      const radius = Math.random() * 2;
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push(new Particle(x, y, radius, color));
    }
  };

  const isAnimation = (ctx: CanvasRenderingContext2D) => {
    requestAnimationFrame(() => isAnimation(ctx));

    ctx.fillStyle = `rgba(10, 10, 10, ${alpha})`;
    // ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    ctx.save();
    // ctx.canvas.width는 dpr을 곱한 값
    // ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
    ctx.translate(canvasWidth / 2, canvasHeight / 2);
    ctx.rotate(radians);

    particles.forEach((particle: any) => {
      particle.update(ctx);
    });

    ctx.restore();
    radians += 0.001;

    if (mousedown && alpha >= 0.01) {
      alpha -= 0.01;
    } else if (!mousedown && alpha < 1) {
      alpha += 0.005;
    }
  };

  const canvasRef: RefObject<HTMLCanvasElement> = useCanvas({
    canvasWidth,
    canvasHeight,
    isAnimation,
    init,
  });

  return <canvas ref={canvasRef} />;
};

export default RotateSky;

import RotateSky from "@/components/RotateSky";
import { useClientWidthHeight } from "@/hooks/useClientWidthHeight";
import styled from "styled-components";
import { RefObject, useRef } from "react";

const Home = () => {
  const mainRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const { width: canvasWidth, height: canvasHeight } =
    useClientWidthHeight(mainRef);
  // console.log("canvasWidth", canvasWidth);
  // console.log("canvasHeight", canvasHeight);
  return (
    <Wrapper ref={mainRef}>
      {/* <div>asdfawrgasfbaerbbetse</div> */}
      <RotateSky canvasWidth={canvasWidth} canvasHeight={canvasHeight} />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  // width: 500px;
  // height: 500px;
  width: 100%;
  height: 100%;
`;

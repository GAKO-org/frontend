import styled from "styled-components";
import { flashGames } from "@/constants/flashGame";
import ColorThief from "colorthief";
import { useEffect, useRef, useState } from "react";
import { ReactComponent as TagIcon } from "@/assets/icons/tag-icon.svg";
import GameBoard from "@/components/games/GameBoard";

const GameBoardPage = () => {
  const [bgColor, setBgColor] = useState<string>("rgba(0, 0, 0, 0.7)");
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const imgElement = imgRef.current;

    if (imgElement) {
      const colorThief = new ColorThief();

      // 이미지 로드 확인
      if (imgElement.complete) {
        extractColor(colorThief, imgElement);
      } else {
        imgElement.onload = () => extractColor(colorThief, imgElement);
      }
    }
  }, []);

  const extractColor = (
    colorThief: ColorThief,
    imgElement: HTMLImageElement
  ) => {
    try {
      const rgb: number[] = colorThief.getColor(imgElement); // [R, G, B]
      setBgColor(`rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.7)`);
    } catch (error) {
      console.error("Error extracting color:", error);
    }
  };

  return (
    <GameBoardPageLayout>
      <GameInfoSection>
        <GameInfoRow>
          <GameInfoBox>
            <GameTitleP>{flashGames[0].gameName}</GameTitleP>
            <GameDescriptionP>
              Game DEsasdjfhakjsdfhajdsfh askdfhkjaw ajwekfhjka awekjf akwa
              wejkfawefakjwe asdfjk awer qawerfawef akhfdksja awef awefawef
              aewfa awefa awef wergsergjk sergoh akwfjkaskjfhkjas
              aowehoawhoifaisfdh
            </GameDescriptionP>
            <GameMakerP>Maker : {flashGames[0].gameMaker}</GameMakerP>
            <GameRankBox>ranks, likes</GameRankBox>
            <GameTagsBox>
              {flashGames[0].hashtags.map((tag, idx) => (
                <GameTagBox key={idx}>
                  <TagIcon />
                  {tag}
                </GameTagBox>
              ))}
            </GameTagsBox>
          </GameInfoBox>
          <GameImageBox $bgColor={bgColor}>
            <GameImage src={flashGames[0].gameImages} ref={imgRef} />
          </GameImageBox>
        </GameInfoRow>
      </GameInfoSection>

      <GamePlayRow>
        <GamePlayBox>게임 플레이 박스</GamePlayBox>
      </GamePlayRow>

      <GameBoard />
    </GameBoardPageLayout>
  );
};

// maker
// ranks, likes
// tags

export default GameBoardPage;
// 960 540

const GamePlayRow = styled.div``;

const GamePlayBox = styled.div``;

const GameTagBox = styled.div`
  padding: 4px 12px;

  background-color: rgba(255, 206, 221, 0.1);
  border-radius: 15px;

  display: flex;
  align-items: center;

  gap: 6px;

  color: rgb(255, 206, 221);
  font-size: 0.8rem;
`;

const GameTagsBox = styled.div`
  display: flex;
  gap: 15px;

  & > span {
  }
`;

const GameRankBox = styled.div``;

const GameTitleP = styled.p`
  font-size: 2rem;
  line-height: 1.3;
`;

const GameDescriptionP = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  max-width: 41rem;
  line-height: 1.5;
`;

const GameMakerP = styled.p``;

const GameInfoSection = styled.section`
  background-color: #101113;
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 100px;

  padding: 48px 32px;
`;

const GameInfoRow = styled.div`
  /* background-color: s#101113; */
  max-width: 1024px;
  width: 1024px;
  justify-content: space-between;
  display: flex;
`;

const GameInfoBox = styled.div`
  color: white;
`;

const GameImageBox = styled.div<{ $bgColor: string }>`
  width: 300px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  position: relative;

  /* 블러 효과 */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.$bgColor};
    /* filter: blur(15px); 블러 처리 */
    filter: blur(33px);
    opacity: 0.8;
    z-index: 1; /* 블러를 이미지 뒤로 */

    /* top: 50%;
    right: 0;
    -webkit-transform: translate3d(0, -50%, 0);
    -moz-transform: translate3d(0, -50%, 0);
    -ms-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0);
    width: 120% !important;
    -webkit-filter: blur(120px);
    filter: blur(120px);
    opacity: 0.8; */
  }

  /* 이미지가 블러 위에 오도록 설정 */
  /* img {
    position: relative;
    z-index: 2;
    border-radius: 10px;
    width: 268px;
    height: 140px;
  } */
`;

const GameBoardPageLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GameImage = styled.img`
  width: 268px;
  height: 140px;
  position: relative;
  z-index: 2;
`;

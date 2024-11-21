import FlashGameCard from "@/components/games/FlashGameCard";
import { flashGames } from "@/constants/flashGame";
import bannerGif from "@/assets/gifs/bg-2.gif"; // GIF 파일 경로
import styled from "styled-components";

const MainPage = () => {
  const limitedFlashGames = flashGames.slice(0, 5);

  return (
    <MainPageLatout>
      <GiftBox></GiftBox>
      <MainCardRowBox>
        <p>이번달 신규 게임</p>
        <CardRowBox>
          {limitedFlashGames.map((game, idx) => (
            <FlashGameCard key={idx} {...game} />
          ))}
        </CardRowBox>
      </MainCardRowBox>

      <MainCardRowBox>
        <p>월간 인기 게임</p>
        <CardRowBox>
          {limitedFlashGames.map((game, idx) => (
            <FlashGameCard key={idx} {...game} />
          ))}
        </CardRowBox>
      </MainCardRowBox>
    </MainPageLatout>
  );
};

const GiftBox = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  background-image: url(${bannerGif});
  background-size: cover;
  background-position: center;
`;

const MainPageLatout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding: 20px 0;
`;

const MainCardRowBox = styled.div`
  & > p {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

const CardRowBox = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 15px;

  overflow-x: scroll;
  max-width: calc(250px * 5 + 25px * 4);
  scroll-behavior: smooth; /* 부드러운 스크롤 */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default MainPage;

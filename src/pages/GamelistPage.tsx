import styled from "styled-components";
import FlashGameCard from "@/components/games/FlashGameCard";
import { flashGames } from "@/constants/flashGame";
import Toggles from "@/components/toggles/Toggles";

const GamelistPage = () => {
  return (
    <GamelistPageLayout>
      <GamelistFilterRow>
        <TagsSelectBox>
          <p>태그 선택</p>
        </TagsSelectBox>
        <Toggles />
      </GamelistFilterRow>
      <CardGridBox>
        {flashGames.map((game, idx) => (
          <FlashGameCard key={idx} {...game} />
        ))}
      </CardGridBox>
    </GamelistPageLayout>
  );
};

export default GamelistPage;

const GamelistPageLayout = styled.div`
  @media (min-width: 769px) {
    padding: 0px 32px 32px;
  }

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;

  margin-top: 20px;
`;

const GamelistFilterRow = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  width: 100%;
  /* margin-top: 20px; */
  gap: 5px;
`;

const TagsSelectBox = styled.div`
  padding: 8px 14px;
  border-radius: 10px;
  border: 1px solid var(--ref-gray-400);
`;

const CardGridBox = styled.div`
  display: grid;
  gap: 25px;
  margin-top: 15px;

  /* 미디어쿼리는 마지막부터 우선순위 적용! -> 순서 바뀌면 안됨 */
  @media (min-width: 577px) {
    grid-template-columns: repeat(3, minmax(0px, 1fr));
  }

  @media (min-width: 769px) {
    gap: 24px;
    grid-template-columns: repeat(4, minmax(0px, 1fr));
  }

  @media (min-width: 1201px) {
    grid-template-columns: repeat(5, minmax(0px, 1fr));
  }
`;

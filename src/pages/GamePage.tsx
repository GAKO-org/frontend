import { flashGameView } from "@/constants/flashGame";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

// export const routeGameView = (game: string) => {
//   const navigate = useNavigate();
//   navigate(`/game?gameName=${encodeURIComponent(game)}`);
// };f

const GamePage = () => {
  // BE에서 URL을 주면 해당 URL로 이동하는 방식으로 게임을 불러올 수 있음
  const [searchParams] = useSearchParams();
  const gameName = searchParams.get("name");

  const getGameUrlByName = (gameName: string): string | undefined => {
    const game = flashGameView.find((game) => game.gameName === gameName);
    return game?.gameUrl;
  };

  const gameUrl = gameName ? getGameUrlByName(gameName) : undefined;
  return (
    <Wrapper>
      <iframe
        allowfullscreen="allowfullscreen"
        frameborder="0"
        mozallowfullscreen="true"
        scrolling="no"
        src={gameUrl}
        max-height=" 1000px !important"
        width=" 100%"
        height="775px"
        webkitallowfullscreen="true"
        data-ruffle-polyfilled=""
      ></iframe>
    </Wrapper>
  );
};

export default GamePage;

const Wrapper = styled.div``;

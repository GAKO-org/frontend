import { GameCardProps } from "@/types/game.dto";
import { ReactComponent as HeartIcon } from "@/assets/icons/heart-icon.svg";
import styled from "styled-components";
import Tags from "../tags/Tags";
import { HashtagsEnum } from "@/types/hashtags.enum";
import useRouter from "@/hooks/useRouter";

const FlashGameCard = (game: GameCardProps) => {
  const { routeGameView } = useRouter();

  const onClickGameView = () => {
    routeGameView(game.gameName);
  };

  return (
    <FlashGameCardLayout onClick={onClickGameView}>
      <ImageBox src={game.gameImages}></ImageBox>
      <InfoBox>
        <TitleBox>
          <span>{game.gameName}</span>
          <HeartIconBox>
            <HeartIcon />
            {game.gameLikes}
          </HeartIconBox>
        </TitleBox>

        <SubTitleInfoRow>{game.gameMaker}</SubTitleInfoRow>
        <HashTagsBox>
          {Object.values(HashtagsEnum).map((tag, idx) => (
            <Tags name={tag} key={idx} />
          ))}
        </HashTagsBox>
      </InfoBox>
    </FlashGameCardLayout>
  );
};

export default FlashGameCard;

const FlashGameCardLayout = styled.div`
  /* min-width: 250px; */
  width: 100%;
`;

const InfoBox = styled.div`
  padding: 0 2px;
`;

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  letter-spacing: -0.025em;
  font-weight: 500;
  margin-bottom: 2px;
`;

const HashTagsBox = styled.div`
  margin-top: 4px;
  display: flex;
  gap: 8px;

  flex-wrap: wrap;
  overflow: hidden;
  max-height: 20px;
`;

const SubTitleInfoRow = styled.div`
  font-size: 0.9rem;
  color: var(--ref-gray-500);
  font-weight: 400;
`;

const HeartIconBox = styled.div`
  font-size: 0.9rem;
  /* 색상 변경하기 */
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ref-gray-500);
`;

const MakerInfoBox = styled.div``;

const ImageBox = styled.img`
  width: 100%;
  height: 160px;
  border-radius: 1px;
`;

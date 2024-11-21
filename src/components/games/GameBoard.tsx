import { CommentList } from "@/constants/flashGame";
import styled from "styled-components";
import Toggles from "../toggles/Toggles";

const GameBoard = () => {
  const gameComments = CommentList;

  return (
    <GameBoardLayout>
      <Toggles />

      <GameCommentSection>
        {gameComments.map((comment, idx) => (
          <GameCommentRow key={idx}>
            <CommentUserInfoRow>
              <CommentUserInfoCol>
                <CommentProfileImage
                  src={comment.profileImage}
                  alt="profileImage"
                />
                <div>
                  <span>{comment.nickname}</span>
                  <span>{comment.createAt}</span>
                </div>
              </CommentUserInfoCol>
            </CommentUserInfoRow>
            {/* <div>
              <span>좋아요 {comment.likes}</span>
            </div> */}

            <CommentUserInfoRow>
              <CommentBox>{comment.comment}</CommentBox>
            </CommentUserInfoRow>
          </GameCommentRow>
        ))}
      </GameCommentSection>
    </GameBoardLayout>
  );
};

export default GameBoard;

const GameBoardLayout = styled.div`
  width: 100%;
  max-width: 1024px;
`;

const ToggleRow = styled.div`
  display: flex;
  gap: 10px;
`;

const ToggleBox = styled.div<{ $isActive: boolean }>`
  padding: 8px 14px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.$isActive ? "var(--main-color)" : "white"};
  color: ${(props) => (props.$isActive ? "#fff" : "#000")};
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 6px;

  line-height: 1.25;
  font-size: 1rem;
`;

const GameCommentSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

const GameCommentRow = styled.div`
  /* border: 1px solid #000; */
  padding: 10px;
  border-bottom: 1px solid #6b8e83;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CommentProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

const CommentUserInfoRow = styled.div`
  width: 100%;
`;

const CommentUserInfoCol = styled.div`
  display: flex;
  align-items: center;
  color: rgba(34, 34, 34, 0.5);
`;

const CommentBox = styled.div`
  font-size: 1.125rem;
`;

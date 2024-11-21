import { HashtagsEnum } from "@/types/hashtags.enum";
import styled from "styled-components";

interface TagsProps {
  name: HashtagsEnum;
}

const Tags = ({ name }: TagsProps) => {
  return (
    <Wrapper>
      <TitleBox>{name}</TitleBox>
    </Wrapper>
  );
};

export default Tags;

const Wrapper = styled.div`
  display: inline-flex;
  padding: 4px 7px;
  border-radius: 8px;
  border: 1px solid var(--main-color);
`;

const TitleBox = styled.div`
  letter-spacing: -0.025em;
  font-size: 0.6rem;
  width: 100%;
`;

import styled from "styled-components";

const RankPage = () => {
  return <RankPageLayout></RankPageLayout>;
};
export default RankPage;

const RankPageLayout = styled.div`
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

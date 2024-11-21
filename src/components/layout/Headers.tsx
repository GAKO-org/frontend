import styled from "styled-components";
import { ReactComponent as Logo } from "@/assets/icons/game1.svg";
import SearchBar from "../SearchBar";
import useRouter from "@/hooks/useRouter";

const Headers = () => {
  const {
    routeMain,
    routeGamelistPage,
    routeProfilePage,
    routeRankPage,
  } = useRouter();

  return (
    <HeaderLayout>
      <HeaderInfoBox>
        <Logo />
        <LogoStyled onClick={() => routeMain()}>GAKO</LogoStyled>

        <GnbListRow>
          <GnbListBox onClick={() => routeGamelistPage()}>Games</GnbListBox>
          <GnbListBox>Upload</GnbListBox>
          <GnbListBox onClick={() => routeProfilePage()}>Profile</GnbListBox>
          <GnbListBox onClick={() => routeRankPage()}>Ranks</GnbListBox>
        </GnbListRow>
      </HeaderInfoBox>

      <SearchBar />
    </HeaderLayout>
  );
};

export default Headers;

const GnbListRow = styled.div`
  display: flex;
  gap: 8px;
  height: auto;
  /* align-items: start; */
  align-items: flex-start;
  /* margin-top: auto; 요소를 아래쪽으로 밀어내림 */

  & > div:hover {
    /* color: red; */
    color: var(--main-color);
  }
`;

const HeaderLayout = styled.div`
  display: flex;
  padding: 0px 32px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  width: 100%;
  align-items: center;
  min-height: 50px;

  justify-content: space-between;
`;

const GnbListBox = styled.div``;

const HeaderInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LogoStyled = styled.div`
  /* color: var(--ref-white); */
  /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); */
  font-weight: 600;
  font-size: 1.4rem;
`;

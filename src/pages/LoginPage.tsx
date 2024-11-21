import styled from "styled-components";
import backgroundImage from "../assets/images/background-2.png";
import useRouter from "@/hooks/useRouter";

const LoginPage = () => {
  const { routeMain } = useRouter();

  return (
    <Wrapper bgImage={backgroundImage}>
      <TitleBox>GAKO</TitleBox>
      <SubTitleBox>Gaming Korea</SubTitleBox>
      <OauthButton onClick={routeMain}>42 계정으로 로그인</OauthButton>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ bgImage: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  align-items: center;

  gap: 60px;
`;

const TitleBox = styled.div`
  color: var(--ref-white);
  font-size: 4rem;
  font-weight: 700;
`;

const SubTitleBox = styled.div`
  color: var(--ref-white);
  font-size: 2.5rem;
  font-weight: 600;
`;

const OauthButton = styled.button`
  color: var(--ref-black);
  background-color: var(--ref-white);
  padding: 10px 60px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
`;

export default LoginPage;

import Footer from "@/components/layout/Footer";
import Headers from "@/components/layout/Headers";
import useRouter from "@/hooks/useRouter";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  const url = useLocation();
  const { routeMain } = useRouter();

  useEffect(() => {
    if (url.pathname === "/") {
      routeMain();
    }
  }, []);

  const IsLogin = url.pathname === "/login";

  return IsLogin ? (
    <Outlet />
  ) : (
    <Wrapper>
      <Headers />
      <MainBox>
        <Outlet />
      </MainBox>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: 20px; */
  /* 나중에 빼기 -> 내부 요소가 100vh보다 커질떄 */
  min-height: calc(100dvh - 100px);
  height: auto;
  /* padding-bottom: 100px; */
`;

export default Layout;

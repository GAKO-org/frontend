import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const isLoginPage: boolean = location.pathname === "/login";

  return (
    <Wrapper>
      {/* <div>42 flip market</div> */}
      {isLoginPage && <div>42 flip market</div>}
      <LayoutPlanetContainer>
        <LayoutTitle>Flip Market</LayoutTitle>
        <LayoutPlanet></LayoutPlanet>
      </LayoutPlanetContainer>
      <Outlet />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  // background: rgb(2, 0, 36);
  background: linear-gradient(180deg, #000000 0%, #393939 50%, #000000 100%);
`;

const LayoutPlanetContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const LayoutPlanet = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 100px;
  border: 1px solid #be8259;
  background-color: #231d1d;

  // position: absolute;
  box-shadow: 0px 4px 139px rgba(207, 158, 125, 0.25);
  filter: blur(2px);
`;

const LayoutTitle = styled.div`
  position: absolute;
  z-index: 1;
  color: #b54545;
  font-size: 4rem;
  font-weight: 600;
`;

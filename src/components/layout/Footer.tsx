import styled from "styled-components";

const Footer = () => {
  return (
    <FooterLayout>
      <FooterInfoBox>
        <CopyRightBox>Copyright @ www.gako.com</CopyRightBox>
        <ContactBox>
          <p>게임 개발 문의 : www.test1.gamil</p>
          <p>FE/UX/UI 문의 : www.test2.gamil</p>
          <p>서버 문의 : www.test2.gamil</p>
        </ContactBox>
      </FooterInfoBox>
    </FooterLayout>
  );
};

export default Footer;

const FooterLayout = styled.footer`
  width: 100%;
  /* transform: translateY(-100%); */
  min-height: 100px;

  position: relative;
  background-color: #313b40;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* 왼쪽 정렬로 변경 */
`;

const CopyRightBox = styled.div`
  color: var(--ref-white);
`;

const ContactBox = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 5px;
  color: var(--ref-white);
`;

// 게임 개발 문의 :  www.test1.gamil
// FE/UX/UI 문의 :  www.test2.gamil
// 서버 문의 :  www.test2.gamil

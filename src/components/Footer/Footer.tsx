import styled from "styled-components";
import useHandleToRoute from "../../hooks/handelToRoute";

function Footer() {
  const handleToRoute = useHandleToRoute();
  return (
    <FooterStyle>
      <FooterInnerContainer>
        <FooterInnerContent>
          <img src="images/logos/logo_footer_gray.png" alt="푸터로고" onClick={() => handleToRoute("/")} />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi nulla odit consectetur.</p>
        </FooterInnerContent>
        <FooterInnerContent>
          <h6>Links</h6>
          <ul>
            <li onClick={() => handleToRoute("/around")}>샵 구경하기</li>
            <li onClick={() => handleToRoute("/gallery")}>갤러리</li>
            <li>반려동물 등록</li>
            <li>예약 확인하기</li>
          </ul>
        </FooterInnerContent>
        <FooterInnerContent>
          <h6>Links</h6>
          <div>개인정보 보호정책</div>
        </FooterInnerContent>
      </FooterInnerContainer>
    </FooterStyle>
  );
}

const FooterStyle = styled.footer`
  width: 100%;
  background-color: #333333;
  margin-top: auto;
`;

const FooterInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  font-size: 0.8rem;

  @media only screen and (min-width: 768px) {
    width: 30%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  }

  padding: 32px;
  color: #bbbbbb;
`;

const FooterInnerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  img {
    cursor: pointer;
    width: 50px;
  }
  h6 {
    color: #808080;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    li {
      cursor: pointer;
    }
  }
  p {
    font-size: 0.8rem;
  }
`;

export default Footer;

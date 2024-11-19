import styled, { keyframes } from "styled-components";

function MainBg() {
  return (
    <MainSection>
      <div>
        <h1>안녕하세요 댕냥꽁냥 입니다</h1>
        <p>보호자와 미용사가 댕냥이가 모두 행복한 곳!</p>
      </div>
    </MainSection>
  );
}

const bgAnime = keyframes`   
  0%{
    background-position-y: 65%;
  }
  50%{
    background-position: 0;
  }
  100%{
    background-position-y: 65%;
}`;

const MainSection = styled.section`
  width: 100%;
  height: 50vh;
  background-image: url("/images/background/main_bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  animation: ${bgAnime} 10s infinite;
  position: relative;
  div {
    position: absolute;
    top: 2rem;
    left: 2rem;

    display: flex;
    flex-direction: column;
    gap: 16px;

    font-weight: 600;

    text-shadow: var(--text-shadow-white);
  }
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export default MainBg;

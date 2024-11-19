import styled from "styled-components";
import MainBg from "./MainBg";
import MainButton from "./MainButton";
import MainBanners from "./MainBanners";
import { useState } from "react";

function Main() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isButtonName, setButtonName] = useState<string>("");

  return (
    <>
      <MainBg />
      <MainContainer>
        <MainButton setIsHovered={setIsHovered} setButtonName={setButtonName} />
        <MainBanners isHovered={isHovered} isButtonName={isButtonName} />
      </MainContainer>
    </>
  );
}

const MainContainer = styled.section`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default Main;

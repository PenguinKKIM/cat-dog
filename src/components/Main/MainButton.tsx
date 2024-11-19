import styled from "styled-components";
import useHandleToRoute from "../../hooks/handelToRoute";

interface MainButtonProps {
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
  setButtonName: React.Dispatch<React.SetStateAction<string>>;
}

function MainButton({ setIsHovered, setButtonName }: MainButtonProps) {
  const handleToRoute = useHandleToRoute();

  return (
    <MainBtnSection>
      <MainBtn
        type="button"
        onClick={() => handleToRoute("/around")}
        onMouseEnter={() => {
          setIsHovered(true);
          setButtonName("nearShop");
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          <h2>근처 샵 찾아보기</h2>
          <p>근처 샵을 찾아보세요</p>
        </div>
        <img src="/images/logos/map-solid.svg" />
      </MainBtn>
      <MainBtn
        type="button"
        onMouseEnter={() => {
          setIsHovered(true);
          setButtonName("gallery");
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          <h2>갤러리 구경하기</h2>
          <p>근처 샵을 찾아보세요</p>
        </div>
        <img src="/images/logos/images-solid.svg" />
      </MainBtn>
      <MainBtn
        type="button"
        onMouseEnter={() => {
          setIsHovered(true);
          setButtonName("petReg");
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          <h2>동물 등록하기</h2>
          <p>근처 샵을 찾아보세요</p>
        </div>
        <img src="/images/logos/paw-solid.svg" />
      </MainBtn>
      <MainBtn
        type="button"
        onMouseEnter={() => {
          setIsHovered(true);
          setButtonName("reserve");
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          <h2>예약 확인하기</h2>
          <p>근처 샵을 찾아보세요</p>
        </div>
        <img src="/images/logos/clipboard-list-solid.svg" />
      </MainBtn>
      <MainBtn
        type="button"
        onMouseEnter={() => {
          setIsHovered(true);
          setButtonName("myPage");
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          <h2>마이페이지</h2>
          <p>근처 샵을 찾아보세요</p>
        </div>
        <img src="/images/logos/user-solid.svg" />
      </MainBtn>
    </MainBtnSection>
  );
}

const MainBtnSection = styled.section`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  @media (min-width: 1024px) {
    width: 80%;
    flex-direction: row;
  }
`;

const MainBtn = styled.button`
  border: none;
  background-color: none;

  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px;
  border-radius: 10px;
  border: var(--sub-color) solid 3px;
  background-color: var(--main-color);

  img {
    width: 16px;
    filter: var(--svg-main-color);
  }
  &:hover {
    cursor: pointer;
    border: var(--main-color) solid 3px;
    background-color: var(--sub-color);
    transition: all 0.3s;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    h2 {
      font-weight: 600;
      color: var(--main-color);
      text-shadow: var(--text-shadow-white);
    }
    p {
      color: var(--accent-color);
    }
  }
`;

export default MainButton;

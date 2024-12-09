import styled from "styled-components";

interface MainBannerProps {
  isHovered: boolean;
  isButtonName: string;
}

function MainBanners({ isHovered, isButtonName }: MainBannerProps) {
  return (
    <MainBannerContainer>
      <MainBannerTitle>댕냥꽁냥의 서비스를 체험해보세요!</MainBannerTitle>
      <DefaultMainBanner isHovered={isHovered} isButtonName={isButtonName}></DefaultMainBanner>
      <NearByShopBanner isHovered={isHovered} isButtonName={isButtonName}>
        근처샵 보기
      </NearByShopBanner>
      <GalleryShopBanner isHovered={isHovered} isButtonName={isButtonName}>
        갤러리 구경하기
        <p> 미용사와 유저들의 귀여운 사진을 구경하세요</p>
      </GalleryShopBanner>
      <PetRegBanner isHovered={isHovered} isButtonName={isButtonName}>
        반려동물 등록하기
        <p> 반려동물을 등록하세요</p>
      </PetRegBanner>
      <ReserveShopBanner isHovered={isHovered} isButtonName={isButtonName}>
        미용 예약하기
        <p> 미용사와 유저들의 귀여운 사진을 구경하세요</p>
      </ReserveShopBanner>
      <MyPageBanner isHovered={isHovered} isButtonName={isButtonName}>
        마이 페이지
        <p> 미용사와 유저들의 귀여운 사진을 구경하세요</p>
      </MyPageBanner>
    </MainBannerContainer>
  );
}

const MainBannerContainer = styled.div`
  display: none;
  @media (min-width: 1024px) {
    width: 80%;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem;
  }
`;

const MainBannerTitle = styled.h1`
  padding: 1rem;
  font-weight: 600;
  background-color: #fff6da;
  border-radius: 10px 10px 0 0;
  border-bottom: 3px solid var(--main-color);
`;

const MainBanner = styled.div<MainBannerProps>`
  background-color: #afb3ff;
  padding: 1rem;
  height: 10rem;
`;

const NearByShopBanner = styled(MainBanner) <MainBannerProps>`
  background-color: aliceblue;
  display: ${(props) => (props.isHovered && props.isButtonName === "nearShop" ? "block" : "none")};
`;

const GalleryShopBanner = styled(MainBanner) <MainBannerProps>`
  background-color: blue;
  display: ${(props) => (props.isHovered && props.isButtonName === "gallery" ? "block" : "none")};
`;

const PetRegBanner = styled(MainBanner) <MainBannerProps>`
  background-color: violet;
  display: ${(props) => (props.isHovered && props.isButtonName === "petReg" ? "block" : "none")};
`;

const ReserveShopBanner = styled(MainBanner) <MainBannerProps>`
  background-color: yellow;
  display: ${(props) => (props.isHovered && props.isButtonName === "reserve" ? "block" : "none")};
`;
const MyPageBanner = styled(MainBanner) <MainBannerProps>`
  background-color: red;
  display: ${(props) => (props.isHovered && props.isButtonName === "myPage" ? "block" : "none")};
`;

const DefaultMainBanner = styled(MainBanner) <MainBannerProps>`
  background-color: skyblue;
  display: ${(props) => (props.isHovered ? "none" : "block")};
`;

export default MainBanners;

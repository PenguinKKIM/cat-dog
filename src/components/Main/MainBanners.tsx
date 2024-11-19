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
      </GalleryShopBanner>
      <PetRegBanner isHovered={isHovered} isButtonName={isButtonName}>
        반려동물 등록하기
      </PetRegBanner>
      <ReserveShopBanner isHovered={isHovered} isButtonName={isButtonName}>
        미용 예약하기
      </ReserveShopBanner>
      <MyPageBanner isHovered={isHovered} isButtonName={isButtonName}>
        마이 페이지
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

const NearByShopBanner = styled(MainBanner)<MainBannerProps>`
  transition: opacity 5s ease, visibility 5s ease;
  background-color: aliceblue;
  display: ${(props) => (props.isHovered && props.isButtonName === "nearShop" ? "block" : "none")};
`;

const GalleryShopBanner = styled(MainBanner)<MainBannerProps>`
  display: ${(props) => (props.isHovered && props.isButtonName === "gallery" ? "block" : "none")};
`;

const PetRegBanner = styled(MainBanner)<MainBannerProps>`
  display: ${(props) => (props.isHovered && props.isButtonName === "petReg" ? "block" : "none")};
`;

const ReserveShopBanner = styled(MainBanner)<MainBannerProps>`
  display: ${(props) => (props.isHovered && props.isButtonName === "reserve" ? "block" : "none")};
`;
const MyPageBanner = styled(MainBanner)<MainBannerProps>`
  display: ${(props) => (props.isHovered && props.isButtonName === "myPage" ? "block" : "none")};
`;

const DefaultMainBanner = styled(MainBanner)<MainBannerProps>`
  transition: opacity 5s ease, visibility 5s ease;
  display: ${(props) => (props.isHovered ? "none" : "block")};
`;

export default MainBanners;

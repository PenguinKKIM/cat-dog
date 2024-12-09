import styled from "styled-components";
import useHandleToRoute from "../../hooks/handelToRoute";

function HeaderNav({ toggleMenu }: { toggleMenu: boolean }) {
  const handleToRoute = useHandleToRoute();

  return (
    <HeaderNavStyle toggleMenu={toggleMenu}>
      <InnerNavUl>
        <InnerNavLi onClick={() => handleToRoute("/around")}>
          근처 샵 구경하기
          <img src="/images/logos/map-solid.svg" />
        </InnerNavLi>
        <InnerNavLi onClick={() => handleToRoute("/gallery/designergal")}>
          갤러리 구경하기
          <img src="/images/logos/images-solid.svg" />
        </InnerNavLi>
        <InnerNavLi onClick={() => handleToRoute("/petreg")}>
          반려동물 등록하기 <img src="/images/logos/paw-solid.svg" />
        </InnerNavLi>
        <InnerNavLi>
          예약 확인하기 <img src="/images/logos/clipboard-list-solid.svg" />
        </InnerNavLi>
        <InnerNavLi>
          마이 페이지 <img src="/images/logos/user-solid.svg" />
        </InnerNavLi>
      </InnerNavUl>
    </HeaderNavStyle>
  );
}

const HeaderNavStyle = styled.nav.attrs<{ toggleMenu: boolean }>(({ toggleMenu }: { toggleMenu: boolean }) => ({
  "aria-hidden": toggleMenu,
}))`
  width: 100%;
  background-color: var(--white);
  position: absolute;
  top: 4.4rem;
  left: 0;
  z-index: 1000;
  display: ${(props) => (props.toggleMenu ? "none" : "")};

  @media (min-width: 1024px) {
    display: block;
    position: static;
    background-color: rgba(255, 255, 255, 0);
  }
`;

const InnerNavUl = styled.ul`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 1rem;
  }
`;

const InnerNavLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  font-weight: 600;
  color: var(--sub-color);

  padding: 8px 16px;

  &:hover {
    cursor: pointer;
    background-color: var(--sub-color);
    color: white;
    transition: 0.2s all;
  }

  &:nth-child(1n) {
    border-bottom: var(--main-color) solid 2px;
  }

  &:nth-child(2n) {
    border-bottom: var(--sub-color) solid 2px;
  }

  img {
    width: 30px;
    height: 30px;
    filter: var(--svg-main-color);
  }

  @media (min-width: 1024px) {
    gap: 8px;
    &:nth-child(1n) {
      border-bottom: none;
    }

    &:nth-child(2n) {
      border-bottom: none;
    }

    img {
      display: none;
    }

    &:hover {
      background-color: var(--sub-color);
      border-radius: 5px;
      color: white;
      transition: 0.2s all;
    }
  }
`;

export default HeaderNav;

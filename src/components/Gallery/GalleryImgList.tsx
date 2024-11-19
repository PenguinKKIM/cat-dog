import { Outlet } from "react-router-dom";
import styled from "styled-components";

function GalleryImgList() {
  return (
    <>
      <GalleryImgListUl>
        <li>
          <ImageWrapper>
            <img src="/images/shop-1.jpg" alt="테스트" />
            <span>상세보기</span>
          </ImageWrapper>
        </li>
        <Outlet />
      </GalleryImgListUl>
    </>
  );
}

const GalleryImgListUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;

  li {
    width: 100%;
    aspect-ratio: 1;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: filter 0.3s ease;
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--white);
    font-size: 18px;
    font-weight: bold;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover img {
    filter: brightness(70%);
  }

  &:hover span {
    opacity: 1;
  }
`;

export default GalleryImgList;

import styled from "styled-components";

function AroundShopList() {
  return (
    <>
      <ShoplistUl>
        <ShopListNav>
          <ShopListNavUl>
            <li>인기순</li>
            <li>가까운 거리순</li>
          </ShopListNavUl>
        </ShopListNav>
        <ShopListLi>
          <ShopInfo>
            <img src="/images/shop-1.jpg" alt="샵 이미지" />
            <div>
              <h1>샵 이름(내 위치에서M)</h1>
              <span>서울시 금천구 가산 디지털1로 168 310호</span>
            </div>
          </ShopInfo>
          <ShopLikeRes>
            <div>
              <img src="/images/icons/heart-regular.svg" alt="하트 아이콘" />
              <span>찜 하기</span>
            </div>
            <div>
              <img src="/images/icons/calendar-check-regular.svg" alt="예약 아이콘" />
              <span>예약하기</span>
            </div>
          </ShopLikeRes>
        </ShopListLi>
        <ShopListLi>
          <ShopInfo>
            <img src="/images/shop-1.jpg" alt="샵 이미지" />
            <div>
              <h1>샵 이름(내 위치에서M)</h1>
              <span>서울시 금천구 가산 디지털1로 168 310호</span>
            </div>
          </ShopInfo>
          <ShopLikeRes>
            <div>
              <img src="/images/icons/heart-regular.svg" alt="하트 아이콘" />
              <span>찜 하기</span>
            </div>
            <div>
              <img src="/images/icons/calendar-check-regular.svg" alt="예약 아이콘" />
              <span>예약하기</span>
            </div>
          </ShopLikeRes>
        </ShopListLi>{" "}
        <ShopListLi>
          <ShopInfo>
            <img src="/images/shop-1.jpg" alt="샵 이미지" />
            <div>
              <h1>샵 이름(내 위치에서M)</h1>
              <span>서울시 금천구 가산 디지털1로 168 310호</span>
            </div>
          </ShopInfo>
          <ShopLikeRes>
            <div>
              <img src="/images/icons/heart-regular.svg" alt="하트 아이콘" />
              <span>찜 하기</span>
            </div>
            <div>
              <img src="/images/icons/calendar-check-regular.svg" alt="예약 아이콘" />
              <span>예약하기</span>
            </div>
          </ShopLikeRes>
        </ShopListLi>{" "}
        <ShopListLi>
          <ShopInfo>
            <img src="/images/shop-1.jpg" alt="샵 이미지" />
            <div>
              <h1>샵 이름(내 위치에서M)</h1>
              <span>서울시 금천구 가산 디지털1로 168 310호</span>
            </div>
          </ShopInfo>
          <ShopLikeRes>
            <div>
              <img src="/images/icons/heart-regular.svg" alt="하트 아이콘" />
              <span>찜 하기</span>
            </div>
            <div>
              <img src="/images/icons/calendar-check-regular.svg" alt="예약 아이콘" />
              <span>예약하기</span>
            </div>
          </ShopLikeRes>
        </ShopListLi>
        <ShopListLi>
          <ShopInfo>
            <img src="/images/shop-1.jpg" alt="샵 이미지" />
            <div>
              <h1>샵 이름(내 위치에서M)</h1>
              <span>서울시 금천구 가산 디지털1로 168 310호</span>
            </div>
          </ShopInfo>
          <ShopLikeRes>
            <div>
              <img src="/images/icons/heart-regular.svg" alt="하트 아이콘" />
              <span>찜 하기</span>
            </div>
            <div>
              <img src="/images/icons/calendar-check-regular.svg" alt="예약 아이콘" />
              <span>예약하기</span>
            </div>
          </ShopLikeRes>
        </ShopListLi>
      </ShoplistUl>
    </>
  );
}

const ShoplistUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin: 16px;
  padding: 1rem;

  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
  background-color: #fff;
`;

const ShopListNav = styled.nav`
  display: flex;
  gap: 16px;
`;

const ShopListNavUl = styled.nav`
  display: flex;
  gap: 16px;
  li {
    color: var(--text-secoundry);
    &:hover {
      cursor: pointer;
      color: var(--main-color);
    }
  }
`;

const ShopListLi = styled.li`
  padding: 16px;
  border-top: var(--main-color) dashed 1px;
  border-bottom: var(--main-color) dashed 1px;
  img {
    width: 80px;
    height: 80px;
  }
  &:hover {
    cursor: pointer;
    background-color: var(--accent-color);
  }
`;

const ShopInfo = styled.div`
  display: flex;
  gap: 16px;
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    h1 {
      font-size: 1.3rem;
      font-weight: 600;
    }
    span {
      font-size: 0.9rem;
      color: var(--text-secoundry);
    }
  }
`;

const ShopLikeRes = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    img {
      width: 16px;
      height: 16px;
    }
    &:hover {
      cursor: pointer;
      font-weight: 600;
      filter: invert(46%) sepia(98%) saturate(493%) hue-rotate(333deg) brightness(94%) contrast(94%);
    }
  }
`;

export default AroundShopList;

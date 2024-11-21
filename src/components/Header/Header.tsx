import styled from 'styled-components';
import HeaderNav from './HeaderNav';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ButtonPrimary } from '../Buttons/Buttons';
import { useAuthStore } from '../../store/useAuthStore';

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const loggedInUser = useAuthStore((state) => state.loggedInUser);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate()

  const handelMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/")
  };

  const handleLogIn = () => {
    navigate("/login")
  };

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <HeaderStyle>
        <HeaderUl>
          <li>
            <Link to={'/'}>
              <HeaderLogo src="/images/logos/logo_color.png" alt="댕냥꽁냥 로고" />
            </Link>
          </li>
          <li>
            <HeaderNav toggleMenu={toggleMenu} />
          </li>
          <li>
            <HeaderSvg
              src="/images/logos/dot-horizontal-filled.svg"
              alt="쩜쩜쩜"
              onClick={handelMenu}
            />
          </li>
        </HeaderUl>
        {loggedInUser ? (
          <ButtonPrimary onClick={handleLogout}>로그아웃</ButtonPrimary>
        ) : (
          <ButtonPrimary onClick={handleLogIn}>로그인</ButtonPrimary>
        )}
      </HeaderStyle>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header<{ isScrolled: boolean }>`
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (min-width: 1024px) {
    background-color: ${({ isScrolled }) =>
    isScrolled ? 'rgba(255, 255, 255, 0.5)' : 'var(--white)'};
  }
`;

const HeaderStyle = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.5);
  border-bottom: var(--main-color) solid 2px;

  @media (min-width: 1024px) {
    justify-content: center;
    align-items: center;
  }
`;

const HeaderUl = styled.ul`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 8px 16px;
`;

const HeaderLogo = styled.img`
  width: 150px;
  &:hover {
    cursor: pointer;
  }
`;

const HeaderSvg = styled.img`
  width: 50px;
  filter: var(--svg-main-color);
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;

export default Header;

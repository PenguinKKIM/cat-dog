import { Link } from "react-router-dom";
import styled from "styled-components";

function GalleryNav() {
  return (
    <>
      <GalleryNavBar>
        <ul>
          <li>
            <Link to="designergal">미용사</Link>
          </li>
          <li>
            <Link to="usergal">유저</Link>
          </li>
        </ul>
      </GalleryNavBar>
    </>
  );
}
const GalleryNavBar = styled.nav`
  ul {
    display: flex;
    gap: 10px;
  }
`;
export default GalleryNav;

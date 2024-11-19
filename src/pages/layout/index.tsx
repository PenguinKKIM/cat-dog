import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";

function Layout() {
  return (
    <Container>
      <Main>
        <Header />
        <Outlet />
        <Footer />
      </Main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: aliceblue;
`;

const Main = styled.main`
  width: 100%;
  background-color: white;
`;

export default Layout;

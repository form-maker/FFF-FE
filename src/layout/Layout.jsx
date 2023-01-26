import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Container>
      <Header />
      <MainLayout>
        <Outlet />
      </MainLayout>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const MainLayout = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;

  width: 100%;
  /* min-width: 800px; */
  max-width: 1200px;
  min-height: 80vh;
`;

export default Layout;

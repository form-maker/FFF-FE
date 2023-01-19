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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainLayout = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;

  min-height: 80vh;
  width: 100%;
  min-width: 800px;
  max-width: 1200px;
`;

export default Layout;

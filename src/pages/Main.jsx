import React from "react";
import styled from "styled-components";
import MainContentsScreen from "../components/main/mainContents/screen/MainContentsScreen";
import MainTitleScreen from "../components/main/mainTitle/screen/MainTitleScreen";

const Main = () => {
  return (
    <Container>
      <MainTitleScreen />
      <MainContentsScreen />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-width: 800px;
  max-width: 1200px;
`;

export default Main;

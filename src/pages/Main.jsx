import React from "react";
import styled from "styled-components";
import MainContentScreen from "../components/main/mainContent/screen/MainContentScreen";
import MainTitleScreen from "../components/main/mainTitle/screen/MainTitleScreen";

const Main = () => {
  return (
    <Container>
      <MainTitleScreen />
      <MainContentScreen />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-width: 800px;
  max-width: 1200px;
`;

export default Main;

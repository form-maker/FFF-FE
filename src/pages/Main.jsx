import React from "react";
import styled from "styled-components";
import MainContentsScreen from "../components/main/mainContents/screen/MainContentsScreen";
import MainSlideScreen from "../components/main/mainSlide/screen/MainSlideScreen";

const Main = () => {
  return (
    <Container>
      <MainSlideScreen />
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

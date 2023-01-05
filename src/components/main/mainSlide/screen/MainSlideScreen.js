import React from "react";
import styled from "styled-components";
import Slide from "../components/Slide";

const MainSlideScreen = () => {
  return (
    <Container>
      <Slide />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

export default MainSlideScreen;

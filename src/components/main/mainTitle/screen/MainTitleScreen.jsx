import React from "react";
import styled from "styled-components";
import PageTitle from "../components/PageTitle";
import TitleBackground from "../components/TitleBackground";

const MainTitleScreen = () => {
  return (
    <Container>
      <PageTitle />
      <TitleBackground />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 47.1rem;
`;

export default MainTitleScreen;

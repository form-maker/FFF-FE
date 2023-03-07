import React from "react";
import styled from "styled-components";

import SurveyView from "../components/SurveyView";

const SurveyScreen = () => {
  return (
    <Container>
      <SurveyView />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  @media screen and (min-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default SurveyScreen;

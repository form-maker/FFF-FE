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
`;

export default SurveyScreen;

import React from "react";
import styled from "styled-components";

import SurveyScreen from "../components/survey/screen/SurveyScreen";

const Survey = () => {
  return (
    <Container>
      <SurveyScreen />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export default Survey;

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

  @media screen and (min-width: 500px) {
    background-color: ${({ theme }) => theme.backgroundColor2};
  }
`;

export default Survey;

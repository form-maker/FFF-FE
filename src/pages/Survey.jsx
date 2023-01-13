import React from "react";
import styled from "styled-components";
import SurveyScreen from "../components/survey/screen/SurveyScreen";

const Survey = () => {
  return (
    <Container>
      <PhoneContainer>
        <SurveyScreen />
      </PhoneContainer>
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
const PhoneContainer = styled.div`
  width: 37.5rem;
  height: 66.7rem;
`;

export default Survey;

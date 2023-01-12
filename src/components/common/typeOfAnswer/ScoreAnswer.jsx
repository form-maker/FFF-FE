import React from "react";
import styled from "styled-components";
import RoundButtonMedium from "../buttons/roundButtons/RoundButtonMedium";

const ScoreAnswer = () => {
  return (
    <Container>
      <ScoreButtonContainer>
        <RoundButtonMedium
          buttonValue="1점"
          margin="0 0.5rem"
        ></RoundButtonMedium>
        <RoundButtonMedium
          buttonValue="2점"
          margin="0 0.5rem"
        ></RoundButtonMedium>
        <RoundButtonMedium
          buttonValue="3점"
          margin="0  0.5rem"
        ></RoundButtonMedium>
        <RoundButtonMedium
          buttonValue="4점"
          margin="0  0.5rem"
        ></RoundButtonMedium>
        <RoundButtonMedium
          buttonValue="5점"
          margin="0  0.5rem"
        ></RoundButtonMedium>
      </ScoreButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 15rem;
  justify-content: center;
  align-items: center;
`;

const ScoreButtonContainer = styled.div`
  display: flex;
`;

export default ScoreAnswer;

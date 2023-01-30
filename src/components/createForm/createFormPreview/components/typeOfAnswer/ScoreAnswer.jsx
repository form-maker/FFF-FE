import React from "react";
import styled from "styled-components";

import fonts from "../../../../../styles/fonts";
import RoundButtonMedium from "../../../../common/buttons/roundButtons/RoundButtonMedium";

const ScoreAnswer = () => {
  return (
    <Container>
      <ScoreButtonContainer>
        <RoundButtonMedium
          buttonValue="1점"
          margin="0 0.5rem"
          background="subColor1"
        ></RoundButtonMedium>
        <RoundButtonMedium
          buttonValue="2점"
          margin="0 0.5rem"
          background="subColor1"
        ></RoundButtonMedium>
        <RoundButtonMedium
          buttonValue="3점"
          margin="0  0.5rem"
          background="subColor1"
        ></RoundButtonMedium>
        <RoundButtonMedium
          buttonValue="4점"
          margin="0  0.5rem"
          background="subColor1"
        ></RoundButtonMedium>
        <RoundButtonMedium
          buttonValue="5점"
          margin="0  0.5rem"
          background="subColor1"
        ></RoundButtonMedium>
      </ScoreButtonContainer>
      <p>원하는 점수를 선택해 주세요</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 10rem;
  width: 100%;

  p {
    ${fonts.Body3}
    margin-top: 1.9rem;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;

const ScoreButtonContainer = styled.div`
  display: flex;
`;

export default ScoreAnswer;

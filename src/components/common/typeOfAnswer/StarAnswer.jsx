import React from "react";
import styled from "styled-components";
import fonts from "../../../styles/fonts";
import RoundButtonMedium from "../buttons/roundButtons/RoundButtonMedium";

const StarAnswer = () => {
  return (
    <Container>
      <ScoreButtonContainer>
        <div>
          <div>⭐️</div>
          <RoundButtonMedium
            buttonValue="1점"
            margin="0 0.5rem"
          ></RoundButtonMedium>
        </div>
        <div>
          <div>⭐️</div>
          <RoundButtonMedium
            buttonValue="2점"
            margin="0 0.5rem"
          ></RoundButtonMedium>
        </div>
        <div>
          <div>⭐️</div>
          <RoundButtonMedium
            buttonValue="3점"
            margin="0 0.5rem"
          ></RoundButtonMedium>
        </div>
        <div>
          <div>⭐️</div>
          <RoundButtonMedium
            buttonValue="4점"
            margin="0 0.5rem"
          ></RoundButtonMedium>
        </div>
        <div>
          <div>⭐️</div>
          <RoundButtonMedium
            buttonValue="5점"
            margin="0 0.5rem"
          ></RoundButtonMedium>
        </div>
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
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      ${fonts.H1}
    }
  }
`;

export default StarAnswer;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { changeAnswer } from "../../../../redux/modules/surveySlice";
import fonts from "../../../../styles/fonts";
import Title from "../Title";
import TurnAPageButtons from "../TurnAPageButtons";
import RoundButtonMedium from "../../../../components/common/buttons/roundButtons/RoundButtonMedium";

const ScoreSurvey = () => {
  const dispatch = useDispatch();
  const currentPageNum = useSelector((state) => state.survey.currentPageNum);
  const selectedAnswerList = useSelector(
    (state) => state.survey?.answer[currentPageNum - 2]["selectValue"]
  );

  const answerHandler = (answer) => {
    dispatch(changeAnswer(answer));
  };

  const range = [];
  for (let i = 1; i <= 5; i++) {
    range.push(i);
  }

  return (
    <Container>
      <Title />
      <ScoreButtonContainer>
        {range.map((score) => {
          return (
            <RoundButtonMedium
              key={score}
              buttonValue={`${score}점`}
              margin="0 0.5rem"
              background={
                selectedAnswerList.includes(score)
                  ? "subHoverColor1"
                  : "subColor1"
              }
              onClick={() => {
                answerHandler(score);
              }}
            ></RoundButtonMedium>
          );
        })}
      </ScoreButtonContainer>
      <p>원하는 점수를 선택해 주세요</p>
      <ArrowButtonContainer>
        <TurnAPageButtons />
      </ArrowButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 6.1rem;
  width: 100%;
  height: 100%;
  p {
    margin-top: 1.9rem;
    ${fonts.Body3}
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;

const ScoreButtonContainer = styled.div`
  display: flex;
  margin-top: 10rem;
`;

const ArrowButtonContainer = styled.div`
  position: absolute;
  bottom: 5rem;
  width: 100%;
`;

export default ScoreSurvey;

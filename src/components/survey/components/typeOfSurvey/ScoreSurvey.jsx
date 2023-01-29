import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import {
  changeAnswer,
  __getSurveyQuestion,
} from "../../../../redux/modules/surveySlice";
import fonts from "../../../../styles/fonts";
import Title from "../Title";
import TurnAPageButtons from "../TurnAPageButtons";
import { fadeInFromBottomAnimation } from "../../../../styles/animations";
import { batch } from "react-redux";

const ScoreSurvey = () => {
  const dispatch = useDispatch();
  const currentPageNum = useSelector((state) => state.survey.currentPageNum);
  const selectedAnswerList = useSelector(
    (state) => state.survey?.answer[currentPageNum - 2]["selectValue"]
  );
  const questionIdList = useSelector((state) => state.survey.questionIdList);

  const answerHandler = (answer) => {
    batch(() => {
      dispatch(changeAnswer(answer));
      currentPageNum !== questionIdList.length + 1 &&
        setTimeout(() => {
          dispatch(__getSurveyQuestion(questionIdList[currentPageNum - 1]));
        }, 1000);
    });
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
            <div key={score}>
              {selectedAnswerList[0] > score && (
                <RoundButton
                  key={score}
                  background="subHoverColor1"
                  onClick={() => {
                    answerHandler(score);
                  }}
                >
                  {score}점
                </RoundButton>
              )}
              {selectedAnswerList.includes(score) && (
                <Picked>
                  <div display={true}>Picked!</div>
                  <RoundButton
                    key={score}
                    background="subHoverColor1"
                    onClick={() => {
                      answerHandler(score);
                    }}
                  >
                    {score}점
                  </RoundButton>
                </Picked>
              )}
              {(selectedAnswerList[0] < score ||
                selectedAnswerList.length === 0) && (
                <RoundButton
                  key={score}
                  background="subColor1"
                  onClick={() => {
                    answerHandler(score);
                  }}
                >
                  {score}점
                </RoundButton>
              )}
            </div>
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
  @media screen and (min-width: 500px) {
    justify-content: center;
    p {
      margin-top: 5rem;
      margin-bottom: 15rem;
      font-size: 1.8rem;
    }
  }
`;

const ScoreButtonContainer = styled.div`
  display: flex;
  margin-top: 8rem;
  align-items: flex-end;
  height: 5rem;
  @media screen and (min-width: 500px) {
    margin-top: 2rem;
    justify-content: center;
    p {
      margin-top: 5rem;
      margin-bottom: 15rem;
      font-size: 1.8rem;
    }
  }
`;

const Picked = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    margin: 0;
    ${fonts.H1}
    color: ${({ theme }) => theme.mainHoverColor};
    font-size: 1.4rem;
    ${fadeInFromBottomAnimation}
  }
`;

const RoundButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 0.5rem;
  height: 4rem;
  width: 6rem;

  ${fonts.Body1}
  font-size: 1.5rem;

  background: ${({ background, theme }) => theme[background]};
  border-radius: 1rem;
  border: none;
`;

const ArrowButtonContainer = styled.div`
  position: absolute;
  bottom: 5rem;
  width: 100%;
`;

export default ScoreSurvey;

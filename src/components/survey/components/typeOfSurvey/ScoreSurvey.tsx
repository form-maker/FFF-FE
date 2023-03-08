import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import styled from "styled-components";

import { changeAnswer } from "../../../../redux/modules/surveySlice";
import fonts from "../../../../styles/fonts";
import Title from "../Title";
import { fadeInFromBottomAnimation } from "../../../../styles/animations";

const ScoreSurvey = () => {
  const dispatch = useAppDispatch();
  const currentPageNum = useAppSelector((state) => state.survey.currentPageNum);
  const selectedAnswerList = useAppSelector(
    (state) => state.survey?.answer[currentPageNum - 2]["selectValue"]
  );

  const answerHandler = (answer: number) => {
    dispatch(changeAnswer(answer));
  };

  const range = [];
  for (let i = 1; i <= 5; i++) {
    range.push(i);
  }

  return (
    <Container>
      <Title marginTop={""} />
      <Main>
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
                    <div>Picked!</div>
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
      </Main>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 4rem;
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
      margin-top: 1.2rem;
      font-size: 1.4rem;
    }
  }
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ScoreButtonContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: flex-end;
  height: 5rem;
  @media screen and (min-width: 500px) {
    justify-content: center;
    p {
      margin-top: 1.2rem;
      font-size: 1.6rem;
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

  background: ${({ background, theme }: { background: string; theme: any }) =>
    theme[background]};
  border-radius: 1rem;
  border: none;
`;

export default ScoreSurvey;

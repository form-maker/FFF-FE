import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { changeAnswer } from "../../../../redux/modules/surveySlice";
import fonts from "../../../../styles/fonts";
import Title from "../Title";
import TurnAPageButtons from "../../components/TurnAPageButtons";

const StarSurvey = () => {
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
            <div
              onClick={() => {
                answerHandler(score);
              }}
              key={score}
            >
              {selectedAnswerList.includes(score) ? (
                <img
                  src={process.env.PUBLIC_URL + "/img/fullStarIcon.svg"}
                  alt="starIcon"
                />
              ) : (
                <img
                  src={process.env.PUBLIC_URL + "/img/starIcon.svg"}
                  alt="starIcon"
                />
              )}
              <h3>{score}점</h3>
            </div>
          );
        })}
      </ScoreButtonContainer>
      <p>원하시는 별점을 선택해주세요</p>
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

  width: 100%;
  height: 100%;
  padding-top: 6.1rem;
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
  margin-top: 11.8rem;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0.5rem 0 0.5rem;
    cursor: pointer;
    img {
      width: 4.8rem;
    }
    h3 {
      margin-top: 1rem;
      margin-bottom: 0;
      padding: 0;

      ${fonts.Body1}
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;
    }
  }
`;

const ArrowButtonContainer = styled.div`
  position: absolute;
  bottom: 5rem;
  width: 100%;
`;

export default StarSurvey;

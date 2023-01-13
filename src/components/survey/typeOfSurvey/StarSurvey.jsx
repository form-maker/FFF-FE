import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import fonts from "../../../styles/fonts";
import { changeAnswer, getCover } from "../../../redux/modules/surveySlice";
import {
  __getSurveyQuestion,
  __getBeforeSurveyQuestion,
} from "../../../redux/modules/surveySlice";

const StarSurvey = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.survey.question);
  const questionIdList = useSelector((state) => state.survey.questionIdList);
  const currentPageNum = useSelector((state) => state.survey.currentPageNum);
  const selectedAnswerList = useSelector(
    (state) => state.survey?.answer[currentPageNum - 2]["selectValue"]
  );

  const answerHandler = (answer) => {
    dispatch(changeAnswer(answer));
  };

  const nextPageClickHandler = () => {
    currentPageNum === questionIdList.length + 1
      ? alert("마지막 항목입니다")
      : dispatch(__getSurveyQuestion(questionIdList[currentPageNum - 1]));
  };

  const goBackPageClickHandler = () => {
    currentPageNum === 2
      ? dispatch(getCover())
      : dispatch(__getBeforeSurveyQuestion(questionIdList[currentPageNum - 3]));
  };

  return (
    <Container>
      <h2>{question.questionTitle}</h2>
      <p>{question.questionSummary}</p>
      <ScoreButtonContainer>
        <div
          onClick={() => {
            answerHandler(1);
          }}
        >
          <Star>⭐️</Star>
          <Score
            color={selectedAnswerList.includes(1) ? "subColor" : "mainColor"}
          >
            1점
          </Score>
        </div>
        <div
          onClick={() => {
            answerHandler(2);
          }}
        >
          <Star>⭐️</Star>
          <Score
            color={selectedAnswerList.includes(2) ? "subColor" : "mainColor"}
          >
            2점
          </Score>
        </div>
        <div
          onClick={() => {
            answerHandler(3);
          }}
        >
          <Star>⭐️</Star>
          <Score
            color={selectedAnswerList.includes(3) ? "subColor" : "mainColor"}
          >
            3점
          </Score>
        </div>
        <div
          onClick={() => {
            answerHandler(4);
          }}
        >
          <Star>⭐️</Star>
          <Score
            color={selectedAnswerList.includes(4) ? "subColor" : "mainColor"}
          >
            4점
          </Score>
        </div>
        <div
          onClick={() => {
            answerHandler(5);
          }}
        >
          <Star>⭐️</Star>
          <Score
            color={selectedAnswerList.includes(5) ? "subColor" : "mainColor"}
          >
            5점
          </Score>
        </div>
      </ScoreButtonContainer>
      <p>원하시는 별점을 선택해주세요</p>
      <BottomContainer>
        <button onClick={goBackPageClickHandler}>〈</button>
        <div>
          {currentPageNum}/{questionIdList.length + 1}
        </div>
        <button onClick={nextPageClickHandler}>〉</button>
      </BottomContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  h2 {
    margin: 5rem 0 0 0;
    ${fonts.H2}
  }
  p:nth-of-type(1) {
    ${fonts.Body2}
  }
`;

const ScoreButtonContainer = styled.div`
  display: flex;
  margin-top: 10rem;
  div {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      margin: 0.5rem;
    }
  }
`;

const Star = styled.div`
  ${fonts.H1}
  color: ${({ color, theme }) => theme[color]};
`;

const Score = styled.div`
  ${fonts.Body2};
  color: ${({ color, theme }) => theme[color]};
`;

const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 1rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    border: none;
    background: none;
    width: 6.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 1.3rem 1.6rem;
    color: ${({ theme }) => theme.mainColor};
    ${fonts.H1}
    cursor: pointer;
  }
`;

export default StarSurvey;

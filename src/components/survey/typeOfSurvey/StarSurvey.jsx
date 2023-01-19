import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import fonts from "../../../styles/fonts";
import { changeAnswer, getCover } from "../../../redux/modules/surveySlice";
import {
  __getSurveyQuestion,
  __getBeforeSurveyQuestion,
} from "../../../redux/modules/surveySlice";
import TurnAPageButtons from "../components/TurnAPageButtons";

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
      <TitleContainer>
        <h1>{question.questionTitle}</h1>
        <h5>{question.questionSummary}</h5>
      </TitleContainer>
      <ScoreButtonContainer>
        <div
          onClick={() => {
            answerHandler(1);
          }}
        >
          {selectedAnswerList.includes(1) ? (
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
          <h3>1점</h3>
        </div>
        <div
          onClick={() => {
            answerHandler(2);
          }}
        >
          {selectedAnswerList.includes(2) ? (
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
          <h3>2점</h3>
        </div>
        <div
          onClick={() => {
            answerHandler(3);
          }}
        >
          {selectedAnswerList.includes(3) ? (
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
          <h3>3점</h3>
        </div>
        <div
          onClick={() => {
            answerHandler(4);
          }}
        >
          {selectedAnswerList.includes(4) ? (
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
          <h3>4점</h3>
        </div>
        <div
          onClick={() => {
            answerHandler(5);
          }}
        >
          {selectedAnswerList.includes(5) ? (
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
          <h3>5점</h3>
        </div>
      </ScoreButtonContainer>
      <p>원하시는 별점을 선택해주세요</p>
      <ArrowButtonContainer>
        <TurnAPageButtons
          currentPageNum={currentPageNum}
          questionLength={questionIdList.length}
          goBackPageClickHandler={goBackPageClickHandler}
          nextPageClickHandler={nextPageClickHandler}
        />
      </ArrowButtonContainer>
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
  padding-top: 6.1rem;
  p {
    ${fonts.Body3}
    margin-top: 1.9rem;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    ${fonts.Body1}
    margin: 0;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.9rem;
  }
  h5 {
    ${fonts.Body3}
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
    margin-top: 4.6rem;
  }
`;

const ScoreButtonContainer = styled.div`
  display: flex;
  margin-top: 11.8rem;
  div {
    margin: 0 0.5rem 0 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    img {
      width: 4.8rem;
    }
    h3 {
      ${fonts.Body1}
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;
      margin-top: 1rem;
      margin-bottom: 0;
      padding: 0;
    }
  }
`;

const ArrowButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 5rem;
`;

export default StarSurvey;

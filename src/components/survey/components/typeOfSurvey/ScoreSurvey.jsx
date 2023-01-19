import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";
import { changeAnswer, getCover } from "../../../../redux/modules/surveySlice";
import {
  __getSurveyQuestion,
  __getBeforeSurveyQuestion,
} from "../../../../redux/modules/surveySlice";
import TurnAPageButtons from "../TurnAPageButtons";
import RoundButtonMedium from "../../../../components/common/buttons/roundButtons/RoundButtonMedium";

const ScoreSurvey = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.survey.question);
  const questionIdList = useSelector((state) => state.survey.questionIdList);
  const currentPageNum = useSelector((state) => state.survey.currentPageNum);
  const selectedAnswerList = useSelector(
    (state) => state.survey?.answer[currentPageNum - 2]["selectValue"]
  );

  const survey = useSelector((state) => state.survey);

  useEffect(() => {
    console.log(survey);
  }, [survey]);

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
        <RoundButtonMedium
          buttonValue="1점"
          margin="0 0.5rem"
          background={
            selectedAnswerList.includes(1) ? "subHoverColor1" : "subColor1"
          }
          onClick={() => {
            answerHandler(1);
          }}
        ></RoundButtonMedium>
        <RoundButtonMedium
          buttonValue="2점"
          margin="0 0.5rem"
          background={
            selectedAnswerList.includes(2) ? "subHoverColor1" : "subColor1"
          }
          onClick={() => {
            answerHandler(2);
          }}
        ></RoundButtonMedium>
        <RoundButtonMedium
          buttonValue="3점"
          margin="0  0.5rem"
          background={
            selectedAnswerList.includes(3) ? "subHoverColor1" : "subColor1"
          }
          onClick={() => {
            answerHandler(3);
          }}
        ></RoundButtonMedium>
        <RoundButtonMedium
          buttonValue="4점"
          margin="0  0.5rem"
          background={
            selectedAnswerList.includes(4) ? "subHoverColor1" : "subColor1"
          }
          onClick={() => {
            answerHandler(4);
          }}
        ></RoundButtonMedium>
        <RoundButtonMedium
          buttonValue="5점"
          margin="0  0.5rem"
          background={
            selectedAnswerList.includes(5) ? "subHoverColor1" : "subColor1"
          }
          onClick={() => {
            answerHandler(5);
          }}
        ></RoundButtonMedium>
      </ScoreButtonContainer>
      <p>원하는 점수를 선택해 주세요</p>
      <ArrowButtonContainer>
        <TurnAPageButtons
          currentPageNum={currentPageNum}
          questionLength={questionIdList.length + 1}
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
  margin-top: 10rem;
`;

const ArrowButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 5rem;
`;

export default ScoreSurvey;

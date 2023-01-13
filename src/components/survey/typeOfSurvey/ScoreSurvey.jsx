import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import fonts from "../../../styles/fonts";
import { changeAnswer, getCover } from "../../../redux/modules/surveySlice";
import {
  __getSurveyQuestion,
  __getBeforeSurveyQuestion,
} from "../../../redux/modules/surveySlice";

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
      <h2>{question.questionTitle}</h2>
      <p>{question.questionSummary}</p>
      <ButtonContainer>
        <Button
          background={selectedAnswerList.includes(1) ? "subColor" : "mainColor"}
          onClick={() => {
            answerHandler(1);
          }}
        >
          1점
        </Button>

        <Button
          background={selectedAnswerList.includes(2) ? "subColor" : "mainColor"}
          onClick={() => {
            answerHandler(2);
          }}
        >
          2점
        </Button>

        <Button
          background={selectedAnswerList.includes(3) ? "subColor" : "mainColor"}
          onClick={() => {
            answerHandler(3);
          }}
        >
          3점
        </Button>

        <Button
          background={selectedAnswerList.includes(4) ? "subColor" : "mainColor"}
          onClick={() => {
            answerHandler(4);
          }}
        >
          4점
        </Button>

        <Button
          background={selectedAnswerList.includes(5) ? "subColor" : "mainColor"}
          onClick={() => {
            answerHandler(5);
          }}
        >
          5점
        </Button>
      </ButtonContainer>
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

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  ${fonts.Body1}
  background: ${({ background, theme }) => theme[background]};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  margin: 0.5rem;
  padding: 0.8rem 0.2rem;
  border-radius: 1rem;
  cursor: pointer;
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

export default ScoreSurvey;

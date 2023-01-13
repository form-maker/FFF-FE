import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import fonts from "../../../styles/fonts";
import { changeAnswer, getCover } from "../../../redux/modules/surveySlice";
import {
  __getSurveyQuestion,
  __getBeforeSurveyQuestion,
} from "../../../redux/modules/surveySlice";

const SingleChoiceSurvey = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.survey.question);
  const questionIdList = useSelector((state) => state.survey.questionIdList);
  const currentPageNum = useSelector((state) => state.survey.currentPageNum);
  const selectedAnswerList = useSelector(
    (state) => state.survey?.answer[currentPageNum - 2]["selectValue"]
  );

  const answerHandler = (answerNum) => {
    dispatch(changeAnswer(answerNum));
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

      <p>*다중선택 불가</p>
      {question.answerList.map((answer) => {
        return (
          <Button
            key={answer.answerNum}
            id={answer.answerNum}
            onClick={() => {
              answerHandler(answer.answerNum);
            }}
            background={
              selectedAnswerList.includes(+answer.answerNum)
                ? "subColor"
                : "mainColor"
            }
          >
            {answer.answerNum + 1}. {answer.answerValue}
          </Button>
        );
      })}
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
  p:nth-of-type(2) {
    margin: 3rem 0 0 0;
    ${fonts.Body2}
  }
`;
const Button = styled.div`
  ${fonts.Body2}
  margin: 2rem 0 0 0;
  width: 26.5rem;
  height: 4.2rem;
  border: none;
  border-radius: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2.2rem;
  background: ${({ background, theme }) => theme[background]};
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

export default SingleChoiceSurvey;

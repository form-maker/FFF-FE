import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import fonts from "../../../styles/fonts";
import { changeAnswer, getCover } from "../../../redux/modules/surveySlice";
import {
  __getSurveyQuestion,
  __getBeforeSurveyQuestion,
} from "../../../redux/modules/surveySlice";

const SlideSurvey = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.survey.question);
  const questionIdList = useSelector((state) => state.survey.questionIdList);
  const currentPageNum = useSelector((state) => state.survey.currentPageNum);
  const selectedAnswerList = useSelector(
    (state) => state.survey?.answer[currentPageNum - 2]["selectValue"]
  );

  const answerHandler = (event) => {
    const { value } = event.target;
    dispatch(changeAnswer(+value));
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
      <SlideContainer>
        <input
          type="range"
          min={-question.volume}
          max={question.volume}
          // value={slideValue}
          step="1"
          onChange={answerHandler}
          defaultValue="0"
        />
        <p>{[selectedAnswerList]}</p>
      </SlideContainer>
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

const SlideContainer = styled.div`
  margin-top: 14.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    -webkit-appearance: none;
    width: 25rem;
    height: 0.88rem;
    background: #ececec;
    border: none;
    outline: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 1.2rem;
      height: 1.2rem;
      background: ${({ theme }) => theme.mainColor};
      border-radius: 50%;
    }
    &::-webkit-slider-thumb:hover {
      background: #4471ef;
    }
  }
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
export default SlideSurvey;

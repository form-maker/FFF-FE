import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import fonts from "../../../styles/fonts";
import {
  changeDescriptive,
  getCover,
} from "../../../redux/modules/surveySlice";
import {
  __getSurveyQuestion,
  __getBeforeSurveyQuestion,
} from "../../../redux/modules/surveySlice";

const LongDescriptiveSurvey = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.survey.question);
  const questionIdList = useSelector((state) => state.survey.questionIdList);
  const currentPageNum = useSelector((state) => state.survey.currentPageNum);
  const descriptive = useSelector(
    (state) => state.survey?.answer[currentPageNum - 2]["descriptive"]
  );

  const answerHandler = (event) => {
    const answer = event.target.value;
    dispatch(changeDescriptive(answer));
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
      <InputContainer>
        <textarea
          type="text"
          placeholder="꼼꼼하게 답해주세요"
          value={descriptive}
          onChange={answerHandler}
        ></textarea>
      </InputContainer>
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

const InputContainer = styled.div`
  width: 100%;
  height: 35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    border: 0;
    width: 27.3rem;
    padding: 1.1rem;
    text-align: center;
    border-bottom: ${({ theme }) => `0.3rem solid ${theme.subColor}`};
  }
  textarea {
    box-sizing: border-box;
    background-color: transparent;
    color: gray;
    width: 26.4rem;
    border: 1px solid black;
    font-size: 1.2rem;
    resize: none;
    min-height: 20rem;
    border: ${({ theme }) => `0.1rem solid ${theme.subColor}`};
    border-radius: 1rem;
    padding: 1rem;
    scroll-behavior: auto;
    &::placeholder {
      color: gray;
    }
    div {
      display: flex;
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

export default LongDescriptiveSurvey;

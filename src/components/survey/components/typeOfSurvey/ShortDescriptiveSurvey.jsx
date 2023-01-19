import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";
import {
  changeDescriptive,
  getCover,
} from "../../../../redux/modules/surveySlice";
import {
  __getSurveyQuestion,
  __getBeforeSurveyQuestion,
} from "../../../../redux/modules/surveySlice";
import TurnAPageButtons from "../../components/TurnAPageButtons";

const ShortDescriptiveSurvey = () => {
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
      <TitleContainer>
        <h1>{question.questionTitle}</h1>
        <h5>{question.questionSummary}</h5>
      </TitleContainer>
      <InputContainer>
        <input
          value={descriptive}
          onChange={answerHandler}
          placeholder="한문장으로 작성해주세요"
        ></input>
      </InputContainer>
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

const InputContainer = styled.div`
  width: 100%;
  height: 35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  input {
    text-align: center;
    padding: 1.1rem;
    width: 27.3rem;

    ${fonts.Body1}
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.7rem;

    border: none;
    border-bottom: 0.3rem solid ${({ theme }) => theme.pointColor};
    &::placeholder {
      ${fonts.Body1}
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 1.7rem;
    }
  }
`;

const ArrowButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 5rem;
`;

export default ShortDescriptiveSurvey;

import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import fonts from "../../../styles/fonts";
import { __getSurveyQuestion } from "../../../redux/modules/surveySlice";

const CoverSurvey = () => {
  const dispatch = useDispatch();
  const survey = useSelector((state) => state.survey.survey);
  const questionIdList = useSelector((state) => state.survey.questionIdList);

  const surveyStartClickHandler = () => {
    dispatch(__getSurveyQuestion(questionIdList[0]));
  };

  return (
    <Container>
      <h2>{survey.title}</h2>
      <p>{survey.summary}</p>
      <p>{survey.endedAt}</p>
      <button onClick={surveyStartClickHandler}>시작하기</button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin: 9.5rem 0 0 0;
    ${fonts.H2}
  }
  p:nth-of-type(1) {
    margin: 4.5rem 0 0 0;
    ${fonts.Body2}
  }
  p:nth-of-type(2) {
    margin: 30.5rem 0 0 0;
    ${fonts.Body2}
  }
  button {
    margin: 3.4rem 0 0 0;
    width: 28.3rem;
    border: none;
    padding: 1.3rem;
    background-color: ${({ theme }) => theme.mainColor};
    border-radius: 2.6rem;
    cursor: pointer;
  }
`;

export default CoverSurvey;

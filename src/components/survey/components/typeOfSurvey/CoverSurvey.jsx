import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import fonts from "../../../../styles/fonts";
import { __getSurveyQuestion } from "../../../../redux/modules/surveySlice";
import RoundButtonLarge from "../../../common/buttons/roundButtons/RoundButtonLarge";

const CoverSurvey = () => {
  const dispatch = useDispatch();
  const survey = useSelector((state) => state.survey.survey);
  const questionIdList = useSelector((state) => state.survey?.questionIdList);

  const surveyStartClickHandler = () => {
    dispatch(__getSurveyQuestion(questionIdList[0]));
  };

  return (
    <Container>
      <Main>
        <h1>{survey.title}</h1>
        <h5>{survey.summary}</h5>
        <h5>{survey.endedAt}</h5>
      </Main>
      <Bottom>
        <RoundButtonLarge
          buttonValue="시작하기"
          width="28.3rem"
          onClick={surveyStartClickHandler}
        />
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 6.1rem;
  height: 20rem;

  text-align: center;
  h1 {
    margin: 0;
    ${fonts.Body1}
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.9rem;
  }
  h5:nth-of-type(1) {
    margin-top: 4.6rem;
    ${fonts.Body1}
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
  }
  h5:nth-of-type(2) {
    margin-top: 2rem;
    ${fonts.Body3}
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 4.6rem;
`;

export default CoverSurvey;

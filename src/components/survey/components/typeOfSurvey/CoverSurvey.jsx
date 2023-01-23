import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
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
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  flex: 1;
  text-align: center;
  padding-top: 6.1rem;
  display: flex;
  flex-direction: column;
  height: 20rem;
  h1 {
    ${fonts.Body1}
    margin: 0;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.9rem;
  }
  h5:nth-of-type(1) {
    ${fonts.Body1}
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
    margin-top: 4.6rem;
  }
  h5:nth-of-type(2) {
    ${fonts.Body3}
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
    margin-top: 2rem;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 4.6rem;
`;

export default CoverSurvey;

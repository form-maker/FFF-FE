import React, { useEffect, useState } from "react";
import styled from "styled-components";
import fonts from "../../../styles/fonts";

import CoverSurvey from "../typeOfSurvey/CoverSurvey";
import ScoreSurvey from "../typeOfSurvey/ScoreSurvey";
import StarSurvey from "../typeOfSurvey/StarSurvey";
import SingleChoiceSurvey from "../typeOfSurvey/SingleChoiceSurvey";
import MultipleChoiceSurvey from "../typeOfSurvey/MultipleChoiceSurvey";
import SlideSurvey from "../typeOfSurvey/SlideSurvey";
import RankSurvey from "../typeOfSurvey/RankSurvey";
import ShortDescriptiveSurvey from "../typeOfSurvey/ShortDescriptiveSurvey";
import LongDescriptiveSurvey from "../typeOfSurvey/LongDescriptiveSurvey";

import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  __getSurvey,
  __getSurveyQuestion,
  __postSurvey,
} from "../../../redux/modules/surveySlice";
import RoundButtonMedium from "../../common/buttons/roundButtons/RoundButtonMedium";
import RoundButtonLarge from "../../common/buttons/roundButtons/RoundButtonLarge";

const SurveyView = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const surveyId = searchParams.get("surveyId");
  const survey = useSelector((state) => state.survey.survey);
  const currentFormType = useSelector((state) => state.survey.currentFormType);
  const questionIdList = useSelector((state) => state.survey.questionIdList);
  const currentPageNum = useSelector((state) => state.survey.currentPageNum);

  const answerList = useSelector((state) => state.survey.answer);

  const surveytest = useSelector((state) => state.survey);
  console.log(surveytest);

  useEffect(() => {
    dispatch(__getSurvey(surveyId));
  }, [dispatch, surveyId]);

  const endSurveyClickHandler = () => {
    let BlankAnswer = answerList.filter(
      (answer) => answer.selectValue.length === 0 && answer.descriptive === ""
    );
    BlankAnswer.length !== 0
      ? alert("체크하지 않은 문항이 있습니다!")
      : console.log(surveyId, answerList);
    dispatch(__postSurvey({ surveyId, answerList }));
  };

  return (
    <Container>
      <PointContext>🔥 현재 * 명이 설문을 참여 중입니다.</PointContext>
      {currentFormType === "COVER" && <CoverSurvey />}
      {currentFormType === "SCORE" && <ScoreSurvey />}
      {currentFormType === "STAR" && <StarSurvey />}
      {currentFormType === "SINGLE_CHOICE" && <SingleChoiceSurvey />}
      {currentFormType === "MULTIPLE_CHOICE" && <MultipleChoiceSurvey />}
      {currentFormType === "SLIDE" && <SlideSurvey />}
      {currentFormType === "RANK" && <RankSurvey />}
      {currentFormType === "SHORT_DESCRIPTIVE" && <ShortDescriptiveSurvey />}
      {currentFormType === "LONG_DESCRIPTIVE" && <LongDescriptiveSurvey />}

      {currentPageNum === survey.questionIdList?.length + 1 && (
        <EndButtonContainer>
          <RoundButtonLarge
            buttonValue="설문 완료"
            onClick={endSurveyClickHandler}
            background="subColor1"
            width="28.3rem"
          ></RoundButtonLarge>
        </EndButtonContainer>
      )}
    </Container>
  );
};

const PointContext = styled.div`
  ${fonts.Body1}
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.4rem;
  width: 22.7rem;
  text-align: center;
  background: ${({ theme }) => theme.gray3};
  padding: 0.7rem;
  border-radius: 9.9rem;
  margin-top: 4.2rem;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  h5 {
    ${fonts.Body2}
    margin: 1.5rem 0 0 0;
  }
  p {
    margin: 1.7rem 0 0 0;
    ${fonts.Body2}
    span {
      font-size: 2.5rem;
    }
  }
`;

const EndButtonContainer = styled.div`
  position: absolute;
  bottom: 10rem;
`;

export default SurveyView;

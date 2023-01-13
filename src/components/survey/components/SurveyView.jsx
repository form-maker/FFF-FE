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
      {currentPageNum === survey.questionIdList?.length + 1 && (
        <EndButton onClick={endSurveyClickHandler}>설문 완료</EndButton>
      )}
      <h5>미리보기</h5>
      <p>
        <span>🔥 </span>현재 * 명이 설문을 참여 중입니다.
      </p>
      {currentFormType === "COVER" && <CoverSurvey />}
      {currentFormType === "SCORE" && <ScoreSurvey />}
      {currentFormType === "STAR" && <StarSurvey />}
      {currentFormType === "SINGLE_CHOICE" && <SingleChoiceSurvey />}
      {currentFormType === "MULTIPLE_CHOICE" && <MultipleChoiceSurvey />}
      {currentFormType === "SLIDE" && <SlideSurvey />}
      {currentFormType === "RANK" && <RankSurvey />}
      {currentFormType === "SHORT_DESCRIPTIVE" && <ShortDescriptiveSurvey />}
      {currentFormType === "LONG_DESCRIPTIVE" && <LongDescriptiveSurvey />}
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

const EndButton = styled.div`
  position: absolute;
  right: 3rem;
  padding: 0.8rem 1.5rem;
  background-color: ${({ theme }) => theme.mainColor};
  border-radius: 1rem;
  ${fonts.Body2}
  cursor: pointer;
`;

export default SurveyView;

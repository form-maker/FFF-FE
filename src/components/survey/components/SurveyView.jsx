import React, { useEffect, useState } from "react";
import styled from "styled-components";
import fonts from "../../../styles/fonts";
import CoverAnswer from "../../common/typeOfAnswer/CoverAnswer";
import LongDescriptiveAnswer from "../../common/typeOfAnswer/LongDescriptiveAnswer";
import MultipleChoiceAnswer from "../../common/typeOfAnswer/MultipleChoiceAnswer";
import RankAnswer from "../../common/typeOfAnswer/RankAnswer";
import ScoreAnswer from "../../common/typeOfAnswer/ScoreAnswer";
import ShortDescriptiveAnswer from "../../common/typeOfAnswer/ShortDescriptiveAnswer";
import SingleChoiceAnswer from "../../common/typeOfAnswer/SingleChoiceAnswer";
import SlideBarAnswer from "../../common/typeOfAnswer/SlideBarAnswer";
import StarAnswer from "../../common/typeOfAnswer/StarAnswer";
import ArrowButton from "../../createForm/createFormPreview/components/ArrowButton";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  __getSurvey,
  __getSurveyQuestion,
} from "../../../redux/modules/surveySlice";

const SurveyView = () => {
  const [questionType, setQuestionType] = useState("Cover");
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const surveyId = searchParams.get("surveyId");
  const survey = useSelector((state) => state.survey.survey);
  const questionIdList = useSelector((state) => state.survey.questionIdList);

  console.log(survey);
  console.log(questionIdList);

  useEffect(() => {
    dispatch(__getSurvey(surveyId));
    setQuestionType(setQuestionType);
  }, [dispatch, surveyId]);

  return (
    <Container>
      <p>현재 * 명이 설문을 참여 중입니다.</p>
      {questionType === "Cover" && <CoverAnswer />}
      {questionType === "Score" && <ScoreAnswer />}
      {questionType === "Star" && <StarAnswer />}
      {questionType === "SingleChoice" && <SingleChoiceAnswer />}
      {questionType === "MultipleChoice" && <MultipleChoiceAnswer />}
      {questionType === "Slide" && <SlideBarAnswer />}
      {questionType === "Rank" && <RankAnswer />}
      {questionType === "ShortDescriptive" && <ShortDescriptiveAnswer />}
      {questionType === "LongDescriptive" && <LongDescriptiveAnswer />}

      <ArrowButtonContainer>
        <ArrowButton buttonText="<" />
        <ArrowButton buttonText=">" />
      </ArrowButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  h1 {
    margin-top: 8rem;
    ${fonts.H1}
  }
  h5 {
    margin-top: 2rem;
    ${fonts.Body2}
  }
`;

const ArrowButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default SurveyView;

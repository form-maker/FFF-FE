import React from "react";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";
import CoverAnswer from "../../../common/typeOfAnswer/CoverAnswer";
import GroupAnswer from "../../../common/typeOfAnswer/GroupAnswer";
import LongDescriptiveAnswer from "../../../common/typeOfAnswer/LongDescriptiveAnswer";
import MultipleChoiceAnswer from "../../../common/typeOfAnswer/MultipleChoiceAnswer";
import RankAnswer from "../../../common/typeOfAnswer/RankAnswer";
import ScoreAnswer from "../../../common/typeOfAnswer/ScoreAnswer";
import ShortDescriptiveAnswer from "../../../common/typeOfAnswer/ShortDescriptiveAnswer";
import SingleChoiceAnswer from "../../../common/typeOfAnswer/SingleChoiceAnswer";
import SlideBarAnswer from "../../../common/typeOfAnswer/SlideBarAnswer";
import StarAnswer from "../../../common/typeOfAnswer/StarAnswer";
import ArrowButton from "./ArrowButton";
import { useSelector } from "react-redux";
import NewAnswer from "../../../common/typeOfAnswer/NewAnswer";

const Preview = () => {
  const questionType = useSelector(
    (state) => state.createForm.selectedFormType
  );
  const currentPageNum = useSelector(
    (state) => state.createForm.currentPageNum
  );
  const questionTitle = useSelector(
    (state) =>
      state.createForm.formList.questionList.length !== 0 &&
      questionType !== "Cover" &&
      state.createForm.formList.questionList[currentPageNum - 2][
        "questionTitle"
      ]
  );

  const questionSummary = useSelector(
    (state) =>
      state.createForm.formList?.questionList.length !== 0 &&
      questionType !== "Cover" &&
      state.createForm.formList?.questionList[currentPageNum - 2][
        "questionSummary"
      ]
  );

  console.log(questionType);
  return (
    <Container>
      <p>현재 * 명이 설문을 참여 중입니다.</p>
      {questionType !== "Cover" &&
        questionType !== "Group" &&
        questionType !== "NewForm" && (
          <>
            <h1>
              {currentPageNum - 1}. {questionTitle}
            </h1>
            <h5>{questionSummary}</h5>
          </>
        )}
      {questionType === "Cover" && <CoverAnswer />}
      {questionType === "Score" && <ScoreAnswer />}
      {questionType === "Star" && <StarAnswer />}
      {questionType === "SingleChoice" && <SingleChoiceAnswer />}
      {questionType === "MultipleChoice" && <MultipleChoiceAnswer />}
      {questionType === "Slide" && <SlideBarAnswer />}
      {questionType === "Rank" && <RankAnswer />}
      {questionType === "ShortDescriptive" && <ShortDescriptiveAnswer />}
      {questionType === "LongDescriptive" && <LongDescriptiveAnswer />}
      {questionType === "Group" && <GroupAnswer />}
      {questionType === "NewForm" && <NewAnswer />}

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

export default Preview;

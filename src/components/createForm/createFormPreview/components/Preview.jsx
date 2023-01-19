import React from "react";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";
import CoverAnswer from "../../../common/typeOfAnswer/CoverAnswer";
// import GroupAnswer from "../../../common/typeOfAnswer/GroupAnswer";
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
import PhoneTurnAPageButtons from "./PhoneTurnAPageButtons";

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
      questionType !== "COVER" &&
      state.createForm.formList.questionList[currentPageNum - 2][
        "questionTitle"
      ]
  );
  const questionLength = useSelector(
    (state) => state.createForm.formList.questionList
  ).length;
  const questionSummary = useSelector(
    (state) =>
      state.createForm.formList?.questionList.length !== 0 &&
      questionType !== "COVER" &&
      state.createForm.formList?.questionList[currentPageNum - 2][
        "questionSummary"
      ]
  );

  console.log(questionType);
  return (
    <Container>
      <PointContext>🔥 현재 * 명이 설문을 참여 중입니다.</PointContext>
      {questionType !== "COVER" &&
        // questionType !== "Group" &&
        questionType !== "NEW_FORM" && (
          <TitleContainer>
            <h1>
              {questionTitle === ""
                ? "질문을 작성해주세요"
                : `${currentPageNum - 1}. ${questionTitle}`}
            </h1>
            <h5>
              {questionSummary === ""
                ? "질문에 대한 상세 설명을 작성해주세요(선택사항)"
                : questionSummary}
            </h5>
          </TitleContainer>
        )}
      {questionType === "COVER" && <CoverAnswer />}
      {questionType === "SCORE" && <ScoreAnswer />}
      {questionType === "STAR" && <StarAnswer />}
      {questionType === "SINGLE_CHOICE" && <SingleChoiceAnswer />}
      {questionType === "MULTIPLE_CHOICE" && <MultipleChoiceAnswer />}
      {questionType === "SLIDE" && <SlideBarAnswer />}
      {questionType === "RANK" && <RankAnswer />}
      {questionType === "SHORT_DESCRIPTIVE" && <ShortDescriptiveAnswer />}
      {questionType === "LONG_DESCRIPTIVE" && <LongDescriptiveAnswer />}
      {/* {questionType === "Group" && <GroupAnswer />} */}
      {questionType === "NEW_FORM" && <NewAnswer />}

      {questionType !== "COVER" && (
        <ArrowButtonContainer>
          <PhoneTurnAPageButtons
            currentPageNum={currentPageNum}
            questionLength={questionLength}
          />
        </ArrowButtonContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4.2rem;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 0;
    margin-top: 6.1rem;
    ${fonts.Body1}
  }
  h5 {
    margin-top: 4.6rem;
    ${fonts.Body3}
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
  }
`;

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
`;

const ArrowButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 10rem;
`;

export default Preview;

import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import fonts from "../../../../styles/fonts";
import CoverAnswer from "./typeOfAnswer/CoverAnswer";
import LongDescriptiveAnswer from "./typeOfAnswer/LongDescriptiveAnswer";
import MultipleChoiceAnswer from "./typeOfAnswer/MultipleChoiceAnswer";
import RankAnswer from "./typeOfAnswer/RankAnswer";
import ScoreAnswer from "./typeOfAnswer/ScoreAnswer";
import ShortDescriptiveAnswer from "./typeOfAnswer/ShortDescriptiveAnswer";
import SingleChoiceAnswer from "./typeOfAnswer/SingleChoiceAnswer";
import SlideBarAnswer from "./typeOfAnswer/SlideBarAnswer";
import StarAnswer from "./typeOfAnswer/StarAnswer";
import NewAnswer from "./typeOfAnswer/NewAnswer";
import PhoneTurnAPageButtons from "./PhoneTurnAPageButtons";
import Consent from "./typeOfAnswer/Consent";

const Preview = () => {
  const questionType = useSelector(
    (state) => state.createForm?.selectedFormType
  );
  const currentPageNum = useSelector(
    (state) => state.createForm.currentPageNum
  );
  const questionTitle = useSelector(
    (state) =>
      state.createForm.formList?.questionList?.length !== 0 &&
      questionType !== "COVER" &&
      questionType !== "NEW_FORM" &&
      state.createForm.formList?.questionList[currentPageNum - 2][
        "questionTitle"
      ]
  );
  const questionLength = useSelector(
    (state) => state.createForm.formList?.questionList
  )?.length;
  const questionSummary = useSelector(
    (state) =>
      state.createForm.formList?.questionList.length !== 0 &&
      questionType !== "COVER" &&
      questionType !== "NEW_FORM" &&
      state.createForm.formList?.questionList[currentPageNum - 2][
        "questionSummary"
      ]
  );

  return (
    <Container>
      <PointContext>🔥 현재 * 명이 설문을 참여 중입니다.</PointContext>
      {questionType !== "COVER" &&
        questionType !== "CONSENT" &&
        questionType !== "NEW_FORM" &&
        questionType !== undefined && (
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
      <MainContainer>
        {questionType === "COVER" && <CoverAnswer />}
        {questionType === "CONSENT" && <Consent />}
        {questionType === "SCORE" && <ScoreAnswer />}
        {questionType === "STAR" && <StarAnswer />}
        {questionType === "SINGLE_CHOICE" && <SingleChoiceAnswer />}
        {questionType === "MULTIPLE_CHOICE" && <MultipleChoiceAnswer />}
        {questionType === "SLIDE" && <SlideBarAnswer />}
        {questionType === "RANK" && <RankAnswer />}
        {questionType === "SHORT_DESCRIPTIVE" && <ShortDescriptiveAnswer />}
        {questionType === "LONG_DESCRIPTIVE" && <LongDescriptiveAnswer />}
        {questionType === undefined && <NewAnswer />}
      </MainContainer>

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
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 4.2rem;
  width: 100%;
  height: 100%;

  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.subColor1};

    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, 0.1);
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
  h1 {
    margin-top: 6.1rem 0 0 0;
    ${fonts.Body1}
    font-size: 2rem;
    padding: 0 3rem;
    word-break: break-all;
  }
  h5 {
    margin-top: 3rem;
    ${fonts.Body3}
    font-weight: 500;
    font-size: 1.4rem;
    padding: 0 3rem;
    word-break: break-all;
  }
`;

const MainContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
`;

const PointContext = styled.div`
  padding: 0.7rem;
  width: 22.7rem;

  ${fonts.Body1}
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.4rem;

  text-align: center;
  background: ${({ theme }) => theme.gray3};
  border-radius: 9.9rem;
`;

const ArrowButtonContainer = styled.div`
  width: 100%;
  padding-bottom: 5rem;
`;

export default Preview;

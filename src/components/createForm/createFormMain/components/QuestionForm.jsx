import React, { useState } from "react";
import styled from "styled-components";
import LongAndShortDescriptiveForm from "./questionTypesForm/LongAndShortDescriptiveForm";
import RankForm from "./questionTypesForm/RankForm";
import ScoreAndStarForm from "./questionTypesForm/ScoreAndStarForm";
import SingleAndMultiChoiceForm from "./questionTypesForm/SingleAndMultiChoiceForm";
import SlideBarForm from "./questionTypesForm/SlideBarForm";
import SurveyCoverForm from "./questionTypesForm/SurveyCoverForm";
import GroupForm from "./questionTypesForm/GroupForm";
import { useSelector } from "react-redux";
import NewForm from "./questionTypesForm/NewForm";

const QuestionForm = () => {
  const questionType = useSelector(
    (state) => state.createForm.selectedFormType
  );
  const test = useSelector((state) => state.createForm);
  console.log(test);

  return (
    <Container>
      {questionType === "Cover" && <SurveyCoverForm />}
      {(questionType === "Score" || questionType === "Star") && (
        <ScoreAndStarForm />
      )}
      {(questionType === "SingleChoice" ||
        questionType === "MultipleChoice") && <SingleAndMultiChoiceForm />}
      {questionType === "Slide" && <SlideBarForm />}

      {questionType === "Rank" && <RankForm />}
      {(questionType === "ShortDescriptive" ||
        questionType === "LongDescriptive") && <LongAndShortDescriptiveForm />}
      {questionType === "Group" && <GroupForm />}
      {(questionType === "NewForm" || questionType === undefined) && (
        <NewForm />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 50rem;
`;

export default QuestionForm;

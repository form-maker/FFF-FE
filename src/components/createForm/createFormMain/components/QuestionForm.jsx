import React, { useEffect } from "react";
import styled from "styled-components";
import LongAndShortDescriptiveForm from "./questionTypesForm/LongAndShortDescriptiveForm";
import RankForm from "./questionTypesForm/RankForm";
import ScoreAndStarForm from "./questionTypesForm/ScoreAndStarForm";
import SingleAndMultiChoiceForm from "./questionTypesForm/SingleAndMultiChoiceForm";
import SlideBarForm from "./questionTypesForm/SlideBarForm";
import SurveyCoverForm from "./questionTypesForm/SurveyCoverForm";
import { useSelector, useDispatch } from "react-redux";
import NewForm from "./questionTypesForm/NewForm";
import { getPrevForm } from "../../../../redux/modules/createFormSlice";

const QuestionForm = () => {
  const dispatch = useDispatch();
  const questionType = useSelector(
    (state) => state.createForm?.selectedFormType
  );
  let prevForm = localStorage.getItem("createForm");

  useEffect(() => {
    if (prevForm) {
      window.confirm("임시저장한 데이터를 불러오시겠습니까?")
        ? dispatch(getPrevForm(JSON.parse(prevForm)))
        : localStorage.removeItem("createForm");
    }
  }, []);

  return (
    <Container>
      {questionType === "COVER" && <SurveyCoverForm />}
      {(questionType === "SCORE" || questionType === "STAR") && (
        <ScoreAndStarForm />
      )}
      {(questionType === "SINGLE_CHOICE" ||
        questionType === "MULTIPLE_CHOICE") && <SingleAndMultiChoiceForm />}
      {questionType === "SLIDE" && <SlideBarForm />}

      {questionType === "RANK" && <RankForm />}
      {(questionType === "SHORT_DESCRIPTIVE" ||
        questionType === "LONG_DESCRIPTIVE") && <LongAndShortDescriptiveForm />}
      {(questionType === "NEW_FORM" || questionType === undefined) && (
        <NewForm />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default QuestionForm;

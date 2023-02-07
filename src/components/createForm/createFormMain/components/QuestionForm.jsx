import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { getPrevForm } from "../../../../redux/modules/createFormSlice";
import LongAndShortDescriptiveForm from "./questionTypesForm/LongAndShortDescriptiveForm";
import RankForm from "./questionTypesForm/RankForm";
import ScoreAndStarForm from "./questionTypesForm/ScoreAndStarForm";
import SingleAndMultiChoiceForm from "./questionTypesForm/SingleAndMultiChoiceForm";
import SlideBarForm from "./questionTypesForm/SlideBarForm";
import SurveyCoverForm from "./questionTypesForm/SurveyCoverForm";
import Consent from "./questionTypesForm/Consent";

const QuestionForm = () => {
  const dispatch = useDispatch();
  const questionType = useSelector(
    (state) => state.createForm?.selectedFormType
  );
  let prevForm = localStorage.getItem("create");

  useEffect(() => {
    if (prevForm) {
      window.confirm("임시저장한 데이터를 불러오시겠습니까?")
        ? dispatch(getPrevForm(JSON.parse(prevForm)))
        : localStorage.removeItem("create");
    }
  }, []);

  return (
    <Container>
      {questionType === "COVER" && <SurveyCoverForm />}
      {questionType === "CONSENT" && <Consent />}
      {(questionType === "SCORE" || questionType === "STAR") && (
        <ScoreAndStarForm />
      )}
      {(questionType === "SINGLE_CHOICE" ||
        questionType === "MULTIPLE_CHOICE") && <SingleAndMultiChoiceForm />}
      {questionType === "SLIDE" && <SlideBarForm />}

      {questionType === "RANK" && <RankForm />}
      {(questionType === "SHORT_DESCRIPTIVE" ||
        questionType === "LONG_DESCRIPTIVE") && <LongAndShortDescriptiveForm />}
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default QuestionForm;

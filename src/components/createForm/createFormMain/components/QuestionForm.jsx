import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LongAndShortDescriptiveForm from "./questionTypesForm/LongAndShortDescriptiveForm";
import RankForm from "./questionTypesForm/RankForm";
import ScoreAndStarForm from "./questionTypesForm/ScoreAndStarForm";
import SingleAndMultiChoiceForm from "./questionTypesForm/SingleAndMultiChoiceForm";
import SlideBarForm from "./questionTypesForm/SlideBarForm";
import SurveyCoverForm from "./questionTypesForm/SurveyCoverForm";
// import GroupForm from "./questionTypesForm/GroupForm";
import { useSelector, useDispatch } from "react-redux";
import NewForm from "./questionTypesForm/NewForm";
import { baseURLApi } from "../../../../core/api";
import { useNavigate } from "react-router-dom";

const QuestionForm = () => {
  const navigate = useNavigate();
  const questionType = useSelector(
    (state) => state.createForm.selectedFormType
  );
  const test = useSelector((state) => state.createForm);
  console.log(test);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const { data } = await baseURLApi.get("user");
        alert("로그인을 해주세요");
        !data.data && navigate("/");
      } catch (error) {
        console.log(error);
      }
    };
    checkToken();
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
      {/* {questionType === "Group" && <GroupForm />} */}
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

import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import CreateFormCard from "../../../createForm/createFormSide/components/CreateFormCard";

const StatsCategory = () => {
  const questionList = useSelector(
    (state) => state.stats.stats.questionStatsList
  );

  console.log(questionList);
  return (
    <SurveyListContainer>
      {questionList?.map((question, index) => (
        <CreateFormCard
          key={index}
          imgName={question.questionType}
          index={index}
          title={question.questionTitle}
        />
      ))}
    </SurveyListContainer>
  );
};

const SurveyListContainer = styled.div`
  width: 100%;
`;

export default StatsCategory;

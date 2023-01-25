import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import fonts from "../../../styles/fonts";

const Title = () => {
  const question = useSelector((state) => state.survey.question);
  return (
    <TitleContainer>
      <h1>{question.questionTitle}</h1>
      <h5>{question.questionSummary}</h5>
    </TitleContainer>
  );
};
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 0;
    ${fonts.Body1}
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.9rem;
  }
  h5 {
    margin-top: 4.6rem;
    ${fonts.Body3}
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
  }
`;

export default Title;

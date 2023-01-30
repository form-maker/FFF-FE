import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { fadeInFromLeftAnimation } from "../../../styles/animations";
import fonts from "../../../styles/fonts";

const Title = ({ marginTop }) => {
  const question = useSelector((state) => state.survey.question);
  return (
    <TitleContainer marginTop={marginTop}>
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
    ${fadeInFromLeftAnimation}
  }
  h5 {
    margin-top: ${({ marginTop }) => marginTop || "2rem"};
    ${fonts.Body3};
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
    ${fadeInFromLeftAnimation}
  }
  @media screen and (min-width: 500px) {
    h1 {
      font-size: 3rem;
    }
    h5:nth-of-type(1) {
      margin-top: 1.5rem;
      font-size: 2rem;
    }
  }
`;

export default Title;

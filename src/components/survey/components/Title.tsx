import React from "react";
import { useAppSelector } from "../../../redux/hooks";
import styled from "styled-components";

import { fadeInFromLeftAnimation } from "../../../styles/animations";
import fonts from "../../../styles/fonts";

const Title = ({ marginTop }: { marginTop: string }) => {
  const question = useAppSelector((state) => state.survey.question);
  console.log(question);


  return (
    <TitleContainer marginTop={marginTop}>
      <h1>
        {question.required ? <div>*</div> : <div></div>}
        {question.questionTitle}
      </h1>
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
    font-size: 2rem;
    text-align: center;
    ${fadeInFromLeftAnimation}
    div {
      height: 2.1rem;
      color: ${({ theme }) => theme.pointColor2};
    }
  }
  h5 {
    margin-top: ${({ marginTop }: { marginTop: string }) =>
      marginTop || "2rem"};
    ${fonts.Body3};
    font-weight: 500;
    font-size: 1.6rem;
    ${fadeInFromLeftAnimation}
  }
  @media screen and (min-width: 500px) {
    h1 {
      font-size: 2rem;
    }
    h5:nth-of-type(1) {
      margin-top: 0.2rem;
      font-size: 1.6rem;
    }
  }
`;

export default Title;

import React from "react";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";

const Title = ({
  questionType,
  questionNum,
  questionTitle,
  questionSummary,
}) => {
  return (
    <TitleContainer>
      <p>{questionType}</p>
      <h2>
        {questionNum}. {questionTitle}
      </h2>
      <h4>{questionSummary}</h4>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  p {
    margin: 0;
    ${fonts.Body3}
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.2rem;
  }
  h2 {
    margin: 0.6rem 0 0 0;
    ${fonts.Body1}
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.9rem;
  }
  h4 {
    margin: 0.7rem 0 0 0;
    ${fonts.Body3}
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;

export default Title;

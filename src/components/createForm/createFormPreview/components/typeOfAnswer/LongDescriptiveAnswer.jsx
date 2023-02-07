import React from "react";
import styled from "styled-components";

import fonts from "../../../../../styles/fonts";

const LongDescriptiveAnswer = () => {
  return (
    <Container>
      <textarea
        type="text"
        placeholder="500자 이내로 작성해주세요"
        name="content"
        resize="none"
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;

  width: 100%;
  textarea {
    box-sizing: border-box;
    width: 26.4rem;
    height: 20rem;
    padding: 1rem;

    ${fonts.Body1}
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.7rem;

    resize: none;
    border-radius: 1rem;
    scroll-behavior: auto;

    background-color: transparent;
    color: gray;
    border: ${({ theme }) => `2px solid ${theme.subColor1}`};
    text-align: center;

    &::placeholder {
      color: gray;
    }
    div {
      display: flex;
    }
  }
`;

export default LongDescriptiveAnswer;

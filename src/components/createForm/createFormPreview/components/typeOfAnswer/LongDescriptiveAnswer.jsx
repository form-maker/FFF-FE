import React from "react";
import styled from "styled-components";

import fonts from "../../../../../styles/fonts";

const LongDescriptiveAnswer = () => {
  return (
    <Container>
      <textarea
        type="text"
        placeholder="꼼꼼하게 작성해주세요"
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

  width: 100%;
  textarea {
    box-sizing: border-box;
    width: 26.4rem;
    height: 23.7rem;
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

    &::placeholder {
      color: gray;
    }
    div {
      display: flex;
    }
  }
`;

export default LongDescriptiveAnswer;

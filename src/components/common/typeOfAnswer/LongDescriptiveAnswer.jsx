import React from "react";
import styled from "styled-components";
import fonts from "../../../styles/fonts";

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
  width: 100%;
  display: flex;
  margin-top: 5rem;
  justify-content: center;
  align-items: center;
  textarea {
    box-sizing: border-box;
    width: 26.4rem;
    height: 23.7rem;
    padding: 1rem;
    resize: none;

    font-size: 18px;
    background-color: transparent;
    color: gray;
    border: ${({ theme }) => `2px solid ${theme.subColor1}`};

    border-radius: 1rem;
    scroll-behavior: auto;

    ${fonts.Body1}
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.7rem;

    &::placeholder {
      color: gray;
    }
    div {
      display: flex;
    }
  }
`;

export default LongDescriptiveAnswer;

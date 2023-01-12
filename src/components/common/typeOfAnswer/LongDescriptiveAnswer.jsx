import React from "react";
import styled from "styled-components";

const LongDescriptiveAnswer = () => {
  return (
    <Container>
      <textarea
        type="text"
        placeholder="꼼꼼하게 답해주세요"
        name="content"
        // value={form?.content}
        // onChange={onChangeHandler}
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
    background-color: transparent;
    color: gray;
    width: 100%;
    border: 1px solid black;
    font-size: 18px;
    resize: none;
    min-height: 20rem;
    scroll-behavior: auto;
    &::placeholder {
      color: gray;
    }
    div {
      display: flex;
    }
  }
`;

export default LongDescriptiveAnswer;

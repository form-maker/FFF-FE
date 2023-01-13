import React from "react";
import styled from "styled-components";

const ShortDescriptiveAnswer = () => {
  return (
    <Container>
      <input placeholder="한문장으로 작성해주세요" />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 5rem;
  justify-content: center;
  align-items: center;
  input {
    font-size: 1.4rem;
    border: none;
    width: 51.5rem;
    margin-top: 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.fontColor};
  }
`;

export default ShortDescriptiveAnswer;

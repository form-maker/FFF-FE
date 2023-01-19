import React from "react";
import styled from "styled-components";
import fonts from "../../../styles/fonts";

const NewAnswer = () => {
  return (
    <Container>
      <h2>새로운 설문을 추가해 주세요</h2>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    ${fonts.Body3}
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
  }
`;

export default NewAnswer;

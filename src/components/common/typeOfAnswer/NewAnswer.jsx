import React from "react";
import styled from "styled-components";

const NewAnswer = () => {
  return (
    <Container>
      <h2>
        좌측 상단의 네비게이션 바를 클릭하여 작성하고자 하는 양식을 선택해주세요
      </h2>
      <h1>+</h1>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 15rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default NewAnswer;

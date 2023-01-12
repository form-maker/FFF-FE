import React from "react";
import styled from "styled-components";

const NewForm = () => {
  return (
    <Container>
      <h1>
        좌측 상단의 네비게이션 바를 클릭하여 작성하고자 하는 양식을 선택해주세요
      </h1>
      <h1>+</h1>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default NewForm;

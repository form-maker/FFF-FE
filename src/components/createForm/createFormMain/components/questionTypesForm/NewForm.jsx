import React from "react";
import styled from "styled-components";
import fonts from "../../../../../styles/fonts";

const NewForm = () => {
  return (
    <Container>
      <h1>새로운 설문 추가하기</h1>
      <h5>위 토글버튼을 눌러 설문 유형을 확인해주세요</h5>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    ${fonts.Body1}
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.9rem;
    margin: 0;
  }
  h5 {
    ${fonts.Body3}
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
    margin: 0;
    margin-top: 4.9rem;
  }
`;

export default NewForm;

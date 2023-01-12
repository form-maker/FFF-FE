import React from "react";
import styled from "styled-components";

const CreateFormQuestionTypeCard = ({ questionType, onClick }) => {
  return <Container onClick={onClick}>{questionType}</Container>;
};

const Container = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.mainColor};
  cursor: pointer;
`;

export default CreateFormQuestionTypeCard;

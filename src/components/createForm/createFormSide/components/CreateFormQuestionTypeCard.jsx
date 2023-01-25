import React from "react";
import styled from "styled-components";

const CreateFormQuestionTypeCard = ({ questionType, onClick }) => {
  return <Container onClick={onClick}>{questionType}</Container>;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 10rem;
  height: 10rem;

  background: ${({ theme }) => theme.mainColor};
  border-radius: 1rem;
  cursor: pointer;
`;

export default CreateFormQuestionTypeCard;

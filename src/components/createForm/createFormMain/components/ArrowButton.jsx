import React from "react";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";

const ArrowButton = ({ buttonText, onClick }) => {
  return <Container onClick={onClick}>{buttonText}</Container>;
};

const Container = styled.div`
  width: 5rem;
  height: 5rem;
  ${fonts.Body1}
  background: ${({ theme }) => theme.mainColor};

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2.5rem;

  cursor: pointer;
`;

export default ArrowButton;

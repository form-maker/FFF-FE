import React from "react";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";

const RoundButtonLarge = ({ buttonValue, margin, onClick }) => {
  return (
    <Button margin={margin} onClick={onClick}>
      {buttonValue}
    </Button>
  );
};

const Button = styled.button`
  padding: 0.4rem 1.5rem;
  ${fonts.Body2}
  border: ${({ theme }) => `2px solid ${theme.subColor}`};
  border-radius: 2rem;
  background: transparent;
  margin: ${({ margin }) => margin || "0 1rem"};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.subColor};
    color: ${({ theme }) => theme.backgroundColor};
  }
`;

export default RoundButtonLarge;

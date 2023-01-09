import React from "react";
import styled from "styled-components";

const RoundButtonSmall = ({
  buttonValue,
  fontSize,
  fontWeight,
  margin,
  onClick,
}) => {
  return (
    <Button
      fontSize={fontSize}
      fontWeight={fontWeight}
      margin={margin}
      onClick={onClick}
    >
      {buttonValue}
    </Button>
  );
};

const Button = styled.button`
  font-size: ${({ fontSize }) => fontSize || "0.6rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "500"};
  padding: 0.4rem 1rem;
  border: ${({ theme }) => `1px solid ${theme.mainColor}`};
  border-radius: 2rem;
  background: transparent;
  margin: ${({ margin }) => margin || "0.5rem 1.6rem"};
  cursor: pointer;
  z-index: 1;
  &:hover {
    background-color: ${({ theme }) => theme.mainColor};
    color: ${({ theme }) => theme.backgroundColor};
  }
`;

export default RoundButtonSmall;

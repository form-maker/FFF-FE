import React from "react";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";

const RoundButtonMedium = ({
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
  ${fonts.Body2}
  padding: 0.4rem 1rem;
  border: ${({ theme }) => `1px solid ${theme.mainColor}`};
  border-radius: 2rem;
  background: transparent;
  margin: ${({ margin }) => margin || "0.5rem 1.6rem"};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.mainColor};
    color: ${({ theme }) => theme.backgroundColor};
  }
`;

export default RoundButtonMedium;

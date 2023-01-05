import React from "react";
import styled from "styled-components";

const RoundButton = ({
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
  border: 1px solid black;
  border-radius: 2rem;
  background: transparent;
  margin: ${({ margin }) => margin || "0"};
  &:hover {
    background-color: black;
    color: white;
  }
`;

export default RoundButton;

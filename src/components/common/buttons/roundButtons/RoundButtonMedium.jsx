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
  ${fonts.Body1}
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  padding: 0.8rem 1.9rem;
  border: ${({ theme }) => `1px solid ${theme.mainColor}`};
  border-radius: 1.6rem;
  background: ${({ theme }) => theme.backgroundColor};
  margin: ${({ margin }) => margin || "0.5rem 1.6rem"};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.hoverColor};
  }
`;

export default RoundButtonMedium;

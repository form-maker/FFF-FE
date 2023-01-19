import React from "react";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";

const RoundButtonMedium = ({
  buttonValue,
  fontSize,
  fontWeight,
  margin,
  onClick,
  background,
  height,
  borderRadius,
}) => {
  return (
    <Button
      fontSize={fontSize}
      fontWeight={fontWeight}
      margin={margin}
      onClick={onClick}
      background={background}
      height={height}
      borderRadius={borderRadius}
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
  display: flex;
  justify-content: center;
  height: ${({ height }) => height};
  align-items: center;
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius || "1.6rem"};
  background: ${({ theme, background }) =>
    theme[background] || theme.backgroundColor};
  margin: ${({ margin }) => margin || "0.5rem 1.6rem"};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.subHoverColor1};
  }
`;

export default RoundButtonMedium;

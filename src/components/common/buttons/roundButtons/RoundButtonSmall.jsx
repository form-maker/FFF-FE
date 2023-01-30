import React from "react";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";

const RoundButtonSmall = ({
  buttonValue,
  fontSize,
  fontWeight,
  margin,
  onClick,
  background,
}) => {
  return (
    <Button
      fontSize={fontSize}
      fontWeight={fontWeight}
      margin={margin}
      onClick={onClick}
      background={background}
    >
      {buttonValue}
    </Button>
  );
};

const Button = styled.button`
  ${fonts.Body1}
  font-size: ${({ fontSize }) => fontSize || "1.2rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
  padding: 0.6rem 1.6rem;
  border: ${({ theme }) => `2px solid ${theme.subColor1}`};
  border-radius: 2rem;
  background: ${({ background, theme }) => theme[background] || "transparent"};
  margin: ${({ margin }) => margin || "0"};
  cursor: pointer;
  z-index: 1;
  &:hover {
    background-color: ${({ theme }) => theme.subColor1};
  }
  @media screen and (max-width: 500px) {
    padding: 0.4rem 1.2rem;
    margin: 0.2rem;
  }
`;

export default RoundButtonSmall;

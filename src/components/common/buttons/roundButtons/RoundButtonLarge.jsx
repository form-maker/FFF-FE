import React from "react";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";

const RoundButtonLarge = ({
  buttonValue,
  margin,
  onClick,
  width,
  backgroundColor,
  hoverColor,
}) => {
  return (
    <Button
      onClick={onClick}
      width={width}
      margin={margin}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
    >
      {buttonValue}
    </Button>
  );
};

const Button = styled.button`
  ${fonts.Body1}
  height: 5.2rem;
  width: ${({ width }) => width};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.9rem;
  border-radius: 2.6rem;
  background: transparent;
  background: ${({ theme, backgroundColor }) =>
    theme[backgroundColor] || theme.subColor1};
  border: none;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.subHoverColor1};
  }
  & + * {
    margin-top: 1.3rem;
  }
`;

export default RoundButtonLarge;

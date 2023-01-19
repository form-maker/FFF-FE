import React from "react";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";

const RoundButtonMediumWide = ({
  buttonValue,
  width,
  margin,
  onClick,
  background,
  hoverBackground,
}) => {
  return (
    <Button
      margin={margin}
      onClick={onClick}
      background={background}
      hoverBackground={hoverBackground}
      width={width}
    >
      {buttonValue}
    </Button>
  );
};
const Button = styled.button`
  width: ${({ width }) => width || "100%"};
  border: none;
  border-radius: 1.6rem;
  background: ${({ theme, background }) =>
    theme[background] || theme.backgroundColor};
  ${fonts.Body1}
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.7rem;
  padding: 1.1rem 1.9rem;

  cursor: pointer;
  &:hover {
    background: ${({ theme, hoverBackground }) =>
      theme[hoverBackground] || theme.subHoverColor1};
  }

  & + & {
    margin-top: 1.7rem;
  }
`;

export default RoundButtonMediumWide;

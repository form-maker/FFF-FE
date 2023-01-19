import React from "react";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";

const NoOutLineLarge = ({ buttonValue, onClick, font }) => {
  return (
    <Button onClick={onClick} font={font}>
      {buttonValue}
    </Button>
  );
};

const Button = styled.button`
  ${fonts.H2}
  ${({ font }) => font}
  font-size: ${({ fontSize }) => fontSize || "1.5rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "500"};
  /* padding: 0.5rem 1rem; */
  border: none;
  background: transparent;
`;

export default NoOutLineLarge;

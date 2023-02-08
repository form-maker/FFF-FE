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
  ${({ font }) => fonts[font] || fonts.H2}
  font-size: ${({ fontSize }) => fontSize || "1.5rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "500"};

  border: none;
  background: transparent;
`;

export default NoOutLineLarge;

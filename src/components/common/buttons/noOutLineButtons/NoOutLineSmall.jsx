import React from "react";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";

const NoOutLineSmall = ({ buttonValue, onClick, font, fontSize }) => {
  return (
    <Button onClick={onClick} font={font} fontSize={fontSize}>
      {buttonValue}
    </Button>
  );
};

const Button = styled.button`
  ${({ font }) => fonts[font] || fonts.Body1}
  padding: 0.5rem 1rem;
  font-weight: 600;
  font-size: ${({ fontSize }) => fontSize || "1.5rem"};
  line-height: 1.8rem;
  border: none;
  background: transparent;
`;

export default NoOutLineSmall;

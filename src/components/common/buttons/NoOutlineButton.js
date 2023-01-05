import React from "react";
import styled from "styled-components";

const NoOutlineButton = ({ buttonValue, fontSize, fontWeight, onClick }) => {
  return (
    <Button fontSize={fontSize} fontWeight={fontWeight} onClick={onClick}>
      {buttonValue}
    </Button>
  );
};

const Button = styled.button`
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "500"};
  padding: 0.5rem 1rem;
  border: none;
  background: transparent;
`;

export default NoOutlineButton;

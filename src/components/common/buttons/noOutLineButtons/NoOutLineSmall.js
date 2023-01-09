import React from "react";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";

const NoOutLineSmall = ({ buttonValue, onClick, font }) => {
  return (
    <Button onClick={onClick} font={font}>
      {buttonValue}
    </Button>
  );
};

const Button = styled.button`
  ${fonts.Body2}
  padding: 0.5rem 1rem;
  border: none;
  background: transparent;
`;

export default NoOutLineSmall;

import React from "react";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";

const NoOutLineMedium = ({ buttonValue, onClick }) => {
  return <Button onClick={onClick}>{buttonValue}</Button>;
};

const Button = styled.button`
  ${fonts.H4}
  padding: 0.5rem 1rem;
  border: none;
  background: transparent;
`;

export default NoOutLineMedium;

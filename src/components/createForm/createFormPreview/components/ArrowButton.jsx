import React from "react";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";

const ArrowButton = ({ buttonText }) => {
  return <img>{buttonText}</img>;
};

const Container = styled.div`
  width: 5rem;
  height: 5rem;
  ${fonts.Body1}

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2.5rem;
`;

export default ArrowButton;

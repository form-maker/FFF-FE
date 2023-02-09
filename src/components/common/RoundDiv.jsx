import React from "react";
import styled from "styled-components";

const RoundDiv = ({ text, backgroundColor, color }) => {
  return (
    <Container backgroundColor={backgroundColor} color={color}>
      {text}
    </Container>
  );
};

const Container = styled.div`
  padding: 0.4rem 0.9rem;
  margin: 0;

  background: ${({ theme, color }) => color || theme.subColor};
  color: ${({ theme, color }) => color || theme.backgroundColor};
  border-radius: 1rem;
`;

export default RoundDiv;

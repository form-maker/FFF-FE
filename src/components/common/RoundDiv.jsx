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
  background: ${({ theme, color }) => color || theme.subColor};
  color: ${({ theme, color }) => color || theme.backgroundColor};
  padding: 0.4rem 0.9rem;
  border-radius: 1rem;
  margin: 0;
`;

export default RoundDiv;

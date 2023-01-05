import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <h3>폼폼폼</h3>
      <p>김범준 안수빈 김형준 황보석 김동균</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem 0;
  width: 100%;
  min-width: 800px;
  max-width: 1200px;

  h3 {
    font-size: 0.9rem;
    margin: 0;
  }
  p {
    font-size: 0.8rem;
    margin: 0.2rem;
  }
`;

export default Footer;

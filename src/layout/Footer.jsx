import React from "react";
import styled from "styled-components";
import fonts from "../styles/fonts";

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

  padding: 4rem 0;
  width: 100%;
  min-width: 800px;
  max-width: 1200px;

  h3 {
    ${fonts.H4}
    margin: 0;
  }
  p {
    ${fonts.Body2}
    margin: 0.2rem;
  }
`;

export default Footer;

import React from "react";
import styled from "styled-components";

import fonts from "../styles/fonts";
const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <h3>폼폼폼</h3>
        <p>김범준 안수빈 김형준 황보석 김동균 이은진</p>
      </FooterContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  border-top: 1px solid #e1e1e1;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem 0;
  width: 100%;
  max-width: 1200px;

  h3 {
    margin: 0;
    ${fonts.H4}
  }
  p {
    margin: 0.2rem;
    ${fonts.Body2}
  }
`;

export default Footer;

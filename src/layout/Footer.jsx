import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <Container>footer</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem 0;
  width: 100%;
  min-width: 800px;
  max-width: 1200px;

  border-top: 2px solid black;
`;

export default Footer;

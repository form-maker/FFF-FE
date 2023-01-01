import React from "react";
import styled from "styled-components";

const Header = () => {
  return <Container>header</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2em 0;
  width: 100%;
  min-width: 800px;
  max-width: 1200px;

  border-bottom: 2px solid black;
`;

export default Header;

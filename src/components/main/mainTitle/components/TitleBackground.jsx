import React from "react";
import styled from "styled-components";

const TitleBackground = () => {
  return <Container></Container>;
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 55.1rem;

  background: ${({ theme }) => theme.subColor1};
  border-radius: 0px 0px 0px 142px;
  z-index: -2;
`;

export default TitleBackground;

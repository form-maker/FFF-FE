import React from "react";
import styled from "styled-components";

const CreateFormContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;

  background-color: ${({ theme }) => theme.backgroundColor2};
`;

export default CreateFormContainer;

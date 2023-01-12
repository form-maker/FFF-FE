import React from "react";
import styled from "styled-components";
import Preview from "./Preview";

const CreateFormMobile = () => {
  return (
    <Container>
      <Preview />
    </Container>
  );
};
const Container = styled.div`
  width: 39.1rem;
  height: 87.8rem;
  border: 1px solid #000000;
  box-shadow: 0.4rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 44.0996px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CreateFormMobile;

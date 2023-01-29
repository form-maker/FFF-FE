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
  display: flex;
  justify-content: center;
  align-items: center;

  width: 35.6rem;
  height: 100%;

  box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.25);
  border-radius: 44px;
`;

export default CreateFormMobile;

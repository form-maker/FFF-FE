import React from "react";
import styled from "styled-components";
import CreateFormMobile from "../components/CreateFormMobile";

const CreateFormPreviewScreen = () => {
  return (
    <Container>
      <CreateFormMobile />
    </Container>
  );
};

const Container = styled.div`
  width: 50rem;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export default CreateFormPreviewScreen;

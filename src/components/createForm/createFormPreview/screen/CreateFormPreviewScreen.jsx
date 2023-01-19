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
  width: 35.6rem;
`;

export default CreateFormPreviewScreen;

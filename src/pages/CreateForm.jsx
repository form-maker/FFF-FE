import React from "react";
import styled from "styled-components";
import CreateFromMainScreen from "../components/createForm/createFormMain/screen/CreateFromMainScreen";
import CreateFormPreviewScreen from "../components/createForm/createFormPreview/screen/CreateFormPreviewScreen";
import CreateFormSideScreen from "../components/createForm/createFormSide/screen/CreateFormSideScreen";

const CreateForm = () => {
  return (
    <Container>
      <CreateFormSideScreen />
      <CreateFromMainScreen />
      <CreateFormPreviewScreen />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

export default CreateForm;

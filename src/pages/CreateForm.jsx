import React from "react";
import styled from "styled-components";
import CreateFormHeaderScreen from "../components/createForm/createFormHeader/screen/CreateFormHeaderScreen";
import CreateFormMainScreen from "../components/createForm/createFormMain/screen/CreateFormMainScreen";
import CreateFormPreviewScreen from "../components/createForm/createFormPreview/screen/CreateFormPreviewScreen";
import CreateFormSideScreen from "../components/createForm/createFormSide/screen/CreateFormSideScreen";
import CreateFormContainer from "../components/createForm/createFormContainer/CreateFormContainer";
import Header from "../layout/Header";

const CreateForm = () => {
  return (
    <Container>
      <Header />
      <CreateFormHeaderScreen />
      <CreateFormContainer>
        <FormCreateContainer>
          <CreateFormSideScreen />
          <CreateFormMainScreen />
          <CreateFormPreviewScreen />
        </FormCreateContainer>
      </CreateFormContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const FormCreateContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 77.3rem;
  width: 139.1rem;
  border-radius: 0px 4.4rem 4.4rem 0rem;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export default CreateForm;

import React from "react";
import styled from "styled-components";

import Header from "../layout/Header";
import CreateFormHeaderScreen from "../components/createForm/createFormHeader/screen/CreateFormHeaderScreen";
import CreateFormMainScreen from "../components/createForm/createFormMain/screen/CreateFormMainScreen";
import CreateFormPreviewScreen from "../components/createForm/createFormPreview/screen/CreateFormPreviewScreen";
import CreateFormSideScreen from "../components/createForm/createFormSide/screen/CreateFormSideScreen";
import CreateFormContainer from "../components/createForm/createFormContainer/CreateFormContainer";
import CanNotBeUsedForMobile from "../components/common/canNotBeUsedForMobile/CanNotBeUsedForMobile";

const CreateForm = () => {
  return (
    <Container>
      <Header />
      <Mobile>
        <CanNotBeUsedForMobile pageText="폼 제작하기" />
      </Mobile>
      <DeskTop>
        <CreateFormHeaderScreen />
        <CreateFormContainer>
          <FormCreateContainer>
            <CreateFormSideScreen />
            <CreateFormMainScreen />
            <CreateFormPreviewScreen />
          </FormCreateContainer>
        </CreateFormContainer>
      </DeskTop>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  @media screen and (max-width: 500px) {
    justify-content: center;
    align-items: center;
  }
`;

const FormCreateContainer = styled.div`
  display: flex;
  flex-direction: row;

  height: 93%;
  width: 100%;
  min-width: 800px;
  max-width: 1200px;

  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 0px 4.4rem 4.4rem 0rem;
`;

const Mobile = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 500px) {
    display: none;
  }
`;

const DeskTop = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export default CreateForm;

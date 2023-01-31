import React from "react";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";

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
  ${fonts.Body1}
`;

export default CreateFormPreviewScreen;

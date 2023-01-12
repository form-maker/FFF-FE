import React from "react";
import styled from "styled-components";

const CreateFormNavigationIcon = () => {
  return (
    <Container>
      <div></div>
    </Container>
  );
};

const Container = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  background: ${({ theme }) => theme.mainColor};
  position: absolute;
  left: 5rem;
  top: 3rem;
  border-radius: 0.3rem;
`;

export default CreateFormNavigationIcon;

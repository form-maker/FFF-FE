import React from "react";
import styled from "styled-components";

const GroupForm = () => {
  return (
    <Container>
      <TitleInput placeholder="시작 될 주제를 작성해 주세요"></TitleInput>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 15rem;
`;

const TitleInput = styled.input`
  font-size: 3rem;
  width: 50rem;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.fontColor};
`;

export default GroupForm;

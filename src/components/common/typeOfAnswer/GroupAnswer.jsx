import React from "react";
import styled from "styled-components";

const GroupAnswer = () => {
  return (
    <Container>
      <Header>
        <h1>시작 될 주제를 작성해 주세요</h1>
      </Header>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  margin-top: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default GroupAnswer;

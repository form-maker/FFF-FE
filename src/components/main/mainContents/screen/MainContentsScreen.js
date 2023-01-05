import React from "react";
import styled from "styled-components";
import RoundButton from "../../../common/buttons/RoundButton";
import CardList from "../components/CardList";

const MainContentsScreen = () => {
  return (
    <Container>
      <TitleContainer>
        <h1>현재 진행중인 폼</h1>
        <div>
          <RoundButton buttonValue="최신순" />
          <RoundButton buttonValue="마감 임박순" margin="0 0.5rem 0 0.5rem" />
          <RoundButton buttonValue="달성순" />
        </div>
      </TitleContainer>

      <CardList />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  div {
    margin-top: 1rem;
  }
`;

const TitleContainer = styled.div`
  margin: 0 1rem;
  h1 {
    font-size: 1.2rem;
  }
  div {
    margin-top: 1rem;
  }
`;

export default MainContentsScreen;

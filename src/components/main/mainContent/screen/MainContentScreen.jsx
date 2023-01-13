import React from "react";
import styled from "styled-components";
import RoundButtonSmall from "../../../common/buttons/roundButtons/RoundButtonSmall";
import CardList from "../components/CardList";

const MainContentScreen = () => {
  return (
    <Container>
      <MainCardContainer>
        <h1>현재 진행중인</h1>
        <div>
          <RoundButtonSmall buttonValue="최신순" margin="0 0.5rem 0 0 " />
          <RoundButtonSmall
            buttonValue="마감 임박순"
            margin="0 0.5rem 0 0.5rem"
          />
          <RoundButtonSmall buttonValue="달성순" margin=" 0 0 0.5rem" />
        </div>
      </MainCardContainer>
      <CardContainer>
        <CardList />
      </CardContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  width: 97.3rem;
  margin: 4.4rem 0 0 0;
  h1 {
    font-size: 1.7rem;
    margin: 0;
  }
`;

const CardContainer = styled.div`
  margin-top: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default MainContentScreen;

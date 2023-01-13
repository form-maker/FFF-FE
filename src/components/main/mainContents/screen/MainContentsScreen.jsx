import React from "react";
import styled from "styled-components";
import RoundButtonMedium from "../../../common/buttons/roundButtons/RoundButtonMedium";
import CardList from "../components/CardList";

const MainContentsScreen = () => {
  return (
    <Container>
      <MainCardContainer>
        <h1>현재 진행중</h1>
        <div>
          <RoundButtonMedium buttonValue="최신순" margin="1rem 0.5rem 0 0 " />
          <RoundButtonMedium
            buttonValue="마감 임박순"
            margin="1rem 0.5rem 0 0.5rem"
          />
          <RoundButtonMedium buttonValue="달성순" margin="1rem 0 0 0.5rem" />
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
  justify-content: center;
`;

const MainCardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 97.3rem;
  margin: 7rem 1rem 2rem 0rem;
  h1 {
    font-size: 1.7rem;
    margin: 0;
  }
`;

const CardContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default MainContentsScreen;

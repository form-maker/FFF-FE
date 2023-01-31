import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { createFormInitialize } from "../../../../redux/modules/createFormSlice";
import fonts from "../../../../styles/fonts";
import CardList from "../components/CardList";
import Sort from "../components/Sort";

const MainContentScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createFormInitialize());
  }, [dispatch]);

  return (
    <Container>
      <MainCardContainer>
        <h1>현재 진행중인 폼</h1>
        <Sort />
      </MainCardContainer>
      <CardContainer>
        <CardList />
      </CardContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${fonts.Body1}
`;

const MainCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 4.6rem 4.1rem 0 4.1rem;
  h1 {
    ${fonts.Body1}
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.4rem;
    margin: 0;
  }

  @media screen and (max-width: 500px) {
    width: 85%;
    padding: 3rem 0 3rem 0;
    h1 {
      font-size: 1.5rem;
    }
  }
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4.4rem;
  margin-bottom: 6rem;
  @media screen and (max-width: 500px) {
    margin: 0rem 0 1rem 0;
    width: 85%;
  }
`;

export default MainContentScreen;

import React from "react";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";
import RoundButtonSmall from "../../../common/buttons/roundButtons/RoundButtonSmall";
import CardList from "../components/CardList";
import { useDispatch } from "react-redux";
import { __getMainCardList } from "../../../../redux/modules/mainCardListSlice";

const MainContentScreen = () => {
  const dispatch = useDispatch();

  const getCategoryHandler = ({ page, size, sortBy }) => {
    dispatch(__getMainCardList({ page: page, size: size, sortBy: sortBy }));
  };

  return (
    <Container>
      <MainCardContainer>
        <h1>현재 진행중인 폼</h1>
        <div>
          <RoundButtonSmall
            buttonValue="최신순"
            margin="0 0.6rem 0 0 "
            onClick={() => {
              getCategoryHandler({ page: 1, size: 9, sortBy: "최신순" });
            }}
          />
          <RoundButtonSmall
            buttonValue="마감 임박순"
            margin="0 0.6rem 0 0.6rem"
            onClick={() => {
              getCategoryHandler({ page: 1, size: 9, sortBy: "마감임박순" });
            }}
          />
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
  padding: 4.6rem 4.1rem 0 4.1rem;
  h1 {
    ${fonts.Body1}
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.4rem;
    margin: 0;
  }
`;

const CardContainer = styled.div`
  margin-top: 4.4rem;
  display: flex;
  align-items: center;
`;

export default MainContentScreen;

import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { __getMainCardList } from "../../../../redux/modules/mainCardListSlice";

import styled from "styled-components";
import MainSurveySummeryCard from "./MainSurveySummeryCard";
import { useNavigate } from "react-router-dom";
import fonts from "../../../../styles/fonts";
import InfiniteScroll from "./InfiniteScroll";

const CardList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mainCardList = useSelector((state) => state.mainCardList?.mainCardList);

  useEffect(() => {
    if (mainCardList?.length === 0) {
      console.log("첫 포스팅 로딩");
      dispatch(__getMainCardList({ page: 1, size: 9, sortBy: "최신순" }));
    }
  }, [dispatch, mainCardList?.length]);

  const goSurveyHandler = async ({ surveyId }) => {
    navigate(`/survey?surveyId=${surveyId}`);
  };

  return (
    <Container>
      {mainCardList?.length === 0 && <h3>현재 진행중인 폼이 없습니다</h3>}

      <SurveyContainer>
        {mainCardList?.map((card) => {
          return (
            <MainSurveySummeryCard
              key={card.surveyId}
              deadLine={card.dday}
              title={card.title}
              summary={card.summary}
              createdAt={card.createdAt}
              participant={card.participant}
              totalQuestion={card.totalQuestion}
              totalTime={card.totalTime}
              giftName={card.giftName}
              totalGiftQuantity={card.totalGiftQuantity}
              onClick={() => {
                goSurveyHandler({ surveyId: card.surveyId });
              }}
            />
          );
        })}
        <InfiniteScroll />
      </SurveyContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const SurveyContainer = styled.div`
  display: grid;
  grid-row-gap: 3rem;
  grid-column-gap: 2.4rem;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;

  width: 100%;
  margin-bottom: 3rem;

  @media screen and (max-width: 500px) {
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default memo(CardList);

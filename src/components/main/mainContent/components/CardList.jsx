import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { __getMainCardList } from "../../../../redux/modules/mainCardListSlice";

import styled from "styled-components";
import MainSurveySummeryCard from "./MainSurveySummeryCard";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import fonts from "../../../../styles/fonts";

const CardList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ref, inView] = useInView();
  const mainCardList = useSelector((state) => state.mainCardList?.mainCardList);
  const page = useSelector((state) => state.mainCardList?.pageStatus);
  const selectedCategory = useSelector(
    (state) => state.mainCardList?.selectedCategory
  );

  useEffect(() => {
    if (mainCardList?.length === 0) {
      console.log("첫 포스팅 로딩");
      dispatch(__getMainCardList({ page: 1, size: 9, sortBy: "최신순" }));
    }
  }, [dispatch, mainCardList?.length]);

  useEffect(() => {
    if (mainCardList?.length !== 0 && page?.next && inView) {
      console.log("첫 로딩 이후 무한 스크롤");
      dispatch(
        __getMainCardList({
          page: page?.page + 1,
          size: 9,
          sortBy: selectedCategory,
        })
      );
    }
  }, [
    inView,
    mainCardList?.length,
    page?.next,
    page?.page,
    selectedCategory,
    dispatch,
  ]);

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
        <div ref={ref}></div>
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
  h3 {
    margin: 10rem;
    ${fonts.Body6}
    font-size: 3rem;
  }
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

export default CardList;

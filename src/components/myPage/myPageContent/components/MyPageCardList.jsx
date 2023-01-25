import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { __getMyPageCardList } from "../../../../redux/modules/myPageListSlice";
import RoundButtonSmall from "../../../common/buttons/roundButtons/RoundButtonSmall";
import MySurveySummeryCard from "./MySurveySummeryCard";
import Sort from "./Sort";

const MyPageCardList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const myPageCardList = useSelector(
    (state) => state.myPageCardList.myPageCardList.pageData?.contents
  );
  const selectedCategory = useSelector(
    (state) => state.myPageCardList?.selectedCategory
  );
  const status = useSelector((state) => state.myPageCardList.status);

  useEffect(() => {
    dispatch(
      __getMyPageCardList({
        page: 1,
        size: 9,
        sortBy: "최신순",
        status: "IN_PROCEED",
      })
    );
  }, [dispatch]);

  const getCategoryHandler = ({ page, size, sortBy }) => {
    dispatch(
      __getMyPageCardList({
        page: page,
        size: size,
        sortBy: sortBy,
        status: status,
      })
    );
  };

  return (
    <Container>
      <Background />
      <SortContainer>
        <Sort />
      </SortContainer>
      <SurveyContainer>
        {myPageCardList?.length === 0 ? (
          <>
            <BlankContainer>
              <h1>첫 폼을 제작해보세요</h1>
            </BlankContainer>
          </>
        ) : (
          myPageCardList?.map((card) => {
            return (
              <MySurveySummeryCard
                key={card.surveyId}
                surveyId={card.surveyId}
                title={card.title}
                createdAt={card.createdAt}
                participant={card.participant}
                achievement={card.achievement}
                status={card.status}
                achievementRate={card.achievementRate}
                totalQuestion={card.totalQuestion}
                onClick={() => {
                  navigate(`/stats/${card.surveyId}`);
                }}
              />
            );
          })
        )}
      </SurveyContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
`;

const Background = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  width: 100vw;
  height: 100%;

  background: ${({ theme }) => theme.backgroundColor2};
  z-index: -1;
`;

const SortContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2.4rem 0 2.5rem 0;
`;

const BlankContainer = styled.div``;

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  align-items: center;
  justify-items: center;
`;

export default MyPageCardList;

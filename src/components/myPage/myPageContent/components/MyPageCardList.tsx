import React, { useEffect } from "react";
import { batch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";

import { __getMyPageCardList } from "../../../../redux/modules/myPageListSlice";
import MySurveySummeryCard from "./MySurveySummeryCard";
import Sort from "./Sort";

const MyPageCardList = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const myPageCardList = useAppSelector(
    (state) => state.myPageCardList.myPageCardList?.pageData?.contents
  );
  const loginError = useAppSelector((state) => state.myPageCardList?.error);

  useEffect(() => {
    dispatch(
      __getMyPageCardList({
        page: 1,
        size: 9,
        sortBy: "최신순",
        status: "IN_PROCEED",
      })
    );
    loginError &&
      batch(() => {
        Swal.fire({
          text: "로그인을 해주세요",
          confirmButtonColor: "#7AB0FE",
          confirmButtonText: "확인",
        });
        navigate("/login");
      });
  }, [loginError, dispatch, navigate]);

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
  height: 100%;
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

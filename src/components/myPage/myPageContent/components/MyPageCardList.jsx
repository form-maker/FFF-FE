import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { __getMyPageCardList } from "../../../../redux/modules/myPageListSlice";
import RoundButtonSmall from "../../../common/buttons/roundButtons/RoundButtonSmall";
import MySurveySummeryCard from "./MySurveySummeryCard";
import { useNavigate } from "react-router-dom";

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
  }, []);

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
      <ButtonContainer>
        <RoundButtonSmall
          buttonValue="최신순"
          margin="0 0.5rem 0 0"
          background={
            selectedCategory === "최신순" ? "subColor1" : "backgroundColor"
          }
          onClick={() => {
            getCategoryHandler({
              page: 1,
              size: 9,
              sortBy: "최신순",
              status: status,
            });
          }}
        />
        <RoundButtonSmall
          buttonValue="마감 임박순"
          margin="0 0.5rem 0 0.5rem"
          background={
            selectedCategory === "마감임박순" ? "subColor1" : "backgroundColor"
          }
          onClick={() => {
            getCategoryHandler({
              page: 1,
              size: 9,
              sortBy: "마감임박순",
              status: status,
            });
          }}
        />
        <RoundButtonSmall
          buttonValue="참여순"
          margin="0 0 0 0.5rem"
          background={
            selectedCategory === "참여자수" ? "subColor1" : "backgroundColor"
          }
          onClick={() => {
            getCategoryHandler({
              page: 1,
              size: 9,
              sortBy: "참여자수",
              status: status,
            });
          }}
        />
        <RoundButtonSmall
          buttonValue="달성순"
          margin="0 0 0 0.5rem"
          background={
            selectedCategory === "달성률" ? "subColor1" : "backgroundColor"
          }
          onClick={() => {
            getCategoryHandler({
              page: 1,
              size: 9,
              sortBy: "달성률",
              status: status,
            });
          }}
        />
      </ButtonContainer>
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

const ButtonContainer = styled.div`
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

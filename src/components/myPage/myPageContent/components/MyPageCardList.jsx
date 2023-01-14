import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { __getMyPageCardList } from "../../../../redux/modules/myPageListSlice";
import SurveySummeryCard from "../../../common/SurveySummeryCard";

const MyPageCardList = () => {
  const dispatch = useDispatch();
  const myPageCardList = useSelector(
    (state) => state.myPageCardList.myPageCardList.contents
  );

  console.log(myPageCardList);

  useEffect(() => {
    dispatch(__getMyPageCardList());
  }, [dispatch]);

  return (
    <Container>
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
              <SurveySummeryCard
                key={card.surveyId}
                deadLine={card.dday}
                title={card.title}
                summary={card.summary}
                createdAt={card.createdAt}
                participant={card.participant}
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
  justify-content: center;
  padding-top: 4rem;
`;

const BlankContainer = styled.div``;

const SurveyContainer = styled.div`
  width: 97.3rem;
  display: grid;
  grid-row-gap: 3rem;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 3rem;
  align-items: center;
  justify-items: center;
`;

export default MyPageCardList;

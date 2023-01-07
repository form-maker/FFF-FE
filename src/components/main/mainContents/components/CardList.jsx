import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { __getMainCardList } from "../../../../redux/modules/mainCardListSlice";

import styled from "styled-components";
import SurveySummeryCard from "../../../common/SurveySummeryCard";

const CardList = () => {
  const dispatch = useDispatch();
  const mainCardList = useSelector(
    (state) => state.mainCardList.mainCardList.contents
  );

  useEffect(() => {
    dispatch(__getMainCardList());
  }, [dispatch]);

  return (
    <Container>
      <SurveyContainer>
        {mainCardList?.map((card) => {
          return (
            <SurveySummeryCard
              key={card.surveyId}
              deadLine={card.deadLine}
              title={card.title}
              summary={card.summary}
              createdAt={card.createdAt.substr(0, 10)}
            />
          );
        })}
      </SurveyContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const SurveyContainer = styled.div`
  margin: 0 1rem;
  width: 100%;
  min-width: 800px;
  max-width: 1200px;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
`;

export default CardList;

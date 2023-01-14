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
              deadLine={card.dday}
              title={card.title}
              summary={card.summary}
              createdAt={card.createdAt}
              participant={card.participant}
            />
          );
        })}
      </SurveyContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SurveyContainer = styled.div`
  width: 97.3rem;
  display: grid;
  grid-row-gap: 3rem;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 3rem;
  align-items: center;
  justify-items: center;
`;

export default CardList;

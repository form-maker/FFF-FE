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

  console.log(mainCardList);

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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SurveyContainer = styled.div`
  width: 97.3rem;
  display: grid;
  grid-row-gap: 3rem;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 3rem;
`;

export default CardList;

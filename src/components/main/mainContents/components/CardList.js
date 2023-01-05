import React from "react";
import styled from "styled-components";
import SurveySummeryCard from "../../../common/SurveySummeryCard";

const CardList = () => {
  return (
    <Container>
      <SurveyContainer>
        <SurveySummeryCard />
        <SurveySummeryCard />
        <SurveySummeryCard />
        <SurveySummeryCard />
        <SurveySummeryCard />
        <SurveySummeryCard />
        <SurveySummeryCard />
        <SurveySummeryCard />
        <SurveySummeryCard />
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

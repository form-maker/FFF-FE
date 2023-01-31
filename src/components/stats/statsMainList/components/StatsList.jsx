import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { __getStats } from "../../../../redux/modules/statsSlice";
import Stats from "./Stats";
import DailyUserStatus from "./DailyUserStats";

const StatsList = () => {
  const dispatch = useDispatch();
  const { surveyId } = useParams();
  const statsList = useSelector((state) => state.stats.stats);

  useEffect(() => {
    dispatch(__getStats({ surveyId: surveyId, end: "", start: "" }));
  }, []);

  return (
    <Container>
      <DailyUserStatus />
      <GridContainer>
        {statsList?.questionStatsList?.map((stats) => (
          <Stats stats={stats} key={stats.questionNum} />
        ))}
      </GridContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 5rem 9rem 0 9rem;
  width: 100%;
`;

const GridContainer = styled.div`
  display: grid;
  grid-row-gap: 3rem;
  grid-template-columns: repeat(2, 1fr);

  margin-top: 5em;
  align-items: center;
  justify-items: center;

  width: 100%;
`;

export default StatsList;

import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { __getStats } from "../../../../redux/modules/statsSlice";
import Stats from "./Stats";
import DailyUserStatus from "./DailyUserStats";
import { useParams } from "react-router-dom";

const StatsList = () => {
  const { surveyId } = useParams();
  const dispatch = useDispatch();
  const statsList = useSelector((state) => state.stats.stats);

  console.log(surveyId);

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
  width: 100%;
  padding: 5rem 9rem 0 9rem;
`;

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-row-gap: 3rem;
  grid-template-columns: repeat(2, 1fr);

  margin-top: 5em;
  align-items: center;
  justify-items: center;
`;

export default StatsList;

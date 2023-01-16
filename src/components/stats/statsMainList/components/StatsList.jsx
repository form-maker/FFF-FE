import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { __getStats } from "../../../../redux/modules/statsSlice";
import Stats from "./Stats";

const StatsList = () => {
  const dispatch = useDispatch();
  const statsList = useSelector((state) => state.stats.stats);

  console.log(statsList);

  useEffect(() => {
    dispatch(__getStats());
  }, [dispatch]);

  return (
    <Container>
      {statsList?.questionStatsList?.map((stats) => (
        <Stats stats={stats} key={stats.questionNum} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-row-gap: 3rem;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 3rem;
  align-items: center;
  justify-items: center;
`;

export default StatsList;

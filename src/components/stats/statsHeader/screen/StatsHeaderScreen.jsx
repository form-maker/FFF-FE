import React, { useEffect } from "react";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";
import DailyUserStats from "../components/DailyUserStats";
import { useSelector, useDispatch } from "react-redux";
import { __getStats } from "../../../../redux/modules/statsSlice";

const StatsHeaderScreen = () => {
  // const dispatch = useDispatch();
  const statsList = useSelector((state) => state.stats.stats);

  // useEffect(() => {
  //   dispatch(__getStats());
  // }, [dispatch]);

  return (
    <Container>
      <DailyStatsContainer>
        <DailyUserStats />
      </DailyStatsContainer>
      <SideStatsContainer>
        <div>총 {statsList.totalQuestion}문항</div>
        <div>총 {statsList.totalParticipant}명 참여</div>
      </SideStatsContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  padding-top: 3rem;
`;

const DailyStatsContainer = styled.div`
  flex: 1;
`;

const SideStatsContainer = styled.div`
  display: flex;
  /* padding: 0 2rem; */
  div {
    padding: 0rem 1.2rem;
    ${fonts.Body2}
  }
`;

export default StatsHeaderScreen;

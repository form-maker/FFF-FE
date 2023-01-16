import React from "react";
import styled from "styled-components";
import StatsHeaderScreen from "../components/stats/statsHeader/screen/StatsHeaderScreen";
import StatsMainListScreen from "../components/stats/statsMainList/screen/StatsMainListScreen";
import StatusSideBarScreen from "../components/stats/statusSideBar/screen/StatusSideBarScreen";

const Stats = () => {
  return (
    <Container>
      <StatsHeaderScreen />
      <StatsMainContainer>
        <StatsMainListContainer>
          <StatsMainListScreen />
        </StatsMainListContainer>
        <StatusSideBarContainer>
          <StatusSideBarScreen />
        </StatusSideBarContainer>
      </StatsMainContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-width: 800px;
  max-width: 1200px;
`;

const StatsMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0;
  padding-top: 3rem;
`;

const StatsMainListContainer = styled.div`
  flex: 1;
`;

const StatusSideBarContainer = styled.div`
  width: 25rem;
`;

export default Stats;

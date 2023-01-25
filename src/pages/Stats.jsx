import React from "react";
import styled from "styled-components";

import StatsHeaderScreen from "../components/stats/statsHeader/screen/StatsHeaderScreen";
import StatsMainListScreen from "../components/stats/statsMainList/screen/StatsMainListScreen";
import StatsSortToggleScreen from "../components/stats/statsSortToggle/screen/StatsSortToggleScreen";

const Stats = () => {
  return (
    <Container>
      <StatsHeaderScreen />
      <StatsMainContainer>
        <StatsSortToggleScreen />
        <StatsMainItemContainer>
          <StatsMainListScreen />
        </StatsMainItemContainer>
      </StatsMainContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const StatsMainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  padding-bottom: 9.5rem;

  background: ${({ theme }) => theme.backgroundColor2};
`;

const StatsMainItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 800px;
  max-width: 1200px;

  width: 100%;
  margin: 0;
  padding-top: 3rem;
`;

export default Stats;

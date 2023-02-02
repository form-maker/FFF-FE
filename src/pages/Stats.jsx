import React from "react";
import styled from "styled-components";
import CanNotBeUsedForMobile from "../components/common/canNotBeUsedForMobile/CanNotBeUsedForMobile";

import StatsHeaderScreen from "../components/stats/statsHeader/screen/StatsHeaderScreen";
import StatsMainListScreen from "../components/stats/statsMainList/screen/StatsMainListScreen";
import StatsSortToggleScreen from "../components/stats/statsSortToggle/screen/StatsSortToggleScreen";

const Stats = () => {
  return (
    <Container>
      <Mobile>
        <CanNotBeUsedForMobile pageText="통계 페이지" />
      </Mobile>
      <DeskTop>
        <StatsHeaderScreen />
        <StatsMainContainer>
          <StatsSortToggleScreen />
          <StatsMainItemContainer>
            <StatsMainListScreen />
          </StatsMainItemContainer>
        </StatsMainContainer>
      </DeskTop>
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

const Mobile = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 500px) {
    display: none;
  }
`;

const DeskTop = styled.div`
  height: 100%;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export default Stats;

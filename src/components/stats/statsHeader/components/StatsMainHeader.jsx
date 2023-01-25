import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import fonts from "../../../../styles/fonts";
import LargeRoundDiv from "../../../common/LargeRoundDiv";

const StatsMainHeader = () => {
  const statsList = useSelector((state) => state.stats.stats);

  return (
    <Container>
      <MainHeaderContainer>
        <SummeryContainer>
          <StatsSummeryContainer>
            <h1>{statsList.surveyTitle}</h1>
            <PeriodContainer>
              <LargeRoundDiv
                divText={
                  (statsList.status === "NOT_START" && "시작전") ||
                  (statsList.status === "IN_PROCEED" && "진행중") ||
                  (statsList.status === "DONE" && "마감")
                }
              />
              <div>
                <p>진행기간</p>
                <h5>
                  {statsList.startedAt} - {statsList.endedAt}
                </h5>
              </div>
            </PeriodContainer>
          </StatsSummeryContainer>
          <h4>{statsList.surveySummary}</h4>
        </SummeryContainer>
        <SideStatsContainer>
          <div>
            <h5>전체 문항수</h5>
            <h4>{statsList.totalQuestion}</h4>
          </div>
          <div>
            <h5>응답자 수</h5>
            <h4>{statsList.totalParticipant} </h4>
          </div>
        </SideStatsContainer>
      </MainHeaderContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100vw;
  border-bottom: 1px solid #e1e1e1;
`;

const MainHeaderContainer = styled.div`
  display: flex;

  width: 100%;
  min-width: 800px;
  max-width: 1200px;
  padding: 0 3rem 3.4rem 3rem;
`;

const SummeryContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  margin-top: 8.3rem;
  h4 {
    margin: 0.8rem 0 0 0;

    ${fonts.Body3}
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
  }
`;

const StatsSummeryContainer = styled.div`
  display: flex;
  align-items: center;
  h1 {
    margin: 0;
    ${fonts.Body1}
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
  }
`;

const PeriodContainer = styled.div`
  display: flex;
  div {
    display: flex;
    flex-direction: column;
    margin-left: 1.4rem;
    p {
      margin: 0;
      ${fonts.Body3}
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 1.4rem;
    }
    h5 {
      margin: 0;
      ${fonts.Body1}
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 1.7rem;
    }
  }
`;

const SideStatsContainer = styled.div`
  display: flex;
  margin-top: 11.8rem;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 11.7rem;
    height: 6.2rem;
    background: ${({ theme }) => theme.lightMainColor};
    border-radius: 3.95rem;
    h5 {
      margin: 0;
      ${fonts.Body3}
      font-weight: 500;
      font-size: 1.3rem;
      line-height: 1.6rem;
    }
    h4 {
      margin: 0;
      ${fonts.Body1}
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 1.9rem;
    }
    &:nth-child(1) {
      margin-right: 2.2rem;
    }
  }
`;

export default StatsMainHeader;

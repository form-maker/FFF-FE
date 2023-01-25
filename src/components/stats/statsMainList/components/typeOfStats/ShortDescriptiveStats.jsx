import React from "react";
import styled from "styled-components";

import fonts from "../../../../../styles/fonts";
import StatsCommentContainer from "../statsContainer/StatsCommentContainer";
import StatsHeaderContainer from "../statsContainer/StatsHeaderContainer";
import Title from "../Title";

const ShortDescriptiveStats = ({ stats }) => {
  return (
    <Container>
      <StatsHeaderContainer>
        <Title
          questionType={stats.questionType}
          questionNum={stats.questionNum}
          questionTitle={stats.questionTitle}
          questionSummary={stats.questionSummary}
        />
      </StatsHeaderContainer>
      <CircleContainer>
        <Circle
          top="3.8rem"
          left="13.4rem"
          background="mainColor"
          width="10.6rem"
        >
          <h2>{stats?.descriptiveList[2]?.answer}</h2>
          <p>총 {stats?.descriptiveList[2]?.value}회</p>
        </Circle>
        <Circle
          top="5.9rem"
          left="21.5rem"
          background="pointColor3"
          width="17.6rem"
        >
          <h2>{stats?.descriptiveList[0]?.answer}</h2>
          <p>총 {stats?.descriptiveList[0]?.value}회</p>
        </Circle>
        <Circle
          top="15rem"
          left="8.1rem"
          background="subHoverColor3"
          width="13.4rem"
        >
          <h2>{stats?.descriptiveList[1]?.answer}</h2>
          <p>총 {stats?.descriptiveList[1]?.value}회</p>
        </Circle>
      </CircleContainer>
      <StatsCommentContainer>
        <p>가장 많이 나온 단어</p>
      </StatsCommentContainer>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  width: 47.2rem;
  height: 41.6em;

  background: #ffffff;
  box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const CircleContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;

  padding-top: 4rem;
  height: 28rem;
  width: 100%;
`;

const Circle = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => width};
  height: ${({ width }) => width};

  background: ${({ background, theme }) => theme[background]};
  border: 0.3rem solid #ffffff;
  border-radius: 50%;

  h2 {
    margin: 0;
  }
  p {
    margin: 0;
    ${fonts.Body3}
  }
`;

export default ShortDescriptiveStats;

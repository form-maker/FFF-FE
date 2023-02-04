import React from "react";
import styled from "styled-components";

import fonts from "../../../../../styles/fonts";
import StatsCommentContainer from "../statsContainer/StatsCommentContainer";
import StatsHeaderContainer from "../statsContainer/StatsHeaderContainer";
import Title from "../Title";

const RankStats = ({ stats }) => {
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
      <RankContainer>
        {stats.selectList?.map((answer, index) => (
          <div key={answer.answer}>
            <AnswerContainer>
              <Rank>{index + 1}위</Rank>
              <RankList>
                <h3>{answer.answer}</h3>
                <AnswerRankList>
                  {answer.rankList?.map((rank, index) => {
                    return (
                      <p key={index}>
                        {index + 1}위 {rank}%
                      </p>
                    );
                  })}
                </AnswerRankList>
              </RankList>
            </AnswerContainer>
          </div>
        ))}
      </RankContainer>
      <StatsCommentContainer>
        <p>평균 점수를 반영한 순위 입니다.</p>
      </StatsCommentContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 47.2rem;
  height: 41.6em;
  background: #ffffff;
  box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  position: relative;
`;

const RankContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 28rem;

  div {
    display: flex;
    align-items: center;
  }
`;

const AnswerContainer = styled.div`
  width: 35rem;
  height: 4.1rem;
  background-color: ${({ theme }) => theme.lightMainColor};
  border-radius: 1rem;
  margin-bottom: 1.1rem;
`;

const Rank = styled.div`
  width: 3.8rem;
  height: 4.1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${fonts.Body1}
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.4rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.pointColor3};
`;

const RankList = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  width: 80%;

  h3 {
    ${fonts.Body1}
    margin: 0;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.4rem;
    margin-right: 1rem;
  }
  p {
    ${fonts.Body3}
    margin: 0 0.5rem 0 0;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.2rem;
  }
`;

const AnswerRankList = styled.div``;

export default RankStats;

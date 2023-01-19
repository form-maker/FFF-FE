import React from "react";
import styled from "styled-components";
import fonts from "../../../../../styles/fonts";

const RankStats = ({ stats }) => {
  return (
    <Container>
      <Header>
        <TitleContainer>
          <p>{stats.questionType}</p>
          <h2>
            {stats.questionNum}. {stats.questionTitle}
          </h2>
          <h4>{stats.questionSummary}</h4>
        </TitleContainer>
      </Header>
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
      <CommentContainer>
        <p>평균 점수를 반영한 순위 입니다.</p>
      </CommentContainer>
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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 3rem 0 3rem;
`;

const TitleContainer = styled.div`
  p {
    ${fonts.Body3}
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.2rem;
    margin: 0;
  }
  h2 {
    ${fonts.Body1}
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.9rem;
    margin: 0;
    margin-top: 0.6rem;
  }
  h4 {
    ${fonts.Body3}
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
    margin: 0;
    margin-top: 0.7rem;
  }
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
  width: 24.7rem;
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

const CommentContainer = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 2.9rem;
  p {
    ${fonts.Body1}
    font-weight: 500;
    font-size: 1rem;
    line-height: 1rem;
  }
`;

const RankList = styled.div`
  margin-left: 1rem;
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

const AnswerRankList = styled.div`
  display: flex;
`;

export default RankStats;

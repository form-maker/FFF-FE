import React from "react";
import styled from "styled-components";
import fonts from "../../../../../styles/fonts";

const RankStats = ({ stats }) => {
  return (
    <Container>
      <Title>{stats.questionTitle}</Title>
      <RankContainer>
        {stats.selectList?.map((answer, index) => (
          <div key={answer.answer}>
            <Rank>{index + 1}위</Rank>
            <div>
              <Answer>{answer.answer}</Answer>
              <Answer>
                {answer.rankList?.map((rank, index) => {
                  return <span key={index}>{rank}</span>;
                })}
              </Answer>
            </div>
          </div>
        ))}
      </RankContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 30rem;
  height: 30em;
  border: 0.1rem solid blue;
  border-radius: 1rem;
  padding: 2rem;
  position: relative;
`;

const Title = styled.h2`
  ${fonts.Body2}
  width: 18rem;
`;

const RankContainer = styled.div`
  margin-top: 3rem;
  div {
    display: flex;
    align-items: center;
  }
`;

const Rank = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin: 0.5rem;
  ${fonts.Body2}
  border-radius: 1rem;
`;

const Answer = styled.div`
  margin-left: 1rem;
  ${fonts.Body2}
`;

export default RankStats;

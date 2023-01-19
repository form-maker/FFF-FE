import React from "react";
import styled from "styled-components";
import fonts from "../../../../../styles/fonts";

const LongDescriptiveStats = ({ stats }) => {
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

      <AnswerContainer>
        {stats.descriptiveList?.map((answer) => {
          return (
            <Answer key={answer.answer}>
              <h3>{answer.answer}</h3>
            </Answer>
          );
        })}
      </AnswerContainer>
      <CommentContainer>
        <p>랜덤 3가지 답문</p>
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
const AnswerContainer = styled.div`
  margin-top: 3.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 24rem;
  overflow: auto;
`;

const Answer = styled.div`
  background: ${({ theme }) => theme.lightMainColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 41.4rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  h3 {
    ${fonts.Body1}
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.7rem;
    margin: 0;
  }
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

export default LongDescriptiveStats;

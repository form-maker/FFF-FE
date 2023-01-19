import React from "react";
import styled from "styled-components";
import fonts from "../../../../../styles/fonts";

const ShortDescriptiveStats = ({ stats }) => {
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
      <CircleContainer>
        <Circle
          top="3.8rem"
          left="13.4rem"
          background="mainColor"
          width="10.6rem"
        >
          <h2>{stats.selectList[2]?.answer}</h2>
          <p>총 {stats.selectList[2]?.value}회</p>
        </Circle>
        <Circle
          top="5.9rem"
          left="21.5rem"
          background="pointColor3"
          width="17.6rem"
        >
          <h2>{stats.selectList[0]?.answer}</h2>
          <p>총 {stats.selectList[0]?.value}회</p>
        </Circle>
        <Circle
          top="15rem"
          left="8.1rem"
          background="subHoverColor3"
          width="13.4rem"
        >
          <h2>{stats.selectList[1]?.answer}</h2>
          <p>총 {stats.selectList[1]?.value}회</p>
        </Circle>
      </CircleContainer>
      <CommentContainer>
        <p>가장 많이 나온 단어</p>
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

const CircleContainer = styled.div`
  padding-top: 4rem;
  display: flex;
  justify-content: space-evenly;
  height: 28rem;
  width: 100%;
  position: relative;
`;

const Circle = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  background: ${({ background, theme }) => theme[background]};
  border-radius: 50%;
  width: ${({ width }) => width};
  height: ${({ width }) => width};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.3rem solid #ffffff;

  h2 {
    margin: 0;
  }
  p {
    ${fonts.Body3}
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

export default ShortDescriptiveStats;

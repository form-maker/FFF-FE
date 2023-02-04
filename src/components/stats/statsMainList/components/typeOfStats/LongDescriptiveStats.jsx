import React, { useState } from "react";
import styled from "styled-components";

import fonts from "../../../../../styles/fonts";
import StatsCommentContainer from "../statsContainer/StatsCommentContainer";
import StatsHeaderContainer from "../statsContainer/StatsHeaderContainer";
import Title from "../Title";
import ListPopUp from "./ListPopUp";

const LongDescriptiveStats = ({ stats }) => {
  const [popUpShow, setPopUpShow] = useState(false);
  return (
    <>
      {popUpShow && (
        <PopUpContainer>
          <ListPopUp
            closePop={() => {
              setPopUpShow(false);
            }}
            stats={stats}
          />
        </PopUpContainer>
      )}
      <Container>
        <StatsHeaderContainer>
          <Title
            questionType={stats.questionType}
            questionNum={stats.questionNum}
            questionTitle={stats.questionTitle}
            questionSummary={stats.questionSummary}
          />
          <Icon
            onClick={() => {
              setPopUpShow(true);
            }}
          >
            🔍
          </Icon>
        </StatsHeaderContainer>
        <AnswerContainer>
          {stats.descriptiveList?.statsList?.map((answer) => {
            return (
              <Answer key={answer.answer}>
                <h3>{answer.answer}</h3>
              </Answer>
            );
          })}
        </AnswerContainer>
        <StatsCommentContainer>
          <p>랜덤 3가지 답문</p>
        </StatsCommentContainer>
      </Container>
    </>
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

const Icon = styled.div`
  font-size: 3rem;
  cursor: pointer;
`;

const PopUpContainer = styled.div`
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 30;
`;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 3.7rem;
  height: 24rem;
  overflow: auto;
`;

const Answer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 41.4rem;

  background: ${({ theme }) => theme.lightMainColor};
  border-radius: 1rem;
  h3 {
    margin: 0;
    ${fonts.Body1}
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.7rem;
  }
`;

export default LongDescriptiveStats;

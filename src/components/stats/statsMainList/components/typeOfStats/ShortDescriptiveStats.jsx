import React from "react";
import styled from "styled-components";
import fonts from "../../../../../styles/fonts";

const ShortDescriptiveStats = ({ stats }) => {
  return (
    <Container>
      <Title>{stats.questionTitle}</Title>

      <CircleContainer>
        {stats.selectList?.map((answer) => {
          return (
            <Circle key={answer.answer}>
              <h2>{answer.answer}</h2>
              <p>총 {answer.value}회</p>
            </Circle>
          );
        })}
      </CircleContainer>
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
const CircleContainer = styled.div`
  padding-top: 4rem;
  display: flex;
  justify-content: space-evenly;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 9rem;
  height: 9rem;
  background: #85beff93;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ShortDescriptiveStats;

import React, { useCallback } from "react";
import styled from "styled-components";

import fonts from "../../../../styles/fonts";
import DeadlineBox from "./DeadlineBox";

const MainSurveySummeryCard = ({
  deadLine,
  summary,
  title,
  onClick,
  totalQuestion,
  totalTime,
  giftName,
}) => {
  const backgroundColor = [
    ["#BBE0FA", "#8CB7D7"],
    ["#CEDFFF", "#ADC2EB"],
    ["#F6EAFD", "#E7D1F3"],
  ];
  const getRandom = useCallback((min, max) => {
    return Math.floor(Math.random() * (max - min) + min) - 1;
  }, []);

  let randomColor = backgroundColor[getRandom(1, backgroundColor.length + 1)];

  return (
    <Container backgroundColor={randomColor[0]} onClick={onClick}>
      <Header>
        {giftName ? (
          <div>
            {totalTime}분이면 {giftName} 응모 완료!
          </div>
        ) : (
          <div>{totalTime}분이면 완료!</div>
        )}
      </Header>
      <Main>
        <DeadlineBox
          deadLine={deadLine}
          title={title}
          summary={summary}
          backgroundColor={randomColor[1]}
        />
      </Main>
      <Footer>
        <div>총 {totalQuestion} 문항</div>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 35.6rem;
  height: 18.6rem;
  padding: 2.7rem 2.2rem 2rem 2.2rem;
  border-radius: 1rem;

  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;
  div {
    margin: 0;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 14rem;
    padding: 1rem;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    padding: 0.4rem 3rem;

    ${fonts.Body1}
    font-style: normal;
    font-weight: 600;
    font-size: 1.3rem;

    border-radius: 1rem;
    background: ${({ theme }) => theme.backgroundColor};
  }
  @media screen and (max-width: 500px) {
    div {
      font-size: 1rem;
      padding: 0.4rem 1rem;
    }
  }
`;

const Main = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  p {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
    ${fonts.Body3}
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  div {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
    ${fonts.Body3}
  }
  @media screen and (max-width: 500px) {
    justify-content: center;
    div {
      font-size: 0.8rem;
      ${fonts.Body3}
    }
  }
`;

export default React.memo(MainSurveySummeryCard);

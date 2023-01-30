import React from "react";
import styled from "styled-components";

import fonts from "../../../../styles/fonts";

const MainSurveySummeryCard = ({
  deadLine,
  createdAt,
  summary,
  title,
  participant,
  onClick,
  totalQuestion,
  totalTime,
  giftName,
  totalGiftQuantity,
}) => {
  const backgroundColor = [
    ["#BBE0FA", "#8CB7D7"],
    ["#CEDFFF", "#ADC2EB"],
    ["#F6EAFD", "#E7D1F3"],
  ];
  const getRandom = (min, max) =>
    Math.floor(Math.random() * (max - min) + min) - 1;
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
      <Main backgroundColor={randomColor[1]}>
        <div>
          {deadLine <= 0 ? (
            <div>마감 완료</div>
          ) : (
            <div>
              <span>⏱️{deadLine}일</span>후 마감
            </div>
          )}
          <div>
            <h3>{title?.length > 17 ? title.slice(0, 17) + "..." : title}</h3>
            <p>
              {summary?.length > 19 ? summary.slice(0, 18) + "..." : summary}
            </p>
          </div>
        </div>
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
  div {
    display: flex;
    margin-top: 1.8rem;
    div {
      &:nth-child(1) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 1rem;
        height: 3.5rem;
        width: 9.5rem;

        border-radius: 1rem;
        background: ${({ backgroundColor }) => backgroundColor};
        span {
          font-weight: 700;
          font-size: 1.3rem;
        }
      }
      &:nth-child(2) {
        display: flex;
        flex-direction: column;
        h3 {
          margin: 0;
        }
        p {
          margin: 0;
        }
      }
    }
    h3 {
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 1.8rem;
      margin: 0;
      ${fonts.Body1}
    }
  }
  p {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
    ${fonts.Body3}
  }

  @media screen and (max-width: 500px) {
    div {
      margin-top: 0.7rem;
      flex-direction: column;
      align-items: center;
      div {
        &:nth-child(1) {
          display: flex;
          flex-direction: row;
          height: 2rem;
          width: 10rem;
          margin-right: 0.5rem;
          border-radius: 0.5rem;
          font-size: 0.8rem;
          span {
            padding-bottom: 0.1rem;
            font-weight: 700;
            font-size: 0.8rem;
          }
        }
        &:nth-child(2) {
          display: flex;
          flex-direction: column;
          h3 {
            margin: 0;
            font-size: 1.2rem;
          }
          p {
            margin: 0;
            font-size: 0.7rem;
          }
        }
      }
    }
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

export default MainSurveySummeryCard;

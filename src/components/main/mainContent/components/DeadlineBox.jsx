import React from "react";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";

const DeadlineBox = ({ deadLine, title, summary, backgroundColor }) => {
  return (
    <Container backgroundColor={backgroundColor}>
      {deadLine < 0 && <div>마감 완료</div>}
      {deadLine === 0 && (
        <div>
          <span>⏱️오늘 </span>마감
        </div>
      )}
      {deadLine > 0 && (
        <div>
          <span>⏱️{deadLine}일</span>후 마감
        </div>
      )}
      <div>
        <h3>{title?.length > 17 ? title.slice(0, 17) + "..." : title}</h3>
        <p>{summary?.length > 24 ? summary.slice(0, 24) + "..." : summary}</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-top: 1.8rem;
  height: 100%;
  align-items: center;
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
    font-size: 1.3rem;
    line-height: 1.8rem;
    margin: 0;
    ${fonts.Body1}
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 0.7rem;
    text-align: center;
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
`;

export default DeadlineBox;

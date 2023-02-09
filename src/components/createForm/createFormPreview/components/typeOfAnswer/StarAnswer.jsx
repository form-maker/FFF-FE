import React from "react";
import styled from "styled-components";

import fonts from "../../../../../styles/fonts";

const StarAnswer = () => {
  return (
    <Container>
      <ScoreButtonContainer>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/img/starIcon.svg"}
            alt="starIcon"
          />
          <h3>1점</h3>
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/img/starIcon.svg"}
            alt="starIcon"
          />
          <h3>2점</h3>
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/img/starIcon.svg"}
            alt="starIcon"
          />
          <h3>3점</h3>
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/img/starIcon.svg"}
            alt="starIcon"
          />
          <h3>4점</h3>
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/img/starIcon.svg"}
            alt="starIcon"
          />
          <h3>5점</h3>
        </div>
      </ScoreButtonContainer>
      <p>원하는 별점을 선택해 주세요</p>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  p {
    margin-top: 1.9rem;

    ${fonts.Body3}
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;

const ScoreButtonContainer = styled.div`
  display: flex;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 0.5rem;
    cursor: pointer;
    img {
      width: 4.8rem;
    }
    h3 {
      margin: 1rem 0 0 0;
      padding: 0;

      ${fonts.Body1}
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;
    }
  }
`;

export default StarAnswer;

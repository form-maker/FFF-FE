import React from "react";
import styled from "styled-components";
import fonts from "../../../styles/fonts";
import RoundButtonMedium from "../buttons/roundButtons/RoundButtonMedium";

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
  width: 100%;
  display: flex;
  margin-top: 11.7rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    ${fonts.Body3}
    margin-top: 1.9rem;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;

const ScoreButtonContainer = styled.div`
  display: flex;
  div {
    margin: 0 0.5rem 0 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    img {
      width: 4.8rem;
    }
    h3 {
      ${fonts.Body1}
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;
      margin-top: 1rem;
      margin-bottom: 0;
      padding: 0;
    }
  }
`;

export default StarAnswer;

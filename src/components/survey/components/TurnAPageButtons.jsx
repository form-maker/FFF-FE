import React from "react";
import styled from "styled-components";

const TurnAPageButtons = ({
  currentPageNum,
  questionLength,
  goBackPageClickHandler,
  nextPageClickHandler,
}) => {
  return (
    <ArrowContainer>
      <img
        src={process.env.PUBLIC_URL + "/img/phoneLeftArrow.svg"}
        alt="LeftButton"
        onClick={goBackPageClickHandler}
      />
      <div>
        {currentPageNum}/{questionLength}
      </div>
      <img
        src={process.env.PUBLIC_URL + "/img/phoneRightArrow.svg"}
        alt="RightButton"
        onClick={nextPageClickHandler}
      />
    </ArrowContainer>
  );
};

const ArrowContainer = styled.div`
  width: 26.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  img {
    &:nth-child(1) {
      width: 1.6rem;
      cursor: pointer;
    }
    &:nth-child(2) {
    }
    &:nth-child(3) {
      width: 1.6rem;
      cursor: pointer;
    }
  }
`;

export default TurnAPageButtons;

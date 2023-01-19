import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const PhoneTurnAPageButtons = ({ currentPageNum, questionLength }) => {
  const dispatch = useDispatch();
  return (
    <ArrowContainer>
      <img
        src={process.env.PUBLIC_URL + "/img/phoneLeftArrow.svg"}
        alt="LeftButton"
      />
      <div>
        {currentPageNum}/{questionLength + 1}
      </div>
      <img
        src={process.env.PUBLIC_URL + "/img/phoneRightArrow.svg"}
        alt="RightButton"
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

export default PhoneTurnAPageButtons;

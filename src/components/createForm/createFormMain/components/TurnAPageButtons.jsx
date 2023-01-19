import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { goBack, goNext } from "../../../../redux/modules/createFormSlice";

const TurnAPageButtons = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <img
        src={process.env.PUBLIC_URL + "/img/grayLeftButton.svg"}
        alt="LeftButton"
        onClick={() => {
          dispatch(goBack());
        }}
      />
      <img
        src={process.env.PUBLIC_URL + "/img/grayRightButton.svg"}
        alt="RightButton"
        onClick={() => {
          dispatch(goNext());
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  img {
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    &:nth-child(1) {
      width: 7.2rem;
      cursor: pointer;
      left: 2.4rem;
    }
    &:nth-child(2) {
      width: 7.2rem;
      cursor: pointer;
      right: 2.4rem;
    }
  }
`;

export default TurnAPageButtons;

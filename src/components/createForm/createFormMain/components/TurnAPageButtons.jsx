import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

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
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    width: 100%;
    &:nth-child(1) {
      width: 7.2rem;
      left: 2.4rem;
      cursor: pointer;
    }
    &:nth-child(2) {
      width: 7.2rem;
      right: 2.4rem;
      cursor: pointer;
    }
  }
`;

export default TurnAPageButtons;

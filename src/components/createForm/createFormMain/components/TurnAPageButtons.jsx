import React from "react";
import styled from "styled-components";
import ArrowButton from "./ArrowButton";
import { useDispatch } from "react-redux";
import { goBack, goNext } from "../../../../redux/modules/createFormSlice";

const TurnAPageButtons = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <ArrowButton
        buttonText="<"
        onClick={() => {
          dispatch(goBack());
        }}
      />
      <ArrowButton
        buttonText=">"
        onClick={() => {
          dispatch(goNext());
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 75em;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 15rem;
  left: -37rem;
`;

export default TurnAPageButtons;

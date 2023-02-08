import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { __postForm } from "../../../../redux/modules/createFormSlice";
import RoundButtonLarge from "../../../common/buttons/roundButtons/RoundButtonLarge";
import GoalNumber from "./createFormFinalSelect/GoalNumber";
import SelectDate from "./createFormFinalSelect/SelectDate";
import SelectGift from "./createFormFinalSelect/SelectGift";

const CreateFormFinalSelect = ({ closePop }) => {
  const dispatch = useDispatch();
  const survey = useSelector((state) => state.createForm?.formList);

  const postClickHandler = () => {
    dispatch(__postForm(survey));
  };

  return (
    <Container>
      <PopContainer>
        <Header>
          <button onClick={closePop}>✕</button>
        </Header>
        <Main>
          <Grid>
            <GoalNumber />
            <SelectDate />
            <SelectGift />
          </Grid>
        </Main>
        <Bottom>
          <RoundButtonLarge
            buttonValue="등록하기"
            background="subColor1"
            width="25rem"
            onClick={() => {
              postClickHandler();
            }}
          />
        </Bottom>
      </PopContainer>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 15;
`;

const PopContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 90rem;
  height: 88%;

  background-color: white;
  border-radius: 1rem;
  @media screen and (min-height: 780px) {
    height: 76%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 1rem;
  width: 100%;
  height: 5rem;

  font-size: 1.5rem;

  background: ${({ theme }) => theme.subHoverColor1};
  border-radius: 1rem 1rem 0 0;
  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 3rem;
    height: 3rem;

    background: white;
    border: none;
    border-radius: 50%;
  }
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-template-rows: 1fr 2.2fr;
  grid-row-gap: 1rem;
  grid-column-gap: 5rem;

  width: 75%;
  margin-top: 1rem;
  div {
    &:nth-child(1) {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 2;
    }
    &:nth-child(2) {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 2;
      grid-row-end: 3;
    }
    &:nth-child(3) {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
    }
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

export default CreateFormFinalSelect;

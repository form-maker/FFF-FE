import React from "react";
import styled from "styled-components";
import fonts from "../../../styles/fonts";
import { useDispatch, useSelector } from "react-redux";
import RoundButtonLarge from "../buttons/roundButtons/RoundButtonLarge";

const CoverAnswer = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.createForm.formList.title);
  const summary = useSelector((state) => state.createForm.formList.summary);
  const startAt = useSelector((state) => state.createForm.formList.startAt);
  const endedAt = useSelector((state) => state.createForm.formList.endedAt);

  return (
    <Container>
      <Header>
        <h1>{title}</h1>
      </Header>
      <Main>
        <div>{summary}</div>
        <p>설문 시작일 {startAt}</p>
        <p>설문 마감일 {endedAt}</p>
      </Main>
      <Bottom>
        <RoundButtonLarge buttonValue="시작하기" />
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 30rem;
  }
`;

const Main = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20rem;
  div {
    background: ${({ theme }) => theme.sideColor1};
    height: 15rem;
    padding: 2rem;
    border-radius: 2rem;
    ${fonts.Body2}
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

export default CoverAnswer;

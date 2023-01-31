import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import fonts from "../../../../../styles/fonts";
import RoundButtonLarge from "../../../../common/buttons/roundButtons/RoundButtonLarge";

const CoverAnswer = () => {
  const title = useSelector((state) => state.createForm.formList.title);
  const summary = useSelector((state) => state.createForm.formList.summary);

  return (
    <Container>
      <Header>
        <h1>{title ? title : "Title을 작성해주세요"}</h1>
      </Header>
      <Main>
        <div>{summary ? summary : "설문에 관해 간단하게 설명해주세요"}</div>
      </Main>
      <Bottom>
        <RoundButtonLarge buttonValue="시작하기" width="28.3rem" />
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  margin-top: 6.1rem;
  text-align: center;
  padding: 0 3rem;
  word-break: break-all;
  h1 {
    margin: 0;
    ${fonts.Body1}
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.9rem;
  }
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  margin-top: 8rem;
  height: 20rem;
  text-align: center;

  padding: 0 3rem;
  word-break: break-all;
  div {
    width: 100%;

    height: 13rem;
    ${fonts.Body3}
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.9rem;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 12.4rem;
`;

export default CoverAnswer;

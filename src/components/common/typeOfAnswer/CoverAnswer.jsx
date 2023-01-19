import React from "react";
import styled from "styled-components";
import fonts from "../../../styles/fonts";
import { useDispatch, useSelector } from "react-redux";
import RoundButtonLarge from "../buttons/roundButtons/RoundButtonLarge";

const CoverAnswer = () => {
  const title = useSelector((state) => state.createForm.formList.title);
  const summary = useSelector((state) => state.createForm.formList.summary);
  const startedAt = useSelector((state) => state.createForm.formList.startedAt);
  const endedAt = useSelector((state) => state.createForm.formList.endedAt);

  return (
    <Container>
      <Header>
        <h1>{title ? title : "Title을 작성해주세요"}</h1>
      </Header>
      <Main>
        <div>{summary ? summary : "설문에 관해 간단하게 설명해주세요"}</div>
        <div>
          <p>
            {startedAt} ~ {endedAt}
          </p>
        </div>
      </Main>
      <Bottom>
        <RoundButtonLarge buttonValue="시작하기" width="28.3rem" />
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  text-align: center;
  margin-top: 6.1rem;
  h1 {
    ${fonts.Body1}
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.9rem;
    margin: 0;
  }
`;

const Main = styled.div`
  flex: 1;
  text-align: center;
  margin-top: 4.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20rem;

  div {
    height: 13rem;
    ${fonts.Body3}
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
  }
  div {
    p {
      ${fonts.Body2}
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 1.7rem;
    }
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 12.4rem;
`;

export default CoverAnswer;

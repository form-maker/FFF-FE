import React from "react";
import styled from "styled-components";
import RoundDiv from "./RoundDiv";

const SurveySummeryCard = ({ deadLine, createdAt, summary, title }) => {
  return (
    <Container>
      <Header>
        <RoundDiv text={`D - ${deadLine}`}></RoundDiv>
      </Header>
      <Main>
        <h3>{title}</h3>
        <p>{summary}</p>
      </Main>
      <Footer>
        <div>작성일: {createdAt}</div>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 21.6rem;
  height: 20rem;
  padding: 1rem;
  border-radius: 2.1rem;

  background-color: ${({ theme }) => theme.subColor};
  padding: 2rem;
  div {
    margin: 0;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  /* align-items: baseline; */
  margin: 0;
  p {
    font-size: 0.8rem;
    display: inline-block;
    margin: 0;
  }
`;

const Main = styled.div`
  flex: 1;
  /* background: ${({ theme }) => theme.backgroundColor}; */
  border-radius: 2.1rem;
  h3 {
    font-size: 1.4rem;
    margin: 0;
  }
  p {
    margin-top: 2rem;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    font-size: 0.8rem;
  }
`;
export default SurveySummeryCard;

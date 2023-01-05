import React from "react";
import styled from "styled-components";

const SurveySummeryCard = () => {
  return (
    <Container>
      <Header>
        <p>D-30</p>
      </Header>
      <Main>
        <h3>제목</h3>
        <p>온라인 쇼핑사이트 사용만족도 조사</p>
      </Main>
      <Footer>
        <div>12명</div>
        <div>작성일: 2022-12-31</div>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 14rem;
  border: 1px solid black;
  padding: 1rem;
  border-radius: 1rem;
  div {
    margin: 0;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  margin: 0;
  p {
    font-size: 0.8rem;
    display: inline-block;
    margin: 0;
  }
`;

const Main = styled.div`
  flex: 1;
  h3 {
    font-size: 1rem;
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

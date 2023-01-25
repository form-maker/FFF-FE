import React from "react";
import styled from "styled-components";

import fonts from "../../../../styles/fonts";

const MainSurveySummeryCard = ({
  deadLine,
  createdAt,
  summary,
  title,
  participant,
  onClick,
}) => {
  const backgroundColor = ["#BBE0FA", "#B0D1FF", "#F6EAFD", "#CEDFFF"];
  const getRandom = (min, max) =>
    Math.floor(Math.random() * (max - min) + min) - 1;
  let randomColor = backgroundColor[getRandom(1, backgroundColor.length + 1)];

  return (
    <Container backgroundColor={randomColor} onClick={onClick}>
      <Header>
        <p> {`D - ${deadLine}`}</p>
      </Header>
      <Main>
        <h3>{title}</h3>
        <p>{summary}</p>
      </Main>
      <Footer>
        <div>생성일: {createdAt}</div>
        <div>{participant}</div>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 35.6rem;
  height: 18.6rem;
  padding: 1.4rem 1.5rem 1.4rem 2.2rem;
  border-radius: 1rem;

  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;
  div {
    margin: 0;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;

  p {
    margin: 0;
    padding: 0;

    font-weight: 700;
    font-size: 1.3rem;
    line-height: 1.6rem;
    ${fonts.Body4}
  }
`;

const Main = styled.div`
  flex: 1;
  h3 {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.8rem;
    margin: 0;
    ${fonts.Body1}
  }
  p {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
    ${fonts.Body3}
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
    ${fonts.Body3}
  }
`;

export default MainSurveySummeryCard;

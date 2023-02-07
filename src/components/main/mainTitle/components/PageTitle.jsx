import React from "react";
import styled from "styled-components";

import fonts from "../../../../styles/fonts";

const PageTitle = () => {
  return (
    <Container>
      <BackgroundContainer>
        <div></div>
        <div></div>
      </BackgroundContainer>
      <h1>
        세상에서 가장
        <br /> 몽글몽글한 설문조사
      </h1>
      <p>설문에 참여하고 이벤트에 응모해 보세요</p>
      <ButtonContainer></ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding-top: 20.3rem;
  padding-left: calc(50% + 11.2rem);
  h1 {
    margin: 0;
    padding: 0;

    ${fonts.H3}
    font-size: 3.2rem;
    line-height: 4rem;
  }
  p {
    margin-top: 0.8rem;

    ${fonts.Body1}
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.8rem;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-top: 10rem;
    padding-left: 0;
    width: 100%;
    h1 {
      ${fonts.H2}
      font-size: 2rem;
      line-height: 2.9rem;
      text-align: center;
    }
    p {
      margin-top: 1rem;

      ${fonts.Body1}
      font-weight: 400;
      font-size: 1.2rem;
    }
  }
`;

const BackgroundContainer = styled.div`
  div {
    position: absolute;
    left: 50%;
    width: 17.6rem;
    height: 17.6rem;
    filter: blur(60px);
    z-index: -1;

    &:nth-child(1) {
      top: 11.2rem;
      margin-left: 21rem;

      background: ${({ theme }) => theme.subHoverColor3};
    }
    &:nth-child(2) {
      top: 18.4rem;
      margin-left: 6.2rem;

      background: ${({ theme }) => theme.pointColor};
    }
  }
  @media screen and (max-width: 500px) {
    div {
      left: 0;
      width: 13rem;
      height: 13rem;
      filter: blur(3rem);
      &:nth-child(1) {
        top: 7rem;
      }
      &:nth-child(2) {
        top: 11rem;
      }
    }
  }
`;

const ButtonContainer = styled.div`
  margin-top: 4.4rem;
  display: flex;
  @media screen and (max-width: 500px) {
    margin-top: 2rem;
  }
`;

export default PageTitle;

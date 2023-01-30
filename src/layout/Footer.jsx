import React from "react";
import styled from "styled-components";

import fonts from "../styles/fonts";
const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <div>
          <h3>폼폼폼(FFF)</h3>
          <p>
            개발자 : 김범준 안수빈 김형준 황보석 김동균 <br />
            디자인: 이은진 김민지
          </p>
          <p>All rights reserved, 2023</p>
        </div>
        <div>
          <span>폼폼폼</span>
          <h5>세상에서 가장 몽글몽글한 설문조사</h5>
        </div>
      </FooterContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  border-top: 1px solid #e1e1e1;
  background: ${({ theme }) => theme.gray2};
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  padding: 3.1rem 5rem;
  width: 100%;
  max-width: 1200px;

  @media screen and (max-width: 500px) {
    padding: 3rem;
  }

  div {
    &:nth-child(1) {
      h3 {
        margin: 0;
        ${fonts.Body7}
        font-size: 2rem;
        font-weight: 700;
      }
      p {
        margin: 2rem 0 0 0;
        ${fonts.Body7}
        font-size: 1.2rem;
        font-weight: 400;
      }
      @media screen and (max-width: 500px) {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        h3 {
          margin: 0;
          font-size: 1.2rem;
        }
        p {
          margin: 0;
          font-size: 1rem;
          &:nth-child(2) {
            display: none;
          }
        }
      }
    }
    &:nth-child(2) {
      display: flex;
      align-items: center;
      span {
        margin: 0;
        padding: 0;
        ${fonts.H1}
        color:${({ theme }) => theme.gray8};
        font-size: 3.2rem;
      }
      h5 {
        margin: 0 0 0 2.2rem;
        padding: 0;
        ${fonts.Body7}
        font-size: 1.4rem;
        font-weight: 400;
      }
      @media screen and (max-width: 500px) {
        display: none;
      }
    }
  }
`;

export default Footer;

import React from "react";
import styled from "styled-components";
import fonts from "../../../styles/fonts";

const CanNotBeUsedForMobile = ({ pageText }) => {
  return (
    <Container>
      <div>
        <h2>🖥️</h2>
      </div>
      <h4>
        <br />
        {pageText}는 페이지는 <br />
        <span>데스크탑</span>에 최적화 되어 있습니다.
        <br />
        데스크탑으로 이용 부탁드립니다.
        <br />
      </h4>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 16rem;
    height: 16rem;

    border-radius: 50%;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
    h2 {
      margin: 0;
      font-size: 9rem;
    }
  }
  h4 {
    margin: 0;
    ${fonts.Body2}
    font-weight: 400;
    text-align: center;
    font-size: 1.3rem;
  }
  span {
    color: ${({ theme }) => theme.subHoverColor1};
    font-weight: 600;
    font-size: 1.4rem;
  }
`;

export default CanNotBeUsedForMobile;

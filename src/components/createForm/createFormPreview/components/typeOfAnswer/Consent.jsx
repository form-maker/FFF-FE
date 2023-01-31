import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import fonts from "../../../../../styles/fonts";

const Consent = () => {
  const currentPageNum = useSelector(
    (state) => state.createForm.currentPageNum
  );
  const questionSummary = useSelector(
    (state) =>
      state.createForm.formList?.questionList.length !== 0 &&
      state.createForm.formList?.questionList[currentPageNum - 2][
        "questionSummary"
      ]
  );

  return (
    <Container>
      <Header>
        <h1>정보 이용 동의서</h1>
        <h5>
          {questionSummary === ""
            ? "정보 동의에 필요한 추가 사항을 작성해 주세요(선택사항)"
            : questionSummary}
        </h5>
      </Header>
      <Main>
        <div>
          <input type="checkbox" id="MULTIPLE_CHOICE" />
          <label htmlFor="MULTIPLE_CHOICE">
            <span>동의합니다</span>
          </label>
        </div>
        <div>
          <h5>이벤트 상품 지급을 위한 개인 정보 이용 동의</h5>
          <p>동의하지 않을 경우, 이벤트 참여가 어렵습니다.</p>
        </div>
        <div>
          <h5>개인 정보 수집 및 이용 동의</h5>
          <p>
            1. 개인 정보의 수집.이용 목적 : 이벤트 진행 및 경품 배송 <br />
            2. 수집하는 개인 정보의 항목 : 이름, 휴대폰번호, 이메일 <br />
            3. 개인 정보의 보유. 이용 기간 : 이벤트 종료 후 즉시 파기 <br />
            4. 개인 정보의 수집 및 이용에 대한 동의를 거부할 수 있으며, 이 경우
            이벤트 참여가 제한됩니다.
          </p>
        </div>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem 0 3rem;

  width: 100%;
  height: 100%;
  div {
    margin-bottom: 1rem;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;

  h1 {
    margin: 0;
    ${fonts.Body1}
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.9rem;
  }
  h5 {
    margin: 3rem auto 0 auto;
    ${fonts.Body3}
    font-weight: 500;
    font-size: 1.4rem;
    word-break: break-all;
  }
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  div {
    &:nth-child(1) {
      display: flex;
      justify-content: flex-end;
      input {
        display: none;
        &:checked + label {
          &::before {
            content: "";
            background-position: 50%;
            background-repeat: no-repeat;
            background-color: ${({ theme }) => theme.mainColor};
            border-color: ${({ theme }) => theme.mainColor};
          }
        }
      }
      label {
        display: flex;
        align-items: center;
        cursor: pointer;
        &::before {
          content: "";
          display: inline-block;
          width: 17px;
          height: 17px;

          border: 2px solid ${({ theme }) => theme.mainColor};
          border-radius: 4px;
          vertical-align: middle;
        }
        span {
          ${fonts.Body1}
          font-weight: 500;
          font-size: 1.2rem;
          margin-left: 0.5rem;
        }
      }
    }
    &:nth-child(2),
    &:nth-child(3) {
      padding: 1rem;
      h5 {
        margin: 0;
        font-size: 1.2rem;
      }
      p {
        margin: 0.5rem 0 0 0;
        font-size: 1.2rem;
      }
      border: 1px solid #c9c9c9;
      border-radius: 10px;
    }
  }
`;

export default Consent;

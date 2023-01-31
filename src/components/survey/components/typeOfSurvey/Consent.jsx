import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { changeDescriptive } from "../../../../redux/modules/surveySlice";
import fonts from "../../../../styles/fonts";
import Title from "../Title";

const Consent = () => {
  const dispatch = useDispatch();
  const currentPageNum = useSelector((state) => state.survey.currentPageNum);
  const descriptive = useSelector(
    (state) => state.survey?.answer[currentPageNum - 2]["descriptive"]
  );

  const test = useSelector((state) => state.survey);

  console.log(test);

  const answerHandler = (event) => {
    dispatch(changeDescriptive(event.target.checked ? "동의" : "비동의"));
  };

  useEffect(() => {
    dispatch(changeDescriptive("비동의"));
  }, []);

  return (
    <Container>
      <Title />
      <Main>
        <div>
          <input
            type="checkbox"
            id="CONSENT"
            onClick={answerHandler}
            checked={descriptive === "동의"}
          />
          <label htmlFor="CONSENT">
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
  align-items: center;
  position: relative;

  padding-top: 4rem;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  @media screen and (min-width: 500px) {
    justify-content: center;
  }
`;
const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    width: 40rem;
    &:nth-child(1) {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 1rem;
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
      margin-bottom: 1rem;
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

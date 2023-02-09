import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { changeGiftField } from "../../../../../redux/modules/createFormSlice";
import fonts from "../../../../../styles/fonts";
import SelectEmoji from "./selectGift/SelectEmoji";
import SelectNumber from "./selectGift/SelectNumber";

const SelectGift = () => {
  const dispatch = useDispatch();
  const [giftChecked, setGiftChecked] = useState(false);
  const giftName = useSelector(
    (state) =>
      state.createForm.formList?.giftList?.length !== 0 &&
      state.createForm.formList?.giftList[0]["giftName"]
  );
  const giftSummary = useSelector(
    (state) =>
      state.createForm.formList?.giftList?.length !== 0 &&
      state.createForm.formList?.giftList[0]["giftSummary"]
  );

  const InputHandler = (event) => {
    const { name, value } = event.target;
    dispatch(
      changeGiftField({
        index: 0,
        key: name,
        value,
      })
    );
  };

  return (
    <Container>
      <Title>
        <img src={process.env.PUBLIC_URL + "/img/gift.svg"} alt="gift" />
        <div>
          <h4>선물을 선택해 주세요(선택사항)</h4>
          <p>추첨을 통해 지급할 선물에 대해 설정해 주세요</p>
        </div>
      </Title>

      <CheckBoxContainer>
        <input
          type="checkbox"
          id="CONSENT"
          onClick={() => {
            setGiftChecked((prev) => !prev);
          }}
          checked={giftChecked}
        />
        <label htmlFor="CONSENT">
          <span>선물 제작하기</span>
        </label>
      </CheckBoxContainer>
      {giftChecked ? (
        <GiftContainer>
          <input
            type="text"
            name="giftName"
            onChange={InputHandler}
            value={giftName}
            placeholder="상품명을 작성해주세요"
          ></input>
          <input
            type="text"
            name="giftSummary"
            onChange={InputHandler}
            value={giftSummary}
            placeholder="상품 설명을 작성해주세요"
          ></input>
          <div>
            <SelectEmoji />
            <SelectNumber />
          </div>
        </GiftContainer>
      ) : (
        <NoGiftContainer>
          <h3>
            선물 제작을 원하시면 <br />
            우측 상단의 선물 제작하기를 체크해주세요
          </h3>
        </NoGiftContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 5rem;
  }
  div {
    margin-left: 1rem;
    h4 {
      margin: 0;
      font-size: 1.6rem;
    }
    p {
      margin-top: 0.4rem;
      margin-bottom: 0;

      font-size: 1.2rem;
    }
  }
`;

const GiftContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  input {
    width: 37.5rem;
    height: 3.8rem;
    margin-bottom: 1rem;

    border: none;
    border-radius: 10px;
    padding-left: 0.9rem;
    border: ${({ theme }) => `0.2rem solid ${theme.gray3}`};
    &::placeholder {
      ${fonts.Body2}
      font-weight: 500;
      font-size: 13px;
      line-height: 16px;

      color: #686868;
    }
  }
  div {
    display: flex;
  }
`;

const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-bottom: 1rem;
  width: 100%;
  input {
    display: none;
    &:checked + label {
      &::before {
        content: "✓";
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 1.8rem;
        ${fonts.Body1}
        color: ${({ theme }) => theme.mainColor};
        font-weight: 900;

        background-position: 50%;
        background-repeat: no-repeat;
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
      margin-left: 0.5rem;

      ${fonts.Body2}
      font-weight: 700;
      font-size: 1.4rem;
    }
  }
`;

const NoGiftContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 30.8rem;
  width: 39rem;
  h3 {
    ${fonts.Body5}
    font-size: 1.8rem;
    text-align: center;
    padding-bottom: 5rem;
  }
`;

export default SelectGift;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { changeGiftField } from "../../../../../redux/modules/createFormSlice";
import fonts from "../../../../../styles/fonts";
import SelectEmoji from "./selectGift/SelectEmoji";
import SelectNumber from "./selectGift/SelectNumber";

const SelectGift = () => {
  const dispatch = useDispatch();
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
    <div>
      <Title>
        <img src={process.env.PUBLIC_URL + "/img/gift.svg"} alt="gift" />
        <div>
          <h4>선물을 선택해 주세요</h4>
          <p>추첨을 통해 지급할 선물을 설정해 주세요</p>
        </div>
      </Title>
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
    </div>
  );
};

const Title = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 5rem;
  }
  div {
    margin-left: 1rem;
    h4 {
      font-size: 1.6rem;
      margin: 0;
    }
    p {
      font-size: 1.2rem;
      margin-top: 0.4rem;
      margin-bottom: 0;
    }
  }
`;

const GiftContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  margin-top: 9.5rem;
  input {
    width: 35rem;
    height: 3.8rem;
    margin-bottom: 1rem;

    border: none;
    border-radius: 10px;
    padding-left: 0.9rem;
    border: ${({ theme }) => `0.2rem solid ${theme.gray3}`};
    &::placeholder {
      ${fonts.Body2}
      color: #686868;
      font-weight: 500;
      font-size: 13px;
      line-height: 16px;
    }
  }
  div {
    display: flex;
  }
`;

export default SelectGift;

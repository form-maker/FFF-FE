import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { changeGiftField } from "../../../../../../redux/modules/createFormSlice";
import fonts from "../../../../../../styles/fonts";

const SelectNumber = () => {
  const dispatch = useDispatch();
  const giftQuantity = useSelector(
    (state) => state.createForm.formList?.giftList[0]["giftQuantity"]
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
    <GiftNumberContainer>
      <h5>당첨인원</h5>
      <p>상품 당첨 인원을 설정해주세요</p>
      <div>
        <input
          type="number"
          min="1"
          max="3000"
          step="1"
          name="giftQuantity"
          onChange={InputHandler}
          value={giftQuantity}
        ></input>
        <span>명</span>
      </div>
    </GiftNumberContainer>
  );
};

const GiftNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 18rem;
  margin-left: 1rem;
  padding: 3.5rem 1rem;
  h5 {
    margin: 0;
    ${fonts.Body1}
    font-size: 1.4rem;
  }
  p {
    margin: 1rem 0 3rem 0;
    font-size: 1rem;
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    input {
      width: 3.8rem;
      height: 2.1rem;
    }
    span {
      margin-left: 0.3rem;
      ${fonts.Body1}
      font-size: 1.4rem;
    }
  }
  border: ${({ theme }) => `0.2rem solid ${theme.gray3}`};
  border-radius: 10px;
`;

export default SelectNumber;

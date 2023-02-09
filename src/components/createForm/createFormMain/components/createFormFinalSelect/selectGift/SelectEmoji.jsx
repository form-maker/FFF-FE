import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import EmojiPicker from "emoji-picker-react";
import "./EmojiPicker.css";

import fonts from "../../../../../../styles/fonts";
import { changeGiftField } from "../../../../../../redux/modules/createFormSlice";
import useToggleShow from "../../../../../common/hooks/useToggleShow";

const SelectEmoji = () => {
  const dispatch = useDispatch();
  const [emojiShow, setEmojiShow] = useState(false);
  const wrapperRef = useRef();
  const giftIcon = useSelector(
    (state) => state.createForm.formList?.giftList[0]["giftIcon"]
  );

  const InputHandler = ({ emoji }) => {
    dispatch(
      changeGiftField({
        index: 0,
        key: "giftIcon",
        value: emoji,
      })
    );
    setEmojiShow(false);
  };

  useToggleShow({
    emojiShow,
    setEmojiShow,
    wrapperRef,
  });

  return (
    <div>
      <EmojiContainer>
        <div
          onClick={() => {
            setEmojiShow((prev) => !prev);
          }}
        >
          ⌵
        </div>
        <div>
          <p>상품을 대표할 아이콘을 설정해주세요</p>
        </div>
        <div>
          <h1>{giftIcon}</h1>
        </div>
      </EmojiContainer>
      {emojiShow && (
        <EmojiPickerContainer ref={wrapperRef}>
          <EmojiPicker
            onEmojiClick={InputHandler}
            width="23rem"
            height="22rem"
            previewConfig={{
              showPreview: false,
            }}
            skinTonesDisabled={true}
            searchDisabled={true}
            categories={[
              {
                category: "food_drink",
                name: "음식",
              },
              {
                category: "objects",
                name: "상품",
              },
              {
                category: "activities",
                name: "활동",
              },
            ]}
          />
        </EmojiPickerContainer>
      )}
    </div>
  );
};

const EmojiContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 20rem;
  height: 20rem;
  border: ${({ theme }) => `0.2rem solid ${theme.gray3}`};
  border-radius: 10px;
  padding: 0 1rem;
  div {
    &:nth-child(1) {
      display: flex;
      justify-content: flex-end;

      ${fonts.H1}
      font-size: 2rem;
      font-weight: 900;

      color: ${({ theme }) => theme.pointColor};
      cursor: pointer;
    }
    &:nth-child(2) {
      flex: 1;
      display: flex;
      justify-content: center;
      p {
        ${fonts.Body1}
        font-size: 1rem;
      }
    }
    &:nth-child(3) {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      h1 {
        font-size: 8rem;
        margin: 0 0 3.5rem 0;
      }
    }
  }
`;

const EmojiPickerContainer = styled.div`
  position: absolute;
  top: 14rem;
  left: 17rem;
`;

export default SelectEmoji;

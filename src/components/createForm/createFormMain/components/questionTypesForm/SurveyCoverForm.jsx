import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { changeField } from "../../../../../redux/modules/createFormSlice";
import fonts from "../../../../../styles/fonts";

const SurveyCoverForm = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.createForm.formList?.title);
  const summary = useSelector((state) => state.createForm.formList?.summary);

  const InputHandler = (event) => {
    const { name, value } = event.target;
    dispatch(
      changeField({
        form: "formList",
        key: name,
        value,
      })
    );
  };

  return (
    <Container>
      <Header>
        <TitleInput
          placeholder="Title을 작성해주세요"
          value={title}
          name="title"
          onChange={InputHandler}
          maxLength={24}
        ></TitleInput>
        <p>24자 이내로 작성해주세요 (현 {title?.length}자)</p>
      </Header>
      <textarea
        type="text"
        placeholder="설문에 관해 간단하게 설명해주세요.&#13;&#10;응답자를 위한 상품을 준비하셨다면,&#13;&#10;상품을 언제 어디로 발송한다는 안내 문구도 함께
        작성해주세요.
        "
        name="summary"
        value={summary}
        resize="none"
        onChange={InputHandler}
        maxLength={100}
      />
      <p>
        100자 이내로 작성해주세요 (현 {summary?.length}자) <br />
      </p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  textarea {
    margin-top: 4.9rem;
    padding: 1rem;
    width: 50rem;
    min-height: 13rem;

    ${fonts.Body1}
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.9rem;

    text-align: center;
    background-color: transparent;
    scroll-behavior: auto;
    resize: none;

    border: ${({ theme }) => `0.2rem solid ${theme.gray3}`};
    border-radius: 2rem;

    &::placeholder {
      ${fonts.Body3}
      color:${({ theme }) => theme.gray8}
    }
  }
  p {
    margin: 0.5rem 0 0 0;

    font-weight: 700;
    font-size: 1.2rem;

    color: ${({ theme }) => theme.pointColor};
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 7.5rem;
`;

const TitleInput = styled.input`
  width: 50rem;

  ${fonts.Body1}
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.9rem;

  text-align: center;
  border: none;
  border-bottom: ${({ theme }) => `0.2rem solid ${theme.gray3}`};
  &::placeholder {
    color: ${({ theme }) => theme.gray8};
  }
`;

export default SurveyCoverForm;

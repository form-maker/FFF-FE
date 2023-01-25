import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { changeField } from "../../../../../redux/modules/createFormSlice";
import fonts from "../../../../../styles/fonts";
import CreateFormCalender from "../calender/CreateFormCalender";

const SurveyCoverForm = () => {
  const dispatch = useDispatch();
  const wrapperRef = useRef();
  const title = useSelector((state) => state.createForm.formList?.title);
  const summary = useSelector((state) => state.createForm.formList?.summary);
  const achievement = useSelector(
    (state) => state.createForm.formList?.achievement
  );
  const [isStartDateToggleOpen, setIsStartDateToggleOpen] = useState(false);

  useEffect(() => {
    const clickOutSide = (event) => {
      if (
        isStartDateToggleOpen &&
        wrapperRef.current &&
        !wrapperRef.current?.contains(event.target)
      ) {
        setIsStartDateToggleOpen(false);
      }
    };
    document.addEventListener("mousedown", clickOutSide);
    return () => {
      document.removeEventListener("mousedown", clickOutSide);
    };
  }, [isStartDateToggleOpen]);

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

  const InputIncDecHandler = (num) => {
    if (achievement < 1 && num < 0) {
      alert("1보다 크게 설정해주세요");
    } else {
      dispatch(
        changeField({
          form: "formList",
          key: "achievement",
          value: +achievement + +num,
        })
      );
    }
  };

  const startDateToggleHandler = () => {
    setIsStartDateToggleOpen((prev) => !prev);
  };

  return (
    <Container>
      <Header>
        <TitleInput
          placeholder="Title을 작성해주세요"
          value={title}
          name="title"
          onChange={InputHandler}
        ></TitleInput>
      </Header>
      <textarea
        type="text"
        placeholder="설문에 관해 간단하게 설명해주세요"
        name="summary"
        value={summary}
        resize="none"
        onChange={InputHandler}
      />
      <AchievementContainer>
        <label>목표 인원을 설정해주세요</label>
        <NumberInputContainer>
          <button
            onClick={() => {
              InputIncDecHandler(-10);
            }}
          >
            -
          </button>
          <input
            type="number"
            min="1"
            max="3000"
            step="10"
            name="achievement"
            onChange={InputHandler}
            value={achievement}
          />
          <button
            onClick={() => {
              InputIncDecHandler(10);
            }}
          >
            +
          </button>
        </NumberInputContainer>
      </AchievementContainer>
      <CalenderSelectorContainer>
        <label onClick={startDateToggleHandler}>
          설문 기간을 설정해주세요 ▾
        </label>
        <CalenderContainer ref={wrapperRef}>
          {isStartDateToggleOpen && (
            <CreateFormCalender
              startDateToggleHandler={startDateToggleHandler}
            />
          )}
        </CalenderContainer>
      </CalenderSelectorContainer>
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
    width: 50rem;
    min-height: 13rem;

    ${fonts.Body3}
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;

    text-align: center;
    background-color: transparent;
    scroll-behavior: auto;
    resize: none;

    border: ${({ theme }) => `0.2rem solid ${theme.gray3}`};
    border-radius: 2rem;

    &::placeholder {
      ${fonts.Body3}
    }
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
  font-size: 2.4rem;
  line-height: 2.9rem;

  text-align: center;
  border: none;
  border-bottom: ${({ theme }) => `0.2rem solid ${theme.gray3}`};
  &::placeholder {
    color: ${({ theme }) => theme.color};
  }
`;

const CalenderSelectorContainer = styled.div`
  position: relative;
  margin-top: 1rem;
  label {
    ${fonts.Body1}
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;

    border-bottom: ${({ theme }) => `0.2rem solid ${theme.gray3}`};
    cursor: pointer;
  }
`;

const CalenderContainer = styled.div`
  position: absolute;
  top: 3rem;
  left: -3rem;
`;

const AchievementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  label {
    ${fonts.Body1}
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;

    border-bottom: ${({ theme }) => `0.2rem solid ${theme.gray3}`};
    cursor: pointer;
  }
`;

const NumberInputContainer = styled.div`
  display: flex;
  align-items: center;

  margin-top: 1rem;
  button {
    margin: 1rem;
    width: 4rem;
    height: 4rem;

    ${fonts.Body2}
    font-size: 3rem;
    font-weight: 100;

    background: ${({ theme }) => theme.mainColor};
    border: none;
    border-radius: 50%;
  }
  input {
    padding: 1rem;
    width: 5rem;

    text-align: center;
    border-radius: 0.5rem;
    border: ${({ theme }) => `0.2rem solid ${theme.gray3}`};
  }
`;

export default SurveyCoverForm;

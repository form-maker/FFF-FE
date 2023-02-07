import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Swal from "sweetalert2";
import { changeField } from "../../../../../redux/modules/createFormSlice";
import fonts from "../../../../../styles/fonts";

const GoalNumber = () => {
  const dispatch = useDispatch();
  const achievement = useSelector(
    (state) => state.createForm.formList?.achievement
  );

  const InputIncDecHandler = (num) => {
    if (achievement < 1 && num < 0) {
      Swal.fire({
        text: "1보다 크게 설정해주세요",
        confirmButtonColor: "#7AB0FE",
        confirmButtonText: "확인",
      });
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

  const InputHandler = (event) => {
    const { name, value } = event.target;
    dispatchEvent(
      changeField({
        form: "formList",
        key: name,
        value,
      })
    );
  };

  return (
    <div>
      <Title>
        <img src={process.env.PUBLIC_URL + "/img/number.svg"} alt="number" />
        <div>
          <h4>목표 인원을 설정해 주세요</h4>
          <p>설문 목표 달성 인원을 설정해 주세요</p>
        </div>
      </Title>
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

const NumberInputContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 2rem;
  button {
    display: flex;

    justify-content: center;
    align-items: center;

    margin: 0.5rem;
    width: 3rem;
    height: 3rem;

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

export default GoalNumber;

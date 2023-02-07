import React from "react";
import styled, { keyframes, css } from "styled-components";

const ToggleButton = ({ isRequired, onClick }) => {
  return (
    <>
      <SwitchLabel isChecked={isRequired} onClick={onClick}>
        <SwitchButton isChecked={isRequired} onClick={onClick} />
      </SwitchLabel>
    </>
  );
};

const ButtonSlide = keyframes`
  from {
  }
  to {
    left: calc(100%);
    transform: translateX(-100%);
    background-color: ${({ theme }) => theme.subColor1};
  }
`;

const SwitchButton = styled.span`
  content: "";
  position: absolute;
  left: 2px;
  width: 24px;
  height: 24px;
  border-radius: 45px;
  background: ${({ isChecked, theme }) =>
    isChecked ? theme.subHoverColor1 : theme.gray6};
  box-shadow: 5px 5px 12px rgba(144, 145, 146, 0.2);
  ${(props) =>
    props.isChecked &&
    css`
      animation-duration: 0.2s;
      animation-timing-function: ease-in;
      animation-name: ${ButtonSlide};
      animation-fill-mode: forwards;
    `}
`;

const SwitchLabel = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 48px;
  height: 16px;
  background-color: ${({ isChecked, theme }) =>
    isChecked ? theme.subColor1 : theme.gray3};
  border-radius: 100px;
  transition: background-color 0.2s;
  cursor: pointer;
`;

export default ToggleButton;

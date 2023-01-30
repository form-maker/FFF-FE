import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import fonts from "../../../styles/fonts";
import RoundButtonMediumWide from "../buttons/roundButtons/RoundButtonMediumWide";
import { showModal } from "../../../redux/modules/modalSlice";
import { useDispatch, useSelector } from "react-redux";

const Confirm = ({ confirmText }) => {
  const dispatch = useDispatch();
  const wrapperRef = useRef();
  const modalOpen = useSelector((state) => state.modal.modalOpen);

  useEffect(() => {
    const clickOutSide = (event) => {
      if (
        modalOpen &&
        wrapperRef.current &&
        !wrapperRef.current?.contains(event.target)
      ) {
        dispatch(showModal(false));
      }
    };
    document.addEventListener("mousedown", clickOutSide);
    return () => {
      document.removeEventListener("mousedown", clickOutSide);
    };
  }, [dispatch, modalOpen]);

  return (
    <Container ref={wrapperRef}>
      <Header>
        <div>✕</div>
      </Header>
      <Main>{confirmText}</Main>
      <Footer>
        <RoundButtonMediumWide buttonValue="확인" />
        <RoundButtonMediumWide buttonValue="취소" />
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  width: 30rem;
  height: 20rem;
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 1rem;
  background: gray;

  z-index: 5;
  padding: 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 0;
  div {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
  }
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 1rem;
  ${fonts.Body1}
  font-size: 1.2rem;
`;

const Footer = styled.div`
  padding-top: 1rem;
`;

export default Confirm;

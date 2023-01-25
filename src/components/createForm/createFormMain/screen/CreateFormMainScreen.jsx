import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import {
  selectedFormType,
  addForm,
  deleteQuestion,
} from "../../../../redux/modules/createFormSlice";
import fonts from "../../../../styles/fonts";
import CreateFormInput from "../components/CreateFormInput";
import QuestionForm from "../components/QuestionForm";
import TurnAPageButtons from "../components/TurnAPageButtons";
import SelectTypeList from "../components/selectType/SelectTypeList";
import useToggleShow from "../../../common/hooks/useToggleShow";
import CreateFormPageNumber from "../components/CreateFormPageNumber";

const CreateFormMainScreen = () => {
  const dispatch = useDispatch();
  const currentPageNum = useSelector(
    (state) => state.createForm.currentPageNum
  );
  const currentQuestion = useSelector(
    (state) => state.createForm.formList?.questionList[currentPageNum - 2]
  );

  const questionId = useRef(1);
  const wrapperRef = useRef();
  const [isSelectToggleShow, setIsSelectToggleShow] = useState(false);

  useToggleShow({
    isSelectToggleShow,
    setIsSelectToggleShow,
    wrapperRef,
  });

  return (
    <Container>
      <Header>
        <div>
          <h5
            onClick={() => {
              dispatch(selectedFormType("NEW_FORM"));
              dispatch(addForm({ questionId: questionId.current }));
              questionId.current += 1;
            }}
          >
            새 설문 추가하기 +
          </h5>
          <div
            onClick={() => {
              setIsSelectToggleShow((prev) => !prev);
            }}
          >
            설문 개요 작성
            <ToggleIcon
              src={process.env.PUBLIC_URL + "/img/toggleIcon.svg"}
              alt="toggleIcon"
            />
          </div>
          {isSelectToggleShow && (
            <ToggleContainer ref={wrapperRef}>
              <SelectTypeList setIsSelectToggleShow={setIsSelectToggleShow} />
            </ToggleContainer>
          )}
        </div>
        {/* <img
          src={process.env.PUBLIC_URL + "/img/circleClose.svg"}
          alt="circleClose"
          onClick={() => {
            console.log(currentQuestion?.questionId);
            dispatch(deleteQuestion(currentQuestion?.questionId));
          }}
        /> */}
      </Header>
      <Main>
        <CreateFormInput />
        <QuestionForm />
        {/* <TurnAPageButtons /> */}
      </Main>
      <CreateFormPageNumber />
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 3.4rem 2.3rem 0 2.3rem;
  width: 100%;
  div {
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.4rem;

    color: ${({ theme }) => theme.pointColor2};
    cursor: pointer;
  }
  h5 {
    margin: 0;
    ${fonts.Body1}
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.8rem;

    cursor: pointer;
  }
  img {
    width: 3rem;
    height: 3rem;
  }
`;

const ToggleContainer = styled.div`
  position: absolute;
  top: 7.4rem;
  left: 1.4rem;
  z-index: 1;
`;

const ToggleIcon = styled.img`
  margin-left: 1.9rem;
  width: 1.4rem;
`;

const Main = styled.div`
  position: relative;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default CreateFormMainScreen;

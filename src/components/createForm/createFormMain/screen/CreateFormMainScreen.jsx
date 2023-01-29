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
import SelectTypeList from "../../createFormSide/components/selectType/SelectTypeList";
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

  const selectedFormType = useSelector(
    (state) => state.createForm.selectedFormType
  );

  const test = useSelector((state) => state.createForm);

  console.log(test);

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
          {/* <h5
            onClick={() => {
              dispatch(selectedFormType("NEW_FORM"));
              dispatch(addForm({ questionId: questionId.current }));
              questionId.current += 1;
            }}
          >
            새 설문 추가하기 +
          </h5> */}

          {selectedFormType === "COVER" ? (
            <span>표지 페이지</span>
          ) : (
            <div
              onClick={() => {
                setIsSelectToggleShow((prev) => !prev);
              }}
            >
              <span>설문지 타입 변경</span>
              <ToggleIcon
                src={process.env.PUBLIC_URL + "/img/toggleIcon.svg"}
                alt="toggleIcon"
              />
            </div>
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
      {isSelectToggleShow && (
        <ToggleContainer ref={wrapperRef}>
          <SelectTypeList />
        </ToggleContainer>
      )}
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
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 3.4rem 2.3rem 0 2.3rem;
  width: 100%;
  div {
    cursor: pointer;
    span {
      font-weight: 700;
      font-size: 2rem;
      line-height: 2.4rem;

      color: ${({ theme }) => theme.pointColor2};
    }
  }
`;
const ToggleIcon = styled.img`
  margin-left: 1.9rem;
  width: 1.2rem;
`;

const ToggleContainer = styled.div`
  position: absolute;
  top: 7rem;
  right: 1.5rem;
  z-index: 3;
`;

const Main = styled.div`
  position: relative;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default CreateFormMainScreen;

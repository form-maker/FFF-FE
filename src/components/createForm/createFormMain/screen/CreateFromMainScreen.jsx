import React, { useRef, useState } from "react";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";
import CreateFormInput from "../components/CreateFormInput";
import QuestionForm from "../components/QuestionForm";
import TurnAPageButtons from "../components/TurnAPageButtons";
import { useSelector, useDispatch } from "react-redux";
import {
  selectedFormType,
  addForm,
} from "../../../../redux/modules/createFormSlice";
import SelectTypeList from "../components/selectType/SelectTypeList";

const CreateFromMainScreen = () => {
  const [isSelectToggleShow, setIsSelectToggleShow] = useState(false);
  const questionId = useRef(1);
  const dispatch = useDispatch();

  const questionLength = useSelector(
    (state) => state.createForm.formList.questionList
  ).length;
  const currentPageNum = useSelector(
    (state) => state.createForm.currentPageNum
  );
  return (
    <Container>
      <Header>
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
          <ToggleContainer>
            <SelectTypeList setIsSelectToggleShow={setIsSelectToggleShow} />
          </ToggleContainer>
        )}

        <h5
          onClick={() => {
            dispatch(selectedFormType("NEW_FORM"));
            dispatch(addForm({ questionId: questionId.current }));
            questionId.current += 1;
          }}
        >
          새 설문 추가하기 +
        </h5>
      </Header>
      <Main>
        <CreateFormInput />
        <QuestionForm />
        <TurnAPageButtons />
      </Main>
      <Bottom>
        <p>
          {currentPageNum}/{questionLength + 1}
        </p>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.4rem 2.3rem 0 2.3rem;
  position: relative;
  div {
    color: ${({ theme }) => theme.pointColor2};
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.4rem;
    cursor: pointer;
  }
  h5 {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.8rem;
    ${fonts.Body1}
    margin: 0;
    cursor: pointer;
  }
`;

const ToggleContainer = styled.div`
  position: absolute;
  top: 7.4rem;
  left: 1.4rem;
  z-index: 1;
`;

const ToggleIcon = styled.img`
  width: 1.4rem;
  margin-left: 1.9rem;
`;

const Main = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Bottom = styled.div`
  margin-bottom: 3.1rem;
  display: flex;
  justify-content: center;
  ${fonts.Body3}
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;

export default CreateFromMainScreen;

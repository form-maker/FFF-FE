import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";
import RoundButtonMedium from "../../../common/buttons/roundButtons/RoundButtonMedium";
import CreateFormInput from "../components/CreateFormInput";
import QuestionForm from "../components/QuestionForm";
import TurnAPageButtons from "../components/TurnAPageButtons";
import { useSelector, useDispatch } from "react-redux";
import {
  selectedFormType,
  addForm,
  deleteQuestion,
} from "../../../../redux/modules/createFormSlice";
import { baseURLApi } from "../../../../core/api";

const CreateFromMainScreen = () => {
  const questionId = useRef(1);
  const dispatch = useDispatch();
  const questionType = useSelector(
    (state) => state.createForm.selectedFormType
  );
  const questionLength = useSelector(
    (state) => state.createForm.formList.questionList
  ).length;
  const currentPageNum = useSelector(
    (state) => state.createForm.currentPageNum
  );
  const currentQuestionId = useSelector(
    (state) =>
      state.createForm.formList.questionList.length !== 0 &&
      state.createForm.formList.questionList[currentPageNum - 2]["questionId"]
  );
  const survey = useSelector((state) => state.createForm.formList);

  const postClickHandler = async () => {
    try {
      await baseURLApi.post("survey", survey);
      alert("등록이 완료 되었습니다.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Header>
        {questionType !== "Cover" && (
          <>
            <RoundButtonMedium
              buttonValue="등록하기"
              onClick={postClickHandler}
            ></RoundButtonMedium>
            <RoundButtonMedium
              buttonValue="문항삭제"
              onClick={() => {
                questionLength !== 0 &&
                  dispatch(deleteQuestion(currentQuestionId));
              }}
            ></RoundButtonMedium>
          </>
        )}

        <h5>🔥설문 조사 커버 페이지 제작중</h5>
      </Header>
      <Main>
        <CreateFormInput />
        <ArrowButtonContainer>
          <TurnAPageButtons />
        </ArrowButtonContainer>
        <QuestionForm />
      </Main>
      <Bottom>
        <p>
          {currentPageNum}/{questionLength + 1}
        </p>
        <RoundButtonMedium
          buttonValue="문항추가"
          onClick={() => {
            dispatch(selectedFormType("NewForm"));
            dispatch(addForm({ questionId: questionId.current }));
            questionId.current += 1;
          }}
        ></RoundButtonMedium>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  padding-left: 25.5rem;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  margin-top: 5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 2rem;
  h5 {
    margin-right: 5rem;
    ${fonts.Body1}
  }
`;

const Main = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  margin-top: 5rem;
  flex-direction: column;
  align-items: center;
`;

const ArrowButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const Bottom = styled.div`
  margin-bottom: 5rem;
  display: flex;
  padding-right: 2rem;
  justify-content: flex-end;
`;

export default CreateFromMainScreen;

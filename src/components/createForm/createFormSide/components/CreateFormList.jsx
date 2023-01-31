import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import {
  goClickPage,
  goClickCover,
} from "../../../../redux/modules/createFormSlice";
import fonts from "../../../../styles/fonts";
import RoundButtonMediumWide from "../../../common/buttons/roundButtons/RoundButtonMediumWide";
import useToggleShow from "../../../common/hooks/useToggleShow";
import CreateFormFinalSelect from "../../createFormMain/components/CreateFormFinalSelect";
import CreateFormCard from "./CreateFormCard";
import SelectTypeList from "./selectType/SelectTypeList";

const CreateFormList = () => {
  const dispatch = useDispatch();
  const currentPageNum = useSelector(
    (state) => state.createForm?.currentPageNum
  );
  const questionList = useSelector(
    (state) => state.createForm.formList?.questionList
  );
  const form = useSelector((state) => state?.createForm);

  const goClickPageHandler = (questionId) => {
    let questionPage =
      questionList.findIndex(
        (question) => question?.questionId === questionId
      ) + 2;
    dispatch(goClickPage(questionPage));
  };

  const finalSelectPopHandler = () => {
    setFinalSelectPop(true);
  };

  const [finalSelectPop, setFinalSelectPop] = useState(false);
  const [isSelectToggleShow, setIsSelectToggleShow] = useState(false);
  const wrapperRef = useRef();

  useToggleShow({
    isSelectToggleShow,
    setIsSelectToggleShow,
    wrapperRef,
  });

  return (
    <Container>
      <MainContainer>
        <PlusContainer>
          <Button
            onClick={() => {
              setIsSelectToggleShow((prev) => !prev);
            }}
          >
            ➕
          </Button>
          {isSelectToggleShow && (
            <ToggleContainer ref={wrapperRef}>
              <SelectTypeList
                setIsSelectToggleShow={setIsSelectToggleShow}
                isCreateForm={true}
              />
            </ToggleContainer>
          )}
        </PlusContainer>
        <SurveyListContainer>
          <CreateFormCard
            imgName="COVER"
            index={-1}
            title={form.formList?.title}
            onClick={() => {
              dispatch(goClickCover(1));
            }}
            isCurrentPageNum={currentPageNum === 1}
            isCover="true"
          />
          {questionList?.map((question, index) => (
            <CreateFormCard
              key={index}
              imgName={question.questionType}
              index={index}
              title={question.questionTitle}
              questionId={question.questionId}
              onClick={() => {
                goClickPageHandler(question.questionId);
              }}
              isCurrentPageNum={currentPageNum === index + 2}
            />
          ))}
        </SurveyListContainer>
      </MainContainer>
      <BottomContainer>
        <RoundButtonMediumWide
          buttonValue="등록하기"
          background="subColor1"
          width="16.4rem"
          onClick={() => {
            finalSelectPopHandler();
            // postClickHandler();
          }}
        />
      </BottomContainer>
      {finalSelectPop && (
        <CreateFormFinalSelect
          closePop={() => {
            setFinalSelectPop(false);
          }}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 3.8rem;
  width: 25rem;
  height: 100%;
  ${fonts.Body1}

  background: ${({ theme }) => theme.sideColor2};
  border: 1px solid #d9d9d9;
  border-radius: 0px 5px 5px 0px;
`;

const MainContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 17.6rem;
  height: 60%;
`;

const PlusContainer = styled.div`
  position: relative;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  ${fonts.Body1}
  font-weight: 600;
  font-size: 2rem;
  line-height: 1.7rem;

  width: 100%;
  height: 2.93rem;

  background: #f5f5f5;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
`;

const ToggleContainer = styled.div`
  position: absolute;
  top: 4rem;
  z-index: 1;
`;

const SurveyListContainer = styled.div`
  flex: 1;
  margin-top: 2rem;
  width: 100%;
  overflow-y: auto;
`;

const BottomContainer = styled.div`
  padding: 3rem auto;
  margin-top: 2.5rem;
`;

export default CreateFormList;

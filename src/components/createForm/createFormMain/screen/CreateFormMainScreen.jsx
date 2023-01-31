import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import CreateFormInput from "../components/CreateFormInput";
import QuestionForm from "../components/QuestionForm";
import SelectTypeList from "../../createFormSide/components/selectType/SelectTypeList";
import useToggleShow from "../../../common/hooks/useToggleShow";
import CreateFormPageNumber from "../components/CreateFormPageNumber";
import fonts from "../../../../styles/fonts";

const CreateFormMainScreen = () => {
  const selectedFormType = useSelector(
    (state) => state.createForm.selectedFormType
  );

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
      </Header>
      {isSelectToggleShow && (
        <ToggleContainer ref={wrapperRef}>
          <SelectTypeList />
        </ToggleContainer>
      )}
      <Main>
        <CreateFormInput />
        <QuestionForm />
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
  ${fonts.Body1}
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
      font-size: 1.6rem;
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

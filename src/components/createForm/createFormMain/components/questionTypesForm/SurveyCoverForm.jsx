import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changeField } from "../../../../../redux/modules/createFormSlice";

const SurveyCoverForm = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.createForm.formList.title);
  const summary = useSelector((state) => state.createForm.formList.summary);
  const startedAt = useSelector((state) => state.createForm.formList.startedAt);
  const endedAt = useSelector((state) => state.createForm.formList.endedAt);
  // const achievement = useSelector(
  //   (state) => state.createForm.formList.achievement
  // );

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

  return (
    <Container>
      <Header>
        <TitleInput
          placeholder="제목을 작성해주세요"
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
        onChange={InputHandler}
        resize="none"
      />
      <div>
        <label>설문 시작일</label>
        <input
          type="date"
          value={startedAt}
          name="startedAt"
          onChange={InputHandler}
        />
      </div>
      <div>
        <label>설문 마감일</label>
        <input
          type="date"
          value={endedAt}
          name="endedAt"
          onChange={InputHandler}
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 3rem;
  textarea {
    background-color: transparent;
    color: gray;
    width: 100%;
    border: 1px solid black;
    font-size: 18px;
    resize: none;
    min-height: 13rem;
    scroll-behavior: auto;
    &::placeholder {
      color: gray;
    }
    div {
      display: flex;
    }
  }
`;

const Header = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleInput = styled.input`
  font-size: 3rem;
  width: 50rem;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.fontColor};
`;

export default SurveyCoverForm;

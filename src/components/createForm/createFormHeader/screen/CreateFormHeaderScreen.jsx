import React from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { __postForm } from "../../../../redux/modules/createFormSlice";
import fonts from "../../../../styles/fonts";
import RoundButtonMedium from "../../../common/buttons/roundButtons/RoundButtonMedium";

const CreateFormHeaderScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const survey = useSelector((state) => state.createForm?.formList);
  const title = useSelector((state) => state.createForm?.formList?.title);

  const postClickHandler = async () => {
    batch(() => {
      dispatch(__postForm(survey));
      navigate("/mypage");
    });
  };

  return (
    <Container>
      <SubContainer>
        <div>{title === "" ? "Title을 작성해주세요" : title}</div>
        <RoundButtonMedium
          buttonValue="등록하기"
          background="subColor1"
          margin="0"
          onClick={postClickHandler}
        />
      </SubContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 4.2rem;
  width: 100%;
  height: 5rem;

  background-color: ${({ theme }) => theme.backgroundColor};
  border-bottom: 1px solid #e1e1e1;
  z-index: 1;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 3rem;
  width: 100%;
  min-width: 800px;
  max-width: 1200px;
  div {
    ${fonts.Body1}
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
  }
`;

export default CreateFormHeaderScreen;

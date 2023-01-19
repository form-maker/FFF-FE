import React from "react";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";
import RoundButtonMedium from "../../../common/buttons/roundButtons/RoundButtonMedium";
import { baseURLApi } from "../../../../core/api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateFormHeaderScreen = () => {
  const navigate = useNavigate();
  const survey = useSelector((state) => state.createForm.formList);
  const title = useSelector((state) => state.createForm.formList.title);

  const postClickHandler = async () => {
    try {
      await baseURLApi.post("survey", survey);
      alert("등록이 완료 되었습니다.");
      navigate("/mypage");
    } catch (error) {
      console.log(error);
      alert(error.response.data.msg);
    }
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
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e1e1e1;
  height: 5rem;
  padding: 0 4.2rem;
`;
const SubContainer = styled.div`
  width: 100%;
  min-width: 800px;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;

  div {
    ${fonts.Body1}
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
  }
`;

export default CreateFormHeaderScreen;

import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import styled from "styled-components";

import fonts from "../../../../styles/fonts";
import RoundButtonMedium from "../../../common/buttons/roundButtons/RoundButtonMedium";

const MyPageTitle = () => {
  const navigate = useNavigate();
  const username = useAppSelector(
    (state) => state.myPageCardList.myPageCardList?.username
  );

  const test = useAppSelector((state) => state.myPageCardList);

  console.log(test);

  return (
    <Container>
      <p>마이페이지</p>
      <h1>반갑습니다. {username}님!</h1>
      <RoundButtonMedium
        buttonValue="+ 설문 제작하기"
        margin="5.5rem 0 0 0"
        background="subColor1"
        onClick={() => {
          navigate("/createform");
        }}
        fontSize={undefined}
        fontWeight={undefined}
        height={undefined}
        borderRadius={undefined}
      />
    </Container>
  );
};

const Container = styled.div`
  p {
    ${fonts.Body3}
    margin: 0;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
  }
  h1 {
    ${fonts.Body1}
    margin: 0;
    margin-top: 0.7rem;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.9rem;
  }
`;

export default MyPageTitle;

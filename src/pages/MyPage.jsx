import React from "react";
import styled from "styled-components";

import CanNotBeUsedForMobile from "../components/common/canNotBeUsedForMobile/CanNotBeUsedForMobile";
import MyPageContentScreen from "../components/myPage/myPageContent/screen/MyPageContentScreen";
import MyPageTitleScreen from "../components/myPage/myPageTitle/screen/MyPageTitleScreen";

const MyPage = () => {
  return (
    <Container>
      <Mobile>
        <CanNotBeUsedForMobile pageText="마이페이지" />
      </Mobile>
      <DeskTop>
        <MyPageTitleScreen />
        <MyPageContentScreen />
      </DeskTop>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
`;

const Mobile = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 500px) {
    display: none;
  }
`;

const DeskTop = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export default MyPage;

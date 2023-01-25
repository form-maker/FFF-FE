import React from "react";
import styled from "styled-components";

import MyPageContentScreen from "../components/myPage/myPageContent/screen/MyPageContentScreen";
import MyPageTitleScreen from "../components/myPage/myPageTitle/screen/MyPageTitleScreen";

const MyPage = () => {
  return (
    <Container>
      <MyPageTitleScreen />
      <MyPageContentScreen />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-width: 800px;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
`;

export default MyPage;

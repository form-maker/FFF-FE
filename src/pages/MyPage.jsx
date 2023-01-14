import React from "react";
import MyPageContentScreen from "../components/myPage/myPageContent/screen/MyPageContentScreen";
import MyPageTitleScreen from "../components/myPage/myPageTitle/screen/MyPageTitleScreen";
import styled from "styled-components";

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
`;

export default MyPage;

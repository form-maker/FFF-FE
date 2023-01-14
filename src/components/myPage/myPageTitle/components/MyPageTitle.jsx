import React from "react";
import styled from "styled-components";

const MyPageTitle = () => {
  return (
    <Container>
      <p>마이페이지</p>
      <h1>반갑습니다. 안수빈님!</h1>
    </Container>
  );
};

const Container = styled.div`
  p {
    margin: 0;
  }
  h1 {
    margin: 0;
  }
`;

export default MyPageTitle;

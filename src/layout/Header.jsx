import React from "react";
import styled from "styled-components";
import NoOutLineSmall from "../components/common/buttons/noOutLineButtons/NoOutLineSmall";
import NoOutLineMedium from "../components/common/buttons/noOutLineButtons/NoOutLineMedium";

const Header = () => {
  return (
    <Container>
      <div>
        <div>
          <NoOutLineMedium buttonValue="폼폼폼" />
        </div>
        <div>
          <NoOutLineSmall buttonValue="진행중인 폼" />
          <NoOutLineSmall buttonValue="폼 제작하기" />
        </div>
        <div>
          <NoOutLineSmall buttonValue="로그인" />
          <NoOutLineSmall buttonValue="회원가입" />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-width: 800px;
  max-width: 1200px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem;
  }
`;

export default Header;

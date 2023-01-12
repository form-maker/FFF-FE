import React from "react";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";
import RoundButtonMedium from "../../../common/buttons/roundButtons/RoundButtonMedium";

const PageTitle = () => {
  return (
    <Container>
      <h1>세상의 폼폼폼</h1>
      <p>설문에 참여하고 이벤트에 응모해 보세요</p>
      <div>
        <RoundButtonMedium buttonValue="설문 참여하기" margin="0 0.85rem 0 0" />
        <RoundButtonMedium
          buttonValue="설문 제작하기"
          margin="0 0 0 0.85rem "
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  h1 {
    margin: 0;
    padding: 0;
    ${fonts.H1}
  }
  p {
    ${fonts.Body2}
  }
`;

export default PageTitle;
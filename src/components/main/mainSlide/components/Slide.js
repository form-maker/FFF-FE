import React from "react";
import styled from "styled-components";
import RoundButton from "../../../common/buttons/RoundButton";

const Slide = () => {
  return (
    <Container>
      <Img>이미지</Img>
      <div>
        <h1>
          세상에서 가장 <br />
          몽글몽글한 설문조사
        </h1>
        <p>설문에 참여하고 이벤트에 응모해보세요</p>
        <div>
          <RoundButton buttonValue="설문 참여하기" margin="0 0.5rem 0 0" />
          <RoundButton buttonValue="설문 제작하기" />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 20rem;
  justify-content: center;
  align-items: center;
  div {
    margin: 1rem;
    h1 {
      margin: 0;
      font-size: 1.5rem;
    }
    p {
      margin: 0.2rem;
      font-size: 0.8rem;
    }
    div {
      margin: 1rem 0;
    }
  }
`;

const Img = styled.div`
  width: 14rem;
`;

export default Slide;

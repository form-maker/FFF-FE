import React from "react";
import styled from "styled-components";
import fonts from "../../../../styles/fonts";
import RoundButtonMedium from "../../../common/buttons/roundButtons/RoundButtonMedium";

const MySurveySummeryCard = ({
  title,
  createdAt,
  participant,
  achievement,
  status,
  achievementRate,
  totalQuestion,
  onClick,
}) => {
  // 랜덤 색상 배정
  const backgroundColor = ["#BBE0FA", "#B0D1FF", "#F6EAFD", "#CEDFFF"];
  const getRandom = (min, max) =>
    Math.floor(Math.random() * (max - min) + min) - 1;
  let randomColor = backgroundColor[getRandom(1, backgroundColor.length + 1)];

  return (
    <Container backgroundColor={randomColor} onClick={onClick}>
      <TitleContainer>
        <h3>{title}</h3>
        <p>생성일: {createdAt}</p>
      </TitleContainer>

      <DetailContainer>
        <div>
          <h5>전체 참여자 수</h5>
          <h4>
            {participant}/ <span>{achievement}명</span>
          </h4>
        </div>
        <div>
          <h5>상태</h5>
          <h4>
            {status === "IN_PROCEED" && "진행중"}
            {status === "NOT_START" && "진행전"}
            {status === "DONE" && "완료"}
          </h4>
        </div>
        <div>
          <h5>첨여 달성도</h5>
          <h4>{achievementRate}%</h4>
        </div>
        <div>
          <h5>문항수</h5>
          <h4>{totalQuestion}</h4>
        </div>
      </DetailContainer>
      <ButtonContainer>
        <RoundButtonMedium
          buttonValue="수정하기"
          background="subColor1"
        ></RoundButtonMedium>
        <RoundButtonMedium
          buttonValue="결과보기"
          background="subColor1"
        ></RoundButtonMedium>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 2.4rem 3.7rem;
  border-radius: 2.1rem;

  background: ${({ theme }) => theme.backgroundColor};
  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-bottom: 3.5rem;
  cursor: pointer;
  div {
    margin: 0;
  }
`;

const TitleContainer = styled.div`
  width: 15.3rem;
  margin: 0;
  h3 {
    ${fonts.Body1}
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 1.9rem;
    margin: 0;
  }
  p {
    ${fonts.Body3}
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
    margin: 0;
    margin-top: 0.7rem;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 56.9rem;
  div {
    text-align: center;
    h5 {
      ${fonts.Body5}
      font-weight: 500;
      font-size: 1.1rem;
      line-height: 1.3rem;
      margin: 0;
    }
    h4 {
      span {
        ${fonts.Body5}
      }
      ${fonts.Body1}
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 1.8rem;
      margin: 0;
      margin-top: 0.7rem;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MySurveySummeryCard;

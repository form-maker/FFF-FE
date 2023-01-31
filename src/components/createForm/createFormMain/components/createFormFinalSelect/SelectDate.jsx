import React from "react";
import styled from "styled-components";
import CreateFormCalender from "../calender/CreateFormCalender";

const SelectDate = () => {
  return (
    <div>
      <Title>
        <img
          src={process.env.PUBLIC_URL + "/img/calender.svg"}
          alt="calender"
        />
        <div>
          <h4>날짜를 설정해 주세요</h4>
          <p>설문 마감 일을 설정해 주세요</p>
        </div>
      </Title>
      <CalendarBox>
        <CreateFormCalender />
      </CalendarBox>
    </div>
  );
};

const Title = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 5rem;
  }
  div {
    margin-left: 1rem;
    h4 {
      font-size: 1.6rem;
      margin: 0;
    }
    p {
      font-size: 1.2rem;
      margin-top: 0.4rem;
      margin-bottom: 0;
    }
  }
`;

const CalendarBox = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 2rem;
`;

export default SelectDate;

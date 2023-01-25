import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { __getMyPageCardList } from "../../../../redux/modules/myPageListSlice";
import StatusButton from "./StatusButton";

const MyPageCategory = () => {
  const status = useSelector((state) => state.myPageCardList.status);
  console.log(status);

  const dispatch = useDispatch();

  const getStatusHandler = ({ page, size, sortBy, status }) => {
    dispatch(
      __getMyPageCardList({
        page: page,
        size: size,
        sortBy: sortBy,
        status: status,
      })
    );
  };

  return (
    <Container>
      <MainCategoryContainer>
        <StatusButton
          onClick={() => {
            getStatusHandler({
              page: 1,
              size: 9,
              sortBy: "최신순",
              status: "IN_PROCEED",
            });
          }}
          border={status === "IN_PROCEED" ? "subColor1" : "backgroundColor"}
          buttonValue="현재 진행중인 폼"
        ></StatusButton>
        <StatusButton
          onClick={() => {
            getStatusHandler({
              page: 1,
              size: 9,
              sortBy: "최신순",
              status: "NOT_START",
            });
          }}
          border={status === "NOT_START" ? "subColor1" : "backgroundColor"}
          buttonValue="진행 전 폼"
        ></StatusButton>
        <StatusButton
          onClick={() => {
            getStatusHandler({
              page: 1,
              size: 9,
              sortBy: "최신순",
              status: "DONE",
            });
          }}
          border={status === "DONE" ? "subColor1" : "backgroundColor"}
          buttonValue="진행 완료된 폼"
        ></StatusButton>
      </MainCategoryContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const MainCategoryContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default MyPageCategory;

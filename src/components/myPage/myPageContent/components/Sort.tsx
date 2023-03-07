import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";

import { __getMyPageCardList } from "../../../../redux/modules/myPageListSlice";
import RoundButtonSmall from "../../../common/buttons/roundButtons/RoundButtonSmall";

const Sort = () => {
  const dispatch = useAppDispatch();

  const selectedCategory = useAppSelector(
    (state) => state.myPageCardList?.selectedCategory
  );
  const status = useAppSelector((state) => state.myPageCardList.status);

  interface category {
    page: number;
    size: number;
    sortBy: string;
    status?: string;
  }

  const getCategoryHandler = ({ page, size, sortBy }: category) => {
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
    <div>
      <RoundButtonSmall
        buttonValue="최신순"
        margin="0 0.5rem 0 0"
        background={
          selectedCategory === "최신순" ? "subColor1" : "backgroundColor"
        }
        onClick={() => {
          getCategoryHandler({
            page: 1,
            size: 9,
            sortBy: "최신순",
            status: status,
          });
        }}
        fontSize={undefined}
        fontWeight={undefined}
      />
      <RoundButtonSmall
        buttonValue="마감 임박순"
        margin="0 0.5rem 0 0.5rem"
        background={
          selectedCategory === "마감임박순" ? "subColor1" : "backgroundColor"
        }
        onClick={() => {
          getCategoryHandler({
            page: 1,
            size: 9,
            sortBy: "마감임박순",
            status: status,
          });
        }}
        fontSize={undefined}
        fontWeight={undefined}
      />
      <RoundButtonSmall
        buttonValue="참여순"
        margin="0 0 0 0.5rem"
        background={
          selectedCategory === "참여자수" ? "subColor1" : "backgroundColor"
        }
        onClick={() => {
          getCategoryHandler({
            page: 1,
            size: 9,
            sortBy: "참여자수",
            status: status,
          });
        }}
        fontSize={undefined}
        fontWeight={undefined}
      />
    </div>
  );
};

export default Sort;

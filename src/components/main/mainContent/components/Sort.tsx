import React from "react";

import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { __getMainCardList } from "../../../../redux/modules/mainCardListSlice";
import RoundButtonSmall from "../../../common/buttons/roundButtons/RoundButtonSmall";

const Sort = () => {
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector(
    (state) => state.mainCardList?.selectedCategory
  );

  const test = useAppSelector((state) => state.mainCardList);
  console.log(test);

  interface category {
    page: number;
    size: number;
    sortBy: string;
  }
  console.log();

  const getCategoryHandler = ({ page, size, sortBy }: category) => {
    dispatch(__getMainCardList({ page: page, size: size, sortBy: sortBy }));
  };

  return (
    <div>
      <RoundButtonSmall
        buttonValue="최신순"
        margin="0 0.6rem 0 0 "
        onClick={() => {
          getCategoryHandler({ page: 1, size: 9, sortBy: "최신순" });
        }}
        background={selectedCategory === "최신순" && "subColor1"}
        fontSize={undefined}
        fontWeight={undefined}
      />
      <RoundButtonSmall
        buttonValue="마감 임박순"
        margin="0 0.6rem 0 0.6rem"
        onClick={() => {
          getCategoryHandler({ page: 1, size: 9, sortBy: "마감임박순" });
        }}
        background={selectedCategory === "마감임박순" && "subColor1"}
        fontSize={undefined}
        fontWeight={undefined}
      />
    </div>
  );
};

export default Sort;
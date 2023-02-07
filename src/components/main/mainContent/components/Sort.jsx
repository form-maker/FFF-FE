import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { __getMainCardList } from "../../../../redux/modules/mainCardListSlice";
import RoundButtonSmall from "../../../common/buttons/roundButtons/RoundButtonSmall";

const Sort = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.mainCardList?.selectedCategory
  );

  const getCategoryHandler = ({ page, size, sortBy }) => {
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
      />
      <RoundButtonSmall
        buttonValue="마감 임박순"
        margin="0 0.6rem 0 0.6rem"
        onClick={() => {
          getCategoryHandler({ page: 1, size: 9, sortBy: "마감임박순" });
        }}
        background={selectedCategory === "마감임박순" && "subColor1"}
      />
    </div>
  );
};

export default memo(Sort);

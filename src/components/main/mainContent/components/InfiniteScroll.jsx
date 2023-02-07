import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";

import { __getMainCardList } from "../../../../redux/modules/mainCardListSlice";

const InfiniteScroll = () => {
  const dispatch = useDispatch();
  const mainCardList = useSelector((state) => state.mainCardList?.mainCardList);
  const page = useSelector((state) => state.mainCardList?.pageStatus);
  const selectedCategory = useSelector(
    (state) => state.mainCardList?.selectedCategory
  );
  const [ref, inView] = useInView();

  useEffect(() => {
    if (mainCardList?.length !== 0 && page?.next && inView) {
      console.log("첫 로딩 이후 무한 스크롤");
      dispatch(
        __getMainCardList({
          page: page?.page + 1,
          size: 9,
          sortBy: selectedCategory,
        })
      );
    }
  }, [
    mainCardList?.length,
    page?.next,
    page?.page,
    selectedCategory,
    dispatch,
    inView,
  ]);

  return <div ref={ref}></div>;
};

export default memo(InfiniteScroll);

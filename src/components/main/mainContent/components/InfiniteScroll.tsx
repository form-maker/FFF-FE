import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { useInView } from "react-intersection-observer";

import { __getMainCardList } from "../../../../redux/modules/mainCardListSlice";

const InfiniteScroll = () => {
  const dispatch = useAppDispatch();
  const mainCardList = useAppSelector(
    (state) => state.mainCardList?.mainCardList
  );
  const page = useAppSelector((state) => state.mainCardList?.pageStatus);
  const selectedCategory = useAppSelector(
    (state) => state.mainCardList?.selectedCategory
  );
  const [ref, inView] = useInView();

  useEffect(() => {
    if (mainCardList?.length !== 0 && page?.next && inView) {
      console.log("첫 로딩 이후 무한 스크롤");
      dispatch(
        __getMainCardList({
          page: page?.page ? page?.page + 1 : 1,
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

export default InfiniteScroll;

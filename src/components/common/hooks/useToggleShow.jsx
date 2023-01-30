import { useEffect } from "react";

const useToggleShow = ({
  isSelectToggleShow,
  setIsSelectToggleShow,
  wrapperRef,
}) => {
  useEffect(() => {
    const clickOutSide = (event) => {
      if (
        isSelectToggleShow &&
        wrapperRef.current &&
        !wrapperRef.current?.contains(event.target)
      ) {
        setIsSelectToggleShow(false);
      }
    };
    document.addEventListener("mousedown", clickOutSide);
    return () => {
      document.removeEventListener("mousedown", clickOutSide);
    };
  }, [isSelectToggleShow]);
};

export default useToggleShow;

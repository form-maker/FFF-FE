import React, { useState } from "react";

const useCopyClipBoard = () => {
  const [isCopy, setIsCopy] = useState(false);

  const onCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopy(true);
      alert(`설문조사링크 복사완료`);
      return true;
    } catch (error) {
      console.error(error);
      setIsCopy(false);

      return false;
    }
  };

  return [isCopy, onCopy];
};

export default useCopyClipBoard;

import { useState } from "react";
import Swal from "sweetalert2";

const useCopyClipBoard = (): any => {
  const [isCopy, setIsCopy] = useState(false);

  const onCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopy(true);
      Swal.fire({
        text: "설문조사링크 복사완료",
        icon: "warning",
        confirmButtonColor: "#7AB0FE",
        confirmButtonText: "확인",
      });
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

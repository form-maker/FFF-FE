import React from "react";
import { useSSE } from "react-hooks-sse";

const SSE = () => {
  const last = useSSE("total", {
    total: null,
  });

  console.log(JSON.parse(last.data?.total));
  console.log(last);

  return (
    <div aria-label="total">
      🔥 현재 {last.value ? last : "0"} 명이 설문을 참여 중입니다.
    </div>
  );
};

export default SSE;

import { rest } from "msw";

export const handlers = [
  // req : 매칭 요청에 대한 정보
  // res : 모의 응답을 생성하는 기능적 유틸리티
  // ctx : 모의 응답의 상태 코드, 헤더, 본문 등을 설정하는데 도움이 되는 함수 그룹
  rest.get(
    "http://localhost:5000/api/survey/main?sortBy=최신순&isAsc=True&page=2&size=2",
    (req, res, ctx) => {
      return res(
        ctx.json({
          statusCode: "200",
          msg: "조회 성공",
          data: [
            {
              surveyId: 1,
              title: "이거좀 해주세요",
              summary: "대충 이런 설문입니다.",
              deadLine: "2023.01.23", // D-day 를 표현
              createdAt: "2022.12.31",
            },
            {
              surveyId: 2,
              title: "이거좀 해주세요",
              summary: "대충 이런 설문입니다.",
              deadLine: "2023.01.23", // D-day 를 표현
              createdAt: "2022.12.31",
            },
            {
              surveyId: 3,
              title: "이거좀 해주세요",
              summary: "대충 이런 설문입니다.",
              deadLine: "2023.01.23", // D-day 를 표현
              createdAt: "2022.12.31",
            },
          ],
        })
      );
    }
  ),
];

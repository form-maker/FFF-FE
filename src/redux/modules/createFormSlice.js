import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  selectedFormType: "COVER",
  currentPageNum: 1,
  formList: {
    title: "",
    startedAt: "",
    endedAt: "",
    achievement: 20,
    groupList: [],
    summary: "",
    questionList: [],
  },
  error: null,
};

const createFormSlice = createSlice({
  name: "createForm",
  initialState,
  reducers: {
    changeField: (state, { payload: { form, key, value } }) => {
      state[form][key] = value;
    },
    initializeForm: (state) => ({
      state: initialState,
    }),
    selectedFormType(state, action) {
      state.selectedFormType = action.payload;
    },
    // 형식 추가
    addForm(state, action) {
      state.formList.questionList = [
        ...state.formList.questionList,
        action.payload,
      ];
      state.currentPageNum = state.currentPageNum + 1;
    },
    // 설문 전체의 제목 작성
    fillOutTitle(state, action) {
      state.formList.questionList = [
        ...state.formList.questionList,
        action.payload,
      ];
    },
    // 설문 전체의 제목 및 개요 작성
    fillOutQuestionTitleAndSummery(state, { payload: { key, value } }) {
      state.formList.questionList[state.currentPageNum - 2][key] = value;
    },
    // 질문 내용 채우기
    fillOutQuestion(state, action) {
      state.formList.questionList[state.currentPageNum - 2] = {
        ...state.formList.questionList[state.currentPageNum - 2],
        ...action.payload,
      };
    },
    // 질문 삭제하기
    deleteQuestion(state, action) {
      const id = action.payload;
      state.formList.questionList = state.formList.questionList.filter(
        (question) => {
          return question.questionId !== id;
        }
      );
      state.currentPageNum = state.currentPageNum - 1;
      state.selectedFormType =
        state.formList.questionList[state.currentPageNum - 2]["questionType"];
    },

    // 화살표 버튼
    goBack(state) {
      if (state.currentPageNum > 2) {
        state.currentPageNum = state.currentPageNum - 1;
        state.selectedFormType =
          state.formList.questionList[state.currentPageNum - 2]["questionType"];
      } else {
        state.currentPageNum = 1;
        state.selectedFormType = "COVER";
      }
    },
    goNext(state) {
      if (
        state.currentPageNum < state.formList.questionList?.length &&
        state.formList.questionList.length !== 0
      ) {
        state.currentPageNum = state.currentPageNum + 1;
        state.selectedFormType =
          state.formList?.questionList[state.currentPageNum - 2][
            "questionType"
          ];
      } else {
        state.currentPageNum = state.formList.questionList.length + 1;
        state.selectedFormType =
          state.formList.questionList[state.formList.questionList.length - 1][
            "questionType"
          ];
      }
    },
    goClickPage(state, action) {
      console.log(action.payload);
      state.currentPageNum = action.payload;
      console.log(current(state.formList?.questionList));
      state.selectedFormType =
        state.formList?.questionList[action.payload - 2]["questionType"];
    },
  },
});

export const {
  changeField,
  selectedFormType,
  fillOutQuestion,
  fillOutQuestionTitleAndSummery,
  deleteQuestion,
  addForm,
  goBack,
  goNext,
  goClickPage,
} = createFormSlice.actions;
export default createFormSlice.reducer;

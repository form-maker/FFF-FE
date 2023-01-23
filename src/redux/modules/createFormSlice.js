import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import { baseURLApi } from "../../core/api";

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
  formCreateSuccess: false,
};

export const __postForm = createAsyncThunk(
  "createForm/postForm",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApi.post("survey", payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const createFormSlice = createSlice({
  name: "createForm",
  initialState,
  reducers: {
    changeField: (state, { payload: { form, key, value } }) => {
      state[form][key] = value;
    },
    createFromInitialize: (state) => ({
      state: initialState,
    }),
    selectedFormType(state, action) {
      state.selectedFormType = action.payload;
    },
    // 형식 추가
    addForm(state, action) {
      state.formList.questionList = [
        ...state.formList?.questionList,
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
      state.currentPageNum = action.payload;
      state.selectedFormType =
        state.formList?.questionList[action.payload - 2]["questionType"];
    },
    goClickCover(state, action) {
      state.currentPageNum = 1;
      state.selectedFormType = "COVER";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(__postForm.fulfilled, (state, action) => {
      console.log(action.payload);
      if (action.payload.statusCode === 200) {
        state.formCreateSuccess = true;
        state = initialState;
      }
    });
    builder.addCase(__postForm.rejected, (state, action) => {
      console.log(current(action.payload));
    });
  },
});

export const {
  createFromInitialize,
  changeField,
  selectedFormType,
  fillOutQuestion,
  fillOutQuestionTitleAndSummery,
  deleteQuestion,
  addForm,
  goBack,
  goNext,
  goClickPage,
  goClickCover,
} = createFormSlice.actions;
export default createFormSlice.reducer;

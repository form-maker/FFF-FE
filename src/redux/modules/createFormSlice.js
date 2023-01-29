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
    giftList: [
      {
        giftName: "",
        giftSummary: "",
        giftIcon: "🎁",
        giftQuantity: 1,
      },
    ],
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
    changeField(state, { payload: { form, key, value } }) {
      state[form][key] = value;
    },
    changeGiftField(state, { payload: { index, key, value } }) {
      state.formList.giftList[index][key] = value;
      console.log(current(state.formList));
    },
    createFormInitialize(state) {
      state.selectedFormType = "COVER";
      state.currentPageNum = 1;
      state.formList = {
        title: "",
        startedAt: "",
        endedAt: "",
        achievement: 20,
        groupList: [],
        summary: "",
        questionList: [],
        giftList: [
          {
            giftName: "",
            giftSummary: "",
            giftIcon: "🎁",
            giftQuantity: 1,
          },
        ],
      };
      state.error = null;
      state.formCreateSuccess = false;
    },
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

    // 수정된 추가 방식
    selectNewForm(state, action) {
      state.formList.questionList = [
        ...state.formList?.questionList,
        action.payload,
      ];
      state.selectedFormType = action.payload.questionType;
      state.currentPageNum = state.formList?.questionList?.length + 1;
      console.log(current(state.formList));
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
      console.log(state.formList.questionList);
      state.currentPageNum = state.currentPageNum - 1;
      if (state.currentPageNum <= 2) {
        state.selectedFormType = "COVER";
      } else {
        state.selectedFormType =
          state.formList?.questionList[state.currentPageNum - 2][
            "questionType"
          ];
      }
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
        state.formList.questionList?.length !== 0
      ) {
        state.currentPageNum = state.currentPageNum + 1;
        state.selectedFormType =
          state.formList?.questionList[state.currentPageNum - 2][
            "questionType"
          ];
      } else {
        state.currentPageNum = state.formList.questionList?.length + 1;
        state.selectedFormType =
          state.formList.questionList[state.formList.questionList?.length - 1][
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
    getPrevForm(state, action) {
      state.selectedFormType = "COVER";
      state.currentPageNum = 1;
      state.formList = action.payload.formList;
      state.error = null;
      state.formCreateSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(__postForm.fulfilled, (state, action) => {
      console.log(action.payload);
      if (action.payload.statusCode === 200) {
        state.formCreateSuccess = true;
        alert("폼 제작 완료");
        state = initialState;
      }
    });
    builder.addCase(__postForm.rejected, (state, action) => {
      console.log(current(action.payload));
    });
  },
});

export const {
  createFormInitialize,
  changeField,
  changeGiftField,
  selectedFormType,
  fillOutQuestion,
  fillOutQuestionTitleAndSummery,
  deleteQuestion,
  addForm,
  goBack,
  goNext,
  goClickPage,
  goClickCover,
  getPrevForm,
  selectNewForm,
} = createFormSlice.actions;
export default createFormSlice.reducer;

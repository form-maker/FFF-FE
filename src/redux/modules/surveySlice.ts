import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { instanceApi } from "../../core/api";

interface survey {
  answer: iAnswer[];
  currentFormType: string;
  currentPageNum: number;
  question: iQuestion;
  questionIdList: [] | number[];
  required: boolean;
  survey: iSurvey;
  error: null | boolean;
}

interface iAnswer {
  descriptive: string;
  questionId: number;
  questionNum: number;
  questionType: string;
  selectValue: number[] | string[];
}

interface iQuestion {
  answerList?: Array<iAnswerNum>;
  participant?: number;
  questionId?: number;
  questionNum?: number;
  questionSummary?: string;
  questionTitle?: string;
  questionType?: string;
  required?: boolean;
  totalQuestion?: number;
  volume?: null | string | number;
}

interface iAnswerNum {
  answerNum: number;
  answerType: string;
  answerValue: string;
}

interface iSurvey {
  achievement?: number;
  createAt?: string;
  endedAt?: string;
  giftList?: Array<iGiftList>;
  participant?: number;
  questionIdList?: number[];
  questionList?: Array<iQuestionList>;
  startedAt?: string;
  status?: string;
  summary?: string;
  surveyId?: number;
  title?: number;
  totalTime?: number;
}

interface iGiftList {
  giftName: string;
  giftSummary: string;
  giftIcon: string;
  giftQuantity: number;
}

interface iQuestionList {
  questionId: number;
  questionNum: number;
  questionTitle: string;
  questionType: string;
}

const initialState = {
  currentPageNum: 1,
  currentFormType: "COVER",
  required: true,
  survey: {},
  questionIdList: [],
  question: {},
  answer: [],
  error: null,
} as survey;

export const __getSurvey = createAsyncThunk(
  "survey/getSurvey",
  async (payload: string | null, thunkAPI) => {
    try {
      const { data } = await instanceApi.get(`survey?surveyId=${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getSurveyQuestion = createAsyncThunk(
  "survey/getSurveyQuestion",
  async (payload: number, thunkAPI) => {
    try {
      const { data } = await instanceApi.get(`question?questionId=${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getBeforeSurveyQuestion = createAsyncThunk(
  "survey/getBeforeSurveyQuestion",
  async (payload: number, thunkAPI) => {
    try {
      const { data } = await instanceApi.get(`question?questionId=${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postSurvey = createAsyncThunk(
  "survey/postSurvey",
  async (
    payload: { surveyId: string | null; answerList: iAnswer[] },
    thunkAPI
  ) => {
    try {
      const { data } = await instanceApi.post(
        `survey/${payload.surveyId}/reply`,
        payload.answerList
      );
      console.log("post된것1");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const SurveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    pushAnswer: (state, action) => {
      state.answer[+state.currentPageNum - 2]["selectValue"] = [
        ...state.answer[state.currentPageNum - 2].selectValue,
        action.payload,
      ];
    },
    deleteAnswer: (state, { payload }: { payload: number }) => {
      state.answer[state.currentPageNum - 2].selectValue = state.answer[
        state.currentPageNum - 2
      ].selectValue.filter((Id: number) => Id !== payload);
    },
    changeAnswer: (state, action) => {
      state.answer[+state.currentPageNum - 2]["selectValue"] = [action.payload];
    },
    changeAnswerList: (state, action) => {
      state.answer[+state.currentPageNum - 2]["selectValue"] = action.payload;
    },
    changeDescriptive: (state, action) => {
      state.answer[+state.currentPageNum - 2]["descriptive"] = action.payload;
    },
    getCover: (state) => {
      state.currentPageNum = 1;
      state.currentFormType = "COVER";
    },
    goEnd: (state) => {
      state.currentPageNum = 0;
      state.currentFormType = "SURVEY_END";
    },
  },

  extraReducers: (builder) => {
    builder.addCase(__getSurvey.fulfilled, (state, action) => {
      state.currentPageNum = 1;
      state.currentFormType = "COVER";
      state.survey = action.payload.data;
      state.questionIdList = action.payload.data?.questionIdList;
      state.answer = action.payload.data?.questionIdList?.map(
        (id: number, index: number) => {
          return {
            questionId: id,
            questionNum: index + 1,
            questionType: "",
            selectValue: [],
            descriptive: "",
          };
        }
      );
    });
    builder.addCase(__getSurvey.rejected, (state, { payload }: any) => {
      console.log(payload.response?.status);
      if (payload.response?.status === 403) {
        Swal.fire({
          text: payload.response.data.msg,
          icon: "warning",
          confirmButtonColor: "#7AB0FE",
          confirmButtonText: "확인",
        });
        console.log(payload.response.data.msg);
        state.error = true;
      }
    });

    builder.addCase(__getSurveyQuestion.fulfilled, (state, action) => {
      state.question = action.payload.data;
      state.currentPageNum = state.currentPageNum + 1;
      state.currentFormType = action?.payload?.data?.questionType;
      if (action.payload?.data?.required) {
        state.required = action.payload?.data?.required;
      }
      state.answer[state.currentPageNum - 2]["questionType"] =
        action.payload.data.questionType;
    });
    builder.addCase(__getSurveyQuestion.rejected, (state, action) => {
      console.log(current(action.payload));
    });

    builder.addCase(
      __getBeforeSurveyQuestion.fulfilled,
      (state, { payload }) => {
        state.question = payload.data;
        state.currentPageNum = state.currentPageNum - 1;
        state.currentFormType = payload.data.questionType;
        console.log(state.answer);
      }
    );
    builder.addCase(__getBeforeSurveyQuestion.rejected, (state, action) => {
      console.log(current(action.payload));
    });

    builder.addCase(__postSurvey.fulfilled, (state, action) => {
      console.log(action.payload.msg);
      state = initialState;
    });
    builder.addCase(__postSurvey.rejected, (state, action) => {
      console.log(action.payload);
      state = initialState;
    });
  },
});
export const {
  pushAnswer,
  deleteAnswer,
  changeAnswer,
  changeAnswerList,
  changeDescriptive,
  getCover,
  goEnd,
} = SurveySlice.actions;
export default SurveySlice.reducer;

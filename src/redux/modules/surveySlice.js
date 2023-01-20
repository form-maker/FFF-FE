import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { instanceApi, baseURLApi } from "../../core/api";

const initialState = {
  currentPageNum: 1,
  currentFormType: "COVER",
  survey: {},
  questionIdList: [],
  question: {},
  answer: [],
  error: null,
};

export const __getSurvey = createAsyncThunk(
  "survey/getSurvey",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApi.get(`survey?surveyId=${payload}`);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getSurveyQuestion = createAsyncThunk(
  "survey/getSurveyQuestion",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApi.get(`question?questionId=${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getBeforeSurveyQuestion = createAsyncThunk(
  "survey/getBeforeSurveyQuestion",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApi.get(`question?questionId=${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postSurvey = createAsyncThunk(
  "survey/postSurvey",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApi.post(
        `survey/${payload.surveyId}/reply`,
        payload.answerList
      );
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
    deleteAnswer: (state, action) => {
      state.answer[state.currentPageNum - 2].selectValue = state.answer[
        state.currentPageNum - 2
      ].selectValue.filter((Id) => {
        return Id !== action.payload;
      });
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
    getCover: (state, action) => {
      state.currentPageNum = 1;
      state.currentFormType = "COVER";
    },
  },

  extraReducers: (builder) => {
    builder.addCase(__getSurvey.fulfilled, (state, action) => {
      state.survey = action.payload.data;
      state.questionIdList = action.payload.data.questionIdList;
      state.answer = action.payload.data.questionIdList?.map((id, index) => {
        return {
          questionId: id,
          questionNum: index + 1,
          questionType: "",
          selectValue: [],
          descriptive: "",
        };
      });
      console.log(state.answer);
    });
    builder.addCase(__getSurvey.rejected, (state, action) => {
      console.log(action.payload);
    });

    builder.addCase(__getSurveyQuestion.fulfilled, (state, action) => {
      state.question = action.payload.data;
      state.currentPageNum = state.currentPageNum + 1;
      state.currentFormType = action.payload.data.questionType;
      console.log(action.payload.data);
      state.answer[state.currentPageNum - 2]["questionType"] =
        action.payload.data.questionType;
    });
    builder.addCase(__getSurveyQuestion.rejected, (state, action) => {
      console.log(current(action.payload));
    });

    builder.addCase(__getBeforeSurveyQuestion.fulfilled, (state, action) => {
      state.question = action.payload.data;
      state.currentPageNum = state.currentPageNum - 1;
      state.currentFormType = action.payload.data.questionType;
      console.log(state.answer);
    });
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
} = SurveySlice.actions;
export default SurveySlice.reducer;

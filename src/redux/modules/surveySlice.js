import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceApi } from "../../core/api";

const initialState = {
  currentPageNum: 1,
  survey: {},
  questionIdList: [],
  question: {},
  error: null,
};

export const __getSurvey = createAsyncThunk(
  "survey/getSurvey",
  async (payload, thunkAPI) => {
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
  async (payload, thunkAPI) => {
    try {
      const { data } = await instanceApi.get(`question?questionId=${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const SurveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getSurvey.fulfilled, (state, action) => {
      state.survey = action.payload.data;
      state.questionIdList = action.payload.data.questionIdList;
    });
    builder.addCase(__getSurvey.rejected, (state, action) => {
      console.log(action.payload);
    });

    builder.addCase(__getSurveyQuestion.fulfilled, (state, action) => {
      state.question = action.payload;
    });
    builder.addCase(__getSurveyQuestion.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});
export const {} = SurveySlice.actions;
export default SurveySlice.reducer;

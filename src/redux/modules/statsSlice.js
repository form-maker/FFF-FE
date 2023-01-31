import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURLApi } from "../../core/api";

const initialState = {
  stats: [],
  error: null,
};

export const __getStats = createAsyncThunk(
  "stats/getStats",
  async ({ end, start, surveyId }, thunkAPI) => {
    try {
      const { data } = await baseURLApi.get(
        `survey/stats?end=${end}&start=${start}&surveyId=${surveyId}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteStats = createAsyncThunk(
  "stats/deleteStats",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURLApi.delete(`survey/${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getStats.fulfilled, (state, action) => {
      state.stats = action.payload.data;
    });
    builder.addCase(__getStats.rejected, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(__deleteStats.fulfilled, (state, action) => {
      // alert(action.payload.msg);
    });
    builder.addCase(__deleteStats.rejected, (state, action) => {
      console.log(action.payload);
      if (action.payload.statusCode === 403) {
        state.error = true;
      }
    });
  },
});
export const {} = statsSlice.actions;
export default statsSlice.reducer;

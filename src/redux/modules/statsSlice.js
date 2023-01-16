import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceApi } from "../../core/api";

const initialState = {
  stats: [],
  error: null,
};

export const __getStats = createAsyncThunk(
  "stats/getStats",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instanceApi.post(
        `survey/stats?end=2023-03-01&start=2023-01-21&surveyId=1`
      );
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
  },
});
export const {} = statsSlice.actions;
export default statsSlice.reducer;

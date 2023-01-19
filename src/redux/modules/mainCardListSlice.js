import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceApi } from "../../core/api";

const initialState = {
  mainCardList: [],
  selectedCategory: "최신순",
  error: null,
};

export const __getMainCardList = createAsyncThunk(
  "mainCardList/getMainCardList",
  async ({ page, size, sortBy }, thunkAPI) => {
    try {
      const { data } = await instanceApi.get(
        `survey/main?page=${page}&size=${size}&sortBy=${sortBy}`
      );
      return thunkAPI.fulfillWithValue({ data: data, sortBy: sortBy });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const mainCardListSlice = createSlice({
  name: "mainCardList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getMainCardList.fulfilled, (state, action) => {
      state.mainCardList = action.payload.data.data;
      state.selectedCategory = action.payload?.sortBy;
    });
    builder.addCase(__getMainCardList.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});
export const {} = mainCardListSlice.actions;
export default mainCardListSlice.reducer;

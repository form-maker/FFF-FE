import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceApi } from "../../core/api";

const initialState = {
  myPageCardList: [],
  selectedCategory: "최신순",
  status: "IN_PROCEED",
  error: null,
};

export const __getMyPageCardList = createAsyncThunk(
  "myPageCardList/getMyPageCardList",
  async ({ page, size, sortBy, status }, thunkAPI) => {
    try {
      const { data } = await instanceApi.get(
        `survey/my-page?page=${page}&size=${size}&sortBy=${sortBy}&status=${status}`
      );
      return thunkAPI.fulfillWithValue({
        data: data,
        sortBy: sortBy,
        status: status,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const myPageCardListSlice = createSlice({
  name: "myPageCardList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getMyPageCardList.fulfilled, (state, action) => {
      state.myPageCardList = action.payload.data.data;
      state.selectedCategory = action.payload.sortBy;
      state.status = action.payload.status;
    });
    builder.addCase(__getMyPageCardList.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});
export const {} = myPageCardListSlice.actions;
export default myPageCardListSlice.reducer;

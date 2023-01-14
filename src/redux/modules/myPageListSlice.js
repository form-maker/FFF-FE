import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceApi } from "../../core/api";

const initialState = {
  myPageCardList: [],
  error: null,
};

export const __getMyPageCardList = createAsyncThunk(
  "myPageCardList/getMyPageCardList",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instanceApi.get(
        `survey/my-page?page=1&size=9&sortBy=%EC%B5%9C%EC%8B%A0%EC%88%9C`
      );
      return thunkAPI.fulfillWithValue(data);
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
      state.myPageCardList = action.payload.data;
    });
    builder.addCase(__getMyPageCardList.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});
export const {} = myPageCardListSlice.actions;
export default myPageCardListSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceApi } from "../../core/api";

const initialState = {
  mainCardList: [],
  error: null,
};

export const __getMainCardList = createAsyncThunk(
  "mainCardList/getMainCardList",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instanceApi.get(
        `survey/main?isAsc=true&page=1&size=20&sortBy=최신순`
        // { sortBy: "최신순" }
      );
      return thunkAPI.fulfillWithValue(data);
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
      state.mainCardList = action.payload.data;
    });
    builder.addCase(__getMainCardList.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});
export const {} = mainCardListSlice.actions;
export default mainCardListSlice.reducer;

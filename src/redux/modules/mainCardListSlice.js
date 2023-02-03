import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { instanceApi } from "../../core/api";

const initialState = {
  mainCardList: [],
  pageStatus: {},
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
  reducers: {
    cardSliceInitialize: (state) => ({
      state: {
        mainCardList: [],
        pageStatus: {},
        selectedCategory: "최신순",
        error: null,
      },
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(__getMainCardList.fulfilled, (state, action) => {
      if (action.payload.sortBy !== state.selectedCategory) {
        console.log(action.payload.data.data);
        state.mainCardList = action.payload.data.data.contents;
        state.pageStatus = action.payload.data.data.pageStatus;
        state.selectedCategory = action.payload?.sortBy;
      } else {
        state.mainCardList = [...state.mainCardList].concat(
          action.payload.data.data.contents
        );
        state.pageStatus = action.payload.data.data.pageStatus;
      }
    });
    builder.addCase(__getMainCardList.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});
export const { cardSliceInitialize } = mainCardListSlice.actions;
export default mainCardListSlice.reducer;

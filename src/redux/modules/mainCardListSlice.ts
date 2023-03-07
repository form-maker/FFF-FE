import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { instanceApi } from "../../core/api";
import type { RootState } from "../config/configstore";

interface mainCardList {
  mainCardList: [] | Array<iMainCardList>;
  pageStatus: iPageStatus;
  selectedCategory: string;
  error: null | string;
}

interface iMainCardList {
  createdAt: string;
  dday: number;
  endedAt: string;
  giftName: string;
  participant: number;
  startedAt: string;
  summary: string;
  surveyId: number;
  title: string;
  totalGiftQuantity: number;
  totalQuestion: number;
  totalTime: number;
}

interface iPageStatus {
  end?: number;
  next?: boolean;
  page?: number;
  pageList?: number[];
  prev?: boolean;
  size?: number;
  start?: number;
  totalPage?: number;
}

const initialState = {
  mainCardList: [],
  pageStatus: {},
  selectedCategory: "최신순",
  error: null,
} as mainCardList;

interface category {
  page: number;
  size: number;
  sortBy: string;
}

export const __getMainCardList = createAsyncThunk(
  "mainCardList/getMainCardList",
  async ({ page, size, sortBy }: category, thunkAPI) => {
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
      mainCardList: [],
      pageStatus: {},
      selectedCategory: "최신순",
      error: null,
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
export const mainCardList = (state: RootState) => state.mainCardList;
export default mainCardListSlice.reducer;

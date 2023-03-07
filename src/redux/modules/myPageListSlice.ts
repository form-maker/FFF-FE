import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { baseURLApi } from "../../core/api";

interface iMyPageCardList {
  myPageCardList: ICardList;
  selectedCategory: string;
  status: string;
  error: boolean;
}

interface ICardList {
  username: string;
  pageData: iPageData;
}

interface iPageData {
  contents: Array<iContent>;
  pageStatus: iPageStatus;
}

interface iContent {
  achievement: number;
  achievementRate: number;
  createdAt: string;
  dday: number;
  endedAt: string;
  participant: number;
  startedAt: string;
  status: string;
  summary: string;
  surveyId: number;
  title: string;
  totalQuestion: number;
}

interface iPageStatus {
  end: number;
  next: boolean;
  page: number;
  pageList: number[];
  prev: boolean;
  size: number;
  start: number;
  totalPage: number;
}

interface category {
  page: number;
  size: number;
  sortBy: string;
  status: string;
}

export const __getMyPageCardList = createAsyncThunk(
  "myPageCardList/getMyPageCardList",
  async ({ page, size, sortBy, status }: category, thunkAPI) => {
    try {
      const { data } = await baseURLApi.get(
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

export const __deleteCard = createAsyncThunk(
  "stats/deleteStats",
  async (payload: number, thunkAPI) => {
    try {
      await baseURLApi.delete(`survey/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  myPageCardList: {},
  selectedCategory: "최신순",
  status: "IN_PROCEED",
  error: false,
} as iMyPageCardList;

const myPageCardListSlice = createSlice({
  name: "myPageCardList",
  initialState,
  reducers: {
    loginErrorClose(state, action) {
      state.error = false;
      console.log(state.error);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(__getMyPageCardList.fulfilled, (state, action) => {
      state.myPageCardList = action.payload.data.data;
      state.selectedCategory = action.payload.sortBy;
      state.status = action.payload.status;
    });
    builder.addCase(
      __getMyPageCardList.rejected,
      (state, { payload }: { payload: any }) => {
        if (payload.response.status === 403) {
          state.error = true;
        } else {
          console.log(payload.response);
        }
      }
    );
    builder.addCase(
      __deleteCard.fulfilled,
      (state, { payload }: { payload: number | void }) => {
        const id = payload;
        state.myPageCardList.pageData.contents =
          state.myPageCardList.pageData.contents.filter((content) => {
            return content.surveyId !== id;
          });
        Swal.fire({
          text: "설문이 삭제되었습니다",
          confirmButtonColor: "#7AB0FE",
          confirmButtonText: "확인",
        });
      }
    );
    builder.addCase(
      __deleteCard.rejected,
      (state, { payload }: { payload: any }) => {
        console.log(payload);
        if (payload.statusCode === 403) {
          state.error = true;
        }
      }
    );
  },
});
export const { loginErrorClose } = myPageCardListSlice.actions;
export default myPageCardListSlice.reducer;

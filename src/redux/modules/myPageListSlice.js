import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURLApi } from "../../core/api";

const initialState = {
  myPageCardList: [],
  selectedCategory: "최신순",
  status: "IN_PROCEED",
  error: false,
};

export const __getMyPageCardList = createAsyncThunk(
  "myPageCardList/getMyPageCardList",
  async ({ page, size, sortBy, status }, thunkAPI) => {
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
  async (payload, thunkAPI) => {
    try {
      await baseURLApi.delete(`survey/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

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
    builder.addCase(__getMyPageCardList.rejected, (state, action) => {
      if (action.payload.response.status === 403) {
        state.error = true;
      } else {
        console.log(action.payload.response);
      }
    });
    builder.addCase(__deleteCard.fulfilled, (state, action) => {
      const id = action.payload;
      state.myPageCardList.pageData.contents =
        state.myPageCardList.pageData.contents.filter((content) => {
          return content.surveyId !== id;
        });
      alert("설문이 삭제되었습니다");
    });
    builder.addCase(__deleteCard.rejected, (state, action) => {
      console.log(action.payload);
      if (action.payload.statusCode === 403) {
        state.error = true;
      }
    });
  },
});
export const { loginErrorClose } = myPageCardListSlice.actions;
export default myPageCardListSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURLApi } from "../../core/api";

const initialState = {
  signup: [],
  isLoading: false,
  error: null,
};

export const __addSignup = createAsyncThunk(
  "signup",
  async (payload, thunkAPI) => {
    try {
      const data = await baseURLApi.post(`user/signup`, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: {
    [__addSignup.pending]: (state) => {
      state.isLoading = true;
    },
    [__addSignup.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.signup = action.payload;
    },
    [__addSignup.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const {} = signupSlice.actions;
export default signupSlice.reducer;

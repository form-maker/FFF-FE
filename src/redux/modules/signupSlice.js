import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  signup: [],
  isLoading: false,
  error: null,
};

export const __addSignup = createAsyncThunk(
  "signup",
  async (payload, thunkAPI) => {}
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
      state.content = action.payload;
    },
    [__addSignup.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const {} = signupSlice.actions;
export default signupSlice.reducer;

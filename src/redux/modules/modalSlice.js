import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.modalOpen = action.payload;
    },
  },
});
export const { showModal } = modalSlice.actions;
export default modalSlice.reducer;

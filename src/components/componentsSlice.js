import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dropdownIsHidden: true,
  dateError: null,
  modalIsOpen: false,
};

export const componentsSlice = createSlice({
  name: "components",
  initialState,
  reducers: {
    changeDropdownState: (state, action) => {
      state.dropdownIsHidden = action.payload;
    },
    setDateError: (state, action) => {
      state.dateError = action.payload;
    },
    changeModalState: (state, action) => {
      state.modalIsOpen = action.payload;
    },
  },
});

export const { changeDropdownState, setDateError, changeModalState } =
  componentsSlice.actions;

export default componentsSlice.reducer;

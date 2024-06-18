import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
};

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setId } = carSlice.actions;

export default carSlice.reducer;

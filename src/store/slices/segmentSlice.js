import { createSlice } from "@reduxjs/toolkit";

export const segmentSlice = createSlice({
  name: "segments",
  initialValue: [],
  reducers: {
    addSegments: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { addSegments } = segmentSlice.actions;
export default segmentSlice.reducer;

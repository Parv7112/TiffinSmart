import { createSlice } from "@reduxjs/toolkit";

const deliverhereSlice = createSlice({
  name: "deliverhere",
  initialState: null,
  reducers: {
    setDeliverhere: (state, action) => {
      return action.payload;
    },
  },
});

export const { setDeliverhere } = deliverhereSlice.actions;
export default deliverhereSlice.reducer;

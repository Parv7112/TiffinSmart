// subscriptionSlice.js

import { createSlice } from '@reduxjs/toolkit';

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState: {},
  reducers: {
    storeSubscriptionData: (state, action) => {
      return action.payload;
    },
  },
});

export const { storeSubscriptionData } = subscriptionSlice.actions;

export default subscriptionSlice.reducer;

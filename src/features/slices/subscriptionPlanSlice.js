import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PlanAPI } from '../../components/basePath';

export const showSubscriptionPlan = createAsyncThunk('showSubscriptionPlan', async (args, { rejectWithValue }) => {
  try {
    const response = await axios.get(PlanAPI);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const initialState = {
  data: [],
  loading: false,
  error: false,
};

const subscriptionPlanSlice = createSlice({
  name: 'subscriptionPlan',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(showSubscriptionPlan.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(showSubscriptionPlan.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(showSubscriptionPlan.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default subscriptionPlanSlice.reducer;
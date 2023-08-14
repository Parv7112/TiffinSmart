import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { OrderHistoryAPI } from '../../components/basePath';

export const OrderHistorydata = createAsyncThunk('OrderHistorydata', async (args, { rejectWithValue }) => {
  try {
    const response = await axios.get(OrderHistoryAPI);
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

const orderhistorySlice = createSlice({
  name: 'orderhistory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(OrderHistorydata.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(OrderHistorydata.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(OrderHistorydata.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default orderhistorySlice.reducer;


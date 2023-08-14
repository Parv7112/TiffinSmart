import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ReviewAPI } from '../../components/basePath';

export const PostReview = createAsyncThunk('PostReview', async (args, { rejectWithValue }) => {
  try {
    const response = await axios.post(ReviewAPI);
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

const writereviewSlice = createSlice({
  name: 'writereview',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(PostReview.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(PostReview.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(PostReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default writereviewSlice.reducer;


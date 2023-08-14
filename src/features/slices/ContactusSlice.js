import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const postFormData = createAsyncThunk('api/postFormData', async (formData) => {
  try {
    const response = await axios.post('https://64ae6d3bc85640541d4d0b0b.mockapi.io/conatactus', formData);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postFormData.pending, (state) => {
        state.loading = true;
        state.data = null;
        state.error = null;
      })
      .addCase(postFormData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(postFormData.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message;
      });
  },
});

export default apiSlice.reducer;

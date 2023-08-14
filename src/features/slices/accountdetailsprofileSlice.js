import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserAPI } from '../../components/basePath';

export const showProfiledata = createAsyncThunk('showProfiledata', async (args, { rejectWithValue }) => {
  try {
    const response = await axios.get(UserAPI);
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

const accountdetailsprofileSlice = createSlice({
  name: 'accountdetailsprofile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(showProfiledata.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(showProfiledata.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(showProfiledata.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default accountdetailsprofileSlice.reducer;


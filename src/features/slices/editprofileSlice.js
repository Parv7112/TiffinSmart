import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserAPI } from '../../components/basePath';


export const updateProfileData = createAsyncThunk(
  'updateProfileData',
  async (dataToUpdate) => {
    const { id, ...data } = dataToUpdate;
    try {
      const response = await axios.put(`${UserAPI}/${id}`, data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  }
);

const editProfileSlice = createSlice({
  name: 'editProfile',
  initialState :{
    user: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateProfileData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfileData.fulfilled, (state,action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default editProfileSlice.reducer;

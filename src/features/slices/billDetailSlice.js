import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPricingData = createAsyncThunk(
  "billDetail/fetchPricingData",
  async () => {
    try {
      const response = await axios(
        "https://64ca3f36700d50e3c70493b8.mockapi.io/billdetails"
      );
      
      return response.data;
    } catch (error) {
      throw Error("Error fetching pricing data");
    }
  }
);

const billDetailSlice = createSlice({
  name: "billDetail",
  initialState: {
    billdetail: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPricingData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPricingData.fulfilled, (state, action) => {
        state.loading = false;
        state.billdetail = action.payload;
      })
      .addCase(fetchPricingData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default billDetailSlice.reducer;

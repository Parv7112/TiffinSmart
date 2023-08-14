import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserAPI } from "../../components/basePath";

export const createSignup = createAsyncThunk(
  "signup/create",
  async (data, { rejectWithValue }) => {
    console.log("data", data);

    try {
      const response = await fetch(
        UserAPI,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create signup");
      }

      const result = await response.json();
      console.log(result); 

      if (result.id) {
        localStorage.setItem("userId", result.id);
      } else {
        throw new Error("Invalid response format: id is undefined");
      }

      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const signupDetails = createSlice({
  name: "signupDetails",
  initialState: {
    signup: [],
    loading: false,
    error: null,
  },
  reducers: {
    initializeSignup: (state) => {
      const storedUserId = localStorage.getItem("userId");
      if (storedUserId) {
        state.signup.push({ id: storedUserId });
      }
    },
  },
  extraReducers: {
    [createSignup.pending]: (state) => {
      state.loading = true;
    },
    [createSignup.fulfilled]: (state, action) => {
      state.loading = false;
      state.signup.push(action.payload);
    },
    [createSignup.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { initializeSignup } = signupDetails.actions;
export default signupDetails.reducer;

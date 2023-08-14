import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserAPI } from "../../components/basePath";

export const loginUser = createAsyncThunk(
  "login/loginUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        UserAPI,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const users = await response.json();      
      const foundUser = users.find(
        (user) =>
          (user.email === data.identifier || user.mobile === data.identifier) &&
          user.password === data.password
      );

      if (foundUser) {
        localStorage.setItem("userId", foundUser.id);

        return foundUser;
      } else {
        return rejectWithValue("Invalid email/mobile number or password");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "login/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem("userId");

      return true;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialUserId = localStorage.getItem("userId");
const initialUser = initialUserId ? { id: initialUserId } : null;

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: initialUser,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default loginSlice.reducer;

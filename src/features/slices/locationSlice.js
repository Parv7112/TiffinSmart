import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//create actions
export const createUserLocation = createAsyncThunk(
  "createUserLocation",
  async (data, { rejectWithValue }) => {
    console.log("data", data);

    const response = await fetch(
      "https://649aa42fbf7c145d023930e6.mockapi.io/location",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//read action
export const showUserLocation = createAsyncThunk(
  "showUserLocation",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://649aa42fbf7c145d023930e6.mockapi.io/location"
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//update user details
export const updateUserLocation = createAsyncThunk(
  "updateUserLocation",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `https://649aa42fbf7c145d023930e6.mockapi.io/location/${data.id}`,
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//delete user details
export const deleteUserLocation = createAsyncThunk(
  "deleteUserLocation",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `https://649aa42fbf7c145d023930e6.mockapi.io/location/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const locationDetails = createSlice({
  name: "userLocationDetail",
  initialState: {
    location: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [createUserLocation.pending]: (state) => {
      state.loading = true;
    },
    [createUserLocation.fulfilled]: (state, action) => {
      state.loading = false;
      state.location.push(action.payload);
    },
    [createUserLocation.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [showUserLocation.pending]: (state) => {
      state.loading = true;
    },
    [showUserLocation.fulfilled]: (state, action) => {
      state.loading = false;
      state.location = action.payload;
    },
    [showUserLocation.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [updateUserLocation.pending]: (state) => {
      state.loading = true;
    },
    [updateUserLocation.fulfilled]: (state, action) => {
      state.loading = false;
      state.location = state.location.map((ele) =>
        ele.id === action.payload.id ? action.payload : ele
      );
    },
    [updateUserLocation.rejected]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
      state.error = action.payload;
    },
    [deleteUserLocation.pending]: (state) => {
      state.loading = true;
    },
    [deleteUserLocation.fulfilled]: (state, action) => {
      state.loading = false;
      const { id } = action.payload;

      if (id) {
        state.location = state.location.filter((ele) => ele.id !== id);
        console.log(`successfully deleted user with id  -  ${id}`);
      }
    },
    [deleteUserLocation.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default locationDetails.reducer;

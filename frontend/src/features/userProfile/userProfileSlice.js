import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userProfileService from "./userProfileService";

const initialState = {
  firstName: "",
  lastName: "",
  userName: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get user profile
export const getProfile = createAsyncThunk(
  "user/getProfile",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.body.token;
      return await userProfileService.getProfile(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Update user profile
export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.body.token;
      return await userProfileService.updateProfile(data, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const userProfileSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.firstName = action.payload.body.firstName;
        state.lastName = action.payload.body.lastName;
        state.userName = action.payload.body.userName;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userName = action.payload.body.userName;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { resetUser } = userProfileSlice.actions;
export default userProfileSlice.reducer;

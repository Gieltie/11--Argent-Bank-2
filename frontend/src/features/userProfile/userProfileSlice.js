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
  "profile/getProfile",
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

export const userProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    resetUser: (state) => initialState /* {
      state.firstName = "";
      state.lastName = "";
      state.userName = "";
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    } */,
  },
  extraReducers: (builder) => {
    builder
      /* .addCase(updateProfile.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.profile.push(action.payload)
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      }) */
      .addCase(getProfile.pending, (state) => {
        //state.isLoading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        //state.isLoading = false;
        state.isSuccess = true;
        //state.profile = action.payload.body;
        state.firstName = action.payload.body.firstName;
        state.lastName = action.payload.body.lastName;
        state.userName = action.payload.body.userName;
      })
      .addCase(getProfile.rejected, (state, action) => {
        //state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { resetUser } = userProfileSlice.actions;
export default userProfileSlice.reducer;

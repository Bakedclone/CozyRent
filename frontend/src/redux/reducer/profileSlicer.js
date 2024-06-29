import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {

    // update profile
    updateProfileRequest: (state) => {
      state.loading = true;
    },
    updateProfileSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    updateProfileFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Change Password
    changePasswordRequest: (state) => {
      state.loading = true;
    },
    changePasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    changePasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // forgot Password
    forgetPasswordRequest: (state) => {
      state.loading = true;
    },
    forgetPasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    forgetPasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // reset Password
    resetPasswordRequest: (state) => {
      state.loading = true;
    },
    resetPasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    resetPasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // update profile
    updateProfilePictureRequest: (state) => {
      state.loading = true;
    },
    updateProfilePictureSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    updateProfilePictureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // update aadhar
    updateaadharRequest: (state) => {
      state.loading = true;
    },
    updateaadharSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    updateaadharFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // update pan
    updatePanRequest: (state) => {
      state.loading = true;
    },
    updatePanSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    updatePanFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },


    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    }
  },
})

export const { updateProfileRequest,
  updateProfileSuccess,
  updateProfileFail,
  changePasswordRequest,
  changePasswordSuccess,
  changePasswordFail,
  forgetPasswordRequest,
  forgetPasswordSuccess,
  forgetPasswordFail,
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordFail,
  updateProfilePictureRequest,
  updateProfilePictureSuccess,
  updateProfilePictureFail,
  updateaadharRequest,
  updateaadharSuccess,
  updateaadharFail,
  updatePanRequest,
  updatePanSuccess,
  updatePanFail,
  clearError,
  clearMessage } = profileSlice.actions

export default profileSlice.reducer

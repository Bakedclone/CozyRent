import { forgetPasswordFail, forgetPasswordRequest, forgetPasswordSuccess, resetPasswordFail, resetPasswordRequest, resetPasswordSuccess, updatePanFail, updatePanRequest, updatePanSuccess, updateProfileRequest, updateaadharFail, updateaadharRequest, updateaadharSuccess } from "./../reducer/profileSlicer.js";
import { server } from "./../store.js";
import axios from 'axios';
import { updateProfileSuccess } from "./../reducer/profileSlicer.js";
import { updateProfileFail } from "./../reducer/profileSlicer.js";
import { changePasswordRequest } from "./../reducer/profileSlicer.js";
import { changePasswordSuccess } from "./../reducer/profileSlicer.js";
import { changePasswordFail } from "./../reducer/profileSlicer.js";
import { updateProfilePictureRequest } from "./../reducer/profileSlicer.js";
import { updateProfilePictureSuccess } from "./../reducer/profileSlicer.js";
import { updateProfilePictureFail } from "./../reducer/profileSlicer.js";

export const updateProfile = (name, email, phoneNumber, address) => async (dispatch) => {
    try {
        dispatch(updateProfileRequest());
        const { data } = await axios.put(`${server}/updateprofile`, { name, email, phoneNumber, address }, {
            headers: {
                "Content-type": "application/json"
            },
            withCredentials: true,
        });
        dispatch(updateProfileSuccess(data));
    } catch (error) {
        dispatch(updateProfileFail(error.response.data.message));

    }
}

export const changePassword = (oldpassword, newpassword) => async (dispatch) => {
    try {
        dispatch(changePasswordRequest());
        const { data } = await axios.put(`${server}/changepassword`, { oldpassword, newpassword }, {
            headers: {
                "Content-type": "application/json"
            },
            withCredentials: true,
        });
        dispatch(changePasswordSuccess(data));
    } catch (error) {
        dispatch(changePasswordFail(error.response.data.message));

    }
};

export const forgotPassword = (email) => async (dispatch) => {
    try {
        dispatch(forgetPasswordRequest());
        const { data } = await axios.post(`${server}/forgetpassword`, { email }, {
            headers: {
                "Content-type": "application/json"
            },
            withCredentials: true,
        });
        dispatch(forgetPasswordSuccess(data));
    } catch (error) {
        dispatch(forgetPasswordFail(error.response.data.message));
    }
}

export const resetPassword = (token, password) => async (dispatch) => {
    try {
        dispatch(resetPasswordRequest());
        const { data } = await axios.put(`${server}/resetpassword/${token}`, { password }, {
            headers: {
                "Content-type": "application/json"
            },
            withCredentials: true,
        });
        dispatch(resetPasswordSuccess(data));
    } catch (error) {
        dispatch(resetPasswordFail(error.response.data.message));
    }
}

export const updateProfilePicture = (formdata) => async (dispatch) => {
    try {
        dispatch(updateProfilePictureRequest());
        const { data } = await axios.put(`${server}/updateprofilepicture`, formdata, {
            headers: {
                "Content-type": "multipart/form-data",
            },
            withCredentials: true,
        });
        dispatch(updateProfilePictureSuccess(data));
    } catch (error) {
        dispatch(updateProfilePictureFail(error.response.data.message));
    }
}

export const updateAadhar = (formdata) => async (dispatch) => {
    try {
        dispatch(updateaadharRequest());
        const { data } = await axios.put(`${server}/uploadaadharcard`, formdata, {
            headers: {
                "Content-type": "multipart/form-data",
            },
            withCredentials: true,
        });
        dispatch(updateaadharSuccess(data));
    } catch (error) {
        dispatch(updateaadharFail(error.response.data.message));
    }
}

export const updatePan = (formdata) => async (dispatch) => {
    try {
        dispatch(updatePanRequest());
        const { data } = await axios.put(`${server}/uploadpancard`, formdata, {
            headers: {
                "Content-type": "multipart/form-data",
            },
            withCredentials: true,
        });
        dispatch(updatePanSuccess(data));
    } catch (error) {
        dispatch(updatePanFail(error.response.data.message));
    }
}
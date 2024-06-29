import { addPropertyFail, addPropertyRequest, addPropertySuccess, getPropertyFail, getPropertyRequest, getPropertySuccess, getSelectedPropertyFail, getSelectedPropertyRequest, getSelectedPropertySuccess } from "./../reducer/propertySlicer.js";
import { server } from "./../store.js";
import axios from 'axios'

export const getAllProperty = () => async (dispatch) => {
    try {
        dispatch(getPropertyRequest());
        const { data } = await axios.get(`${server}/getallproperty`);
        dispatch(getPropertySuccess(data.property));
    } catch (error) {
        dispatch(getPropertyFail(error.response.data.message));
    }
}

export const getSelectedProperty = (_id) => async (dispatch) => {
    try {
        dispatch(getSelectedPropertyRequest());
        const { data } = await axios.post(`${server}/getproperty`, { _id }, {
            headers: {
                "Content-type": "application/json"
            },
            withCredentials: true,
        });
        dispatch(getSelectedPropertySuccess(data.property));
    } catch (error) {
        dispatch(getSelectedPropertyFail(error.response.data.message));
    }
}

export const addProperty = (formdata) => async (dispatch) => {
    try {
        dispatch(addPropertyRequest());
        console.log(formdata);
        const { data } = await axios.post(`${server}/addproperty`, formdata, {
            headers: {
                "Content-type": "multipart/form-data",
            },
            withCredentials: true,
        });
        dispatch(addPropertySuccess(data));
    } catch (error) {
        dispatch(addPropertyFail(error.response.data.message));
    }
}
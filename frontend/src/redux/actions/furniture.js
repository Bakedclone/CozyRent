import { addPropertyFail, addPropertyRequest, addPropertySuccess, getPropertyFail, getPropertyRequest, getPropertySuccess, getSelectedPropertyFail, getSelectedPropertyRequest, getSelectedPropertySuccess } from "./../reducer/propertySlicer.js";
import { server } from "./../store.js";
import axios from 'axios'
import { addFurnitureRequest, getFurnitureSuccess, getFurnitureFail, getFurnitureRequest } from "./../reducer/furnitureSlicer.js";

export const getAllFurniture = () => async (dispatch) => {
    try {
        dispatch(getFurnitureRequest());
        const { data } = await axios.get(`${server}/getallfurniture`);
        dispatch(getFurnitureSuccess(data.furniture));
    } catch (error) {
        dispatch(getFurnitureFail(error.response.data.message));
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

export const addFurniture = (formdata) => async (dispatch) => {
    try {
        dispatch(addPropertyRequest());
        console.log(formdata);
        const { data } = await axios.post(`${server}/addfurniture`, formdata, {
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
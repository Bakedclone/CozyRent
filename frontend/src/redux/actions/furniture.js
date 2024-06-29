import { addPropertyFail, addPropertyRequest, addPropertySuccess, getPropertyFail, getPropertyRequest, getPropertySuccess, getSelectedPropertyFail, getSelectedPropertyRequest, getSelectedPropertySuccess } from "./../reducer/propertySlicer.js";
import { server } from "./../store.js";
import axios from 'axios'
import { addFurnitureRequest, getFurnitureSuccess, getFurnitureFail, getFurnitureRequest, getSelectedFurnitureRequest, getSelectedFurnitureSuccess, getSelectedFurnitureFail, addFurnitureSuccess, addFurnitureFail } from "./../reducer/furnitureSlicer.js";

export const getAllFurniture = () => async (dispatch) => {
    try {
        dispatch(getFurnitureRequest());
        const { data } = await axios.get(`${server}/getallfurniture`);
        dispatch(getFurnitureSuccess(data.furniture));
    } catch (error) {
        dispatch(getFurnitureFail(error.response.data.message));
    }
}

export const getSelectedFurniture = (_id) => async (dispatch) => {
    try {
        dispatch(getSelectedFurnitureRequest());
        const { data } = await axios.post(`${server}/getfurniture`, { _id }, {
            headers: {
                "Content-type": "application/json"
            },
            withCredentials: true,
        });
        dispatch(getSelectedFurnitureSuccess(data.furniture));
    } catch (error) {
        dispatch(getSelectedFurnitureFail(error.response.data.message));
    }
}

export const addFurniture = (formdata) => async (dispatch) => {
    try {
        dispatch(addFurnitureRequest());
        console.log(formdata);
        const { data } = await axios.post(`${server}/addfurniture`, formdata, {
            headers: {
                "Content-type": "multipart/form-data",
            },
            withCredentials: true,
        });
        dispatch(addFurnitureSuccess(data));
    } catch (error) {
        dispatch(addFurnitureFail(error.response.data.message));
    }
}
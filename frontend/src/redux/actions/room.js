import { GetAllRoomsFail, GetAllRoomsRequest, GetAllRoomsSuccess, GetAvailableRoomFail, GetAvailableRoomRequest, GetAvailableRoomSuccess, addRoomFail, addRoomRequest, addRoomSuccess, removeRoomFail, removeRoomRequest, removeRoomSuccess, updateRoomFail, updateRoomRequest, updateRoomSuccess } from "./../reducer/roomSlicer.js";
import { server } from "./../store.js";
import axios from 'axios'

export const GetAvailableRoom = (Propertyid) => async (dispatch) => {
    try {
        dispatch(GetAvailableRoomRequest());
        const { data } = await axios.post(`${server}/availablerooms`, {Propertyid} ,{
            headers: {
                "Content-type": "application/json",
            },
            withCredentials: true, 
        });
        dispatch(GetAvailableRoomSuccess(data));
    } catch (error) { 
        dispatch(GetAvailableRoomFail(error.response.data.message));
    }
}

export const GetAllRooms = () => async (dispatch) => {
    try {
        dispatch(GetAllRoomsRequest());
        const { data } = await axios.get(`${server}/getallrooms` ,{
            withCredentials: true, 
        });
        dispatch(GetAllRoomsSuccess(data));
    } catch (error) { 
        dispatch(GetAllRoomsFail(error.response.data.message));
    }
}

export const AddRoom = (_id, Propertyid, MonthlyRent, SharingCapacity, facilities, Occupied, Description) => async (dispatch) => {
    try {
        dispatch(addRoomRequest());
        const { data } = await axios.post(`${server}/addrooms`, {_id, Propertyid, MonthlyRent, SharingCapacity, facilities, Occupied, Description} ,{
            headers: {
                "Content-type": "application/json",
            },
            withCredentials: true, 
        });
        dispatch(addRoomSuccess(data));
    } catch (error) { 
        dispatch(addRoomFail(error.response.data.message));
    }
}

export const RemoveRoom = (_id ) => async (dispatch) => {
    try {
        dispatch(removeRoomRequest());
        const { data } = await axios.post(`${server}/removeroom`, { _id } ,{
            headers: {
                "Content-type": "application/json",
            },
            withCredentials: true, 
        });
        dispatch(removeRoomSuccess(data));
    } catch (error) { 
        dispatch(removeRoomFail(error.response.data.message));
    }
}

export const updateRoom = (_id, Propertyid, MonthlyRent, SharingCapacity, facilities, Occupied, description) => async (dispatch) => {
    try {
        dispatch(updateRoomRequest());
        const { data } = await axios.post(`${server}/updateroom`, {_id, Propertyid, MonthlyRent, SharingCapacity, facilities, Occupied, description} ,{
            headers: {
                "Content-type": "application/json",
            },
            withCredentials: true, 
        });
        dispatch(updateRoomSuccess(data));
    } catch (error) { 
        dispatch(updateRoomFail(error.response.data.message));
    }
}
import { RemoveTenantFail, RemoveTenantRequest, RemoveTenantSuccess, addTenantFail, addTenantRequest, addTenantSuccess, countDepositeFail, countDepositeRequest, countDepositeSuccess, getAllTenantFail, getAllTenantRequest, getAllTenantSuccess, loadTenantFail, loadTenantRequest, loadTenantSuccess, updateTenantFail, updateTenantRequest, updateTenantSuccess } from "./../reducer/tenantSlicer.js";
import { server } from "./../store.js";
import axios from 'axios'

export const loadTenant = () => async (dispatch) => {
    try {
        dispatch(loadTenantRequest());
        const { data } = await axios.get(`${server}/myinfo`, {
            withCredentials: true,
        });
        dispatch(loadTenantSuccess(data.tenant));
    } catch (error) { 
        dispatch(loadTenantFail(error.response.data.message));

    }
}

export const addTenant = (UserID, RoomID, CheckINDate, MonthlyRent, PendingRent) => async (dispatch) => {
    try {
        dispatch(addTenantRequest());
        const { data } = await axios.post(`${server}/admin/addtenant`,{UserID, RoomID, CheckINDate, MonthlyRent, PendingRent}, {
            headers: {
                "Content-type": "application/json",
            },
            withCredentials: true,
        });
        dispatch(addTenantSuccess(data));
    } catch (error) { 
        dispatch(addTenantFail(error.response.data.message));
    }
}

export const updateTenant = (UserID, RoomID, MonthlyRent, PendingRent, DepositCount, Status, CheckINDate, CheckOUTDate) => async (dispatch) => {
    try {
        dispatch(updateTenantRequest());
        const { data } = await axios.post(`${server}/admin/updatetenant`,{UserID, RoomID, MonthlyRent, PendingRent, DepositCount, Status, CheckINDate, CheckOUTDate}, {
            headers: {
                "Content-type": "application/json",
            },
            withCredentials: true,
        });
        dispatch(updateTenantSuccess(data));
    } catch (error) { 
        dispatch(updateTenantFail(error.response.data.message));
    }
}

export const removeTenant = (UserID) => async (dispatch) => {
    try {
        dispatch(RemoveTenantRequest());
        const { data } = await axios.post(`${server}/admin/deletetenant`,{UserID}, {
            headers: {
                "Content-type": "application/json",
            },
            withCredentials: true,
        });
        dispatch(RemoveTenantSuccess(data));
    } catch (error) { 
        dispatch(RemoveTenantFail(error.response.data.message));
    }
}

export const getAllTenants = () => async (dispatch) => {
    try {
        dispatch(getAllTenantRequest());
        const { data } = await axios.get(`${server}/admin/getalltenants`, {
            withCredentials: true,
        });
        dispatch(getAllTenantSuccess(data));
    } catch (error) { 
        dispatch(getAllTenantFail(error.response.data.message));
    }
}

export const countDeposite = (_id) => async (dispatch) => {
    try {
        dispatch(countDepositeRequest());
        const { data } = await axios.post(`${server}/countdeposite`,{_id}, {
            headers: {
                "Content-type": "application/json",
            },
            withCredentials: true,
        });
        dispatch(countDepositeSuccess(data));
    } catch (error) { 
        dispatch(countDepositeFail(error.response.data.message));
    }
}
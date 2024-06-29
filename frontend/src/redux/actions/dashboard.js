import { dashboardCardFail, dashboardCardRequest, dashboardCardSuccess, dashboardStatsFail, dashboardStatsRequest, dashboardStatsSuccess, getUserFail, getUserRequest, getUserSuccess } from "./../reducer/dashboardSlicer.js";
import { server } from "./../store.js";
import axios from 'axios'

export const dashboardCardDataLoader = () => async (dispatch) => {
    try {
        dispatch(dashboardCardRequest());
        const { data } = await axios.get(`${server}/dashdata`,{
            withCredentials: true,
        });
        dispatch(dashboardCardSuccess(data));
    } catch (error) {
        dispatch(dashboardCardFail(error.response.data.message));
    }
}

export const dashboardStatsLoader = () => async (dispatch) => {
    try {
        dispatch(dashboardStatsRequest());
        const { data } = await axios.get(`${server}/dashstats`,{
            withCredentials: true,
        });
        dispatch(dashboardStatsSuccess(data));
    } catch (error) {
        dispatch(dashboardStatsFail(error.response.data.message));
    }
}

export const getUser = (_id) => async (dispatch) => {
    try {
        dispatch(getUserRequest());
        const { data } = await axios.post(`${server}/admin/getuser`, {_id},{
            headers: {
                "Content-type": "application/json",
            },
            withCredentials: true,
        });
        dispatch(getUserSuccess(data));
    } catch (error) {
        dispatch(getUserFail(error.response.data.message));
    }
}
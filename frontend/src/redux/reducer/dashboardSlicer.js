import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        dashboardCardRequest: (state) => {
            state.loading = true;
        },
        dashboardCardSuccess: (state, action) => {
            state.loading = false;
            state.carddata = action.payload.carddata;
        },
        dashboardCardFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        dashboardStatsRequest: (state) => {
            state.loading = true;
        },
        dashboardStatsSuccess: (state, action) => {
            state.loading = false;
            state.lineChart = action.payload.lineChart;
            state.barChart = action.payload.barChart;
        },
        dashboardStatsFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // Get User
        getUserRequest: (state) => {
            state.loading = true;
        },
        getUserSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
        },
        getUserFail: (state, action) => {
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

export const {
    dashboardCardRequest,
    dashboardCardSuccess,
    dashboardCardFail,
    dashboardStatsRequest,
    dashboardStatsSuccess,
    dashboardStatsFail,
    getUserRequest,
    getUserSuccess,
    getUserFail,
    clearError,
    clearMessage } = dashboardSlice.actions

export default dashboardSlice.reducer
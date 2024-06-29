import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const propertySlice = createSlice({
    name: 'property',
    initialState,
    reducers: {

        // get property
        getPropertyRequest: (state) => {
            state.loading = true;
        },
        getPropertySuccess: (state, action) => {
            state.loading = false;
            state.property = action.payload;
        },
        getPropertyFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getSelectedPropertyRequest: (state) => {
            state.loading = true;
        },
        getSelectedPropertySuccess: (state, action) => {
            state.loading = false;
            state.SelectedProperty = action.payload;
        },
        getSelectedPropertyFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addPropertyRequest: (state) => {
            state.loading = true;
        },
        addPropertySuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        addPropertyFail: (state, action) => {
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
    getPropertyRequest,
    getPropertySuccess,
    getPropertyFail,
    addPropertyRequest,
    addPropertySuccess,
    addPropertyFail,
    getSelectedPropertyRequest,
    getSelectedPropertySuccess,
    getSelectedPropertyFail,
    clearError,
    clearMessage } = propertySlice.actions

export default propertySlice.reducer

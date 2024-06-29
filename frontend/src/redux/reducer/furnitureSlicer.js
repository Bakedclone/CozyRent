import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const furnitureSlice = createSlice({
    name: 'furniture',
    initialState,
    reducers: {

        // get property
        getFurnitureRequest: (state) => {
            state.loading = true;
        },
        getFurnitureSuccess: (state, action) => {
            state.loading = false;
            state.furniture = action.payload;
        },
        getFurnitureFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getSelectedFurnitureRequest: (state) => {
            state.loading = true;
        },
        getSelectedFurnitureSuccess: (state, action) => {
            state.loading = false;
            state.SelectedFurniture = action.payload;
        },
        getSelectedFurnitureFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addFurnitureRequest: (state) => {
            state.loading = true;
        },
        addFurnitureSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        addFurnitureFail: (state, action) => {
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
    getFurnitureRequest,
    getFurnitureSuccess,
    getFurnitureFail,
    addFurnitureRequest,
    addFurnitureSuccess,
    addFurnitureFail,
    getSelectedFurnitureRequest,
    getSelectedFurnitureSuccess,
    getSelectedFurnitureFail,
    clearError,
    clearMessage } = furnitureSlice.actions

export default furnitureSlice.reducer

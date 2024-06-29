import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        // Payment Success Update
        PaymentSuccessUpdateRequest: (state) => {
            state.loading = true;
        },
        PaymentSuccessUpdateSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        PaymentSuccessUpdateFail: (state, action) => {
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
    PaymentSuccessUpdateRequest,
    PaymentSuccessUpdateSuccess,
    PaymentSuccessUpdateFail,
    clearError,
    clearMessage } = paymentSlice.actions

export default paymentSlice.reducer
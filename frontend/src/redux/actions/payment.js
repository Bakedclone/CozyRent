import { PaymentSuccessUpdateFail, PaymentSuccessUpdateRequest, PaymentSuccessUpdateSuccess } from "./../reducer/paymentSlicer.js";
import { server } from "./../store.js";
import axios from 'axios'

export const UpdatePaymentSuccess = ({RazorPayPaymentID}) => async (dispatch) => {
    try {
        dispatch(PaymentSuccessUpdateRequest());
        const { data } = await axios.put(`${server}/paymentsuccess`, {RazorPayPaymentID},{
            headers: {
                "Content-type": "application/json"
            },
            withCredentials: true,
        });
        dispatch(PaymentSuccessUpdateSuccess(data));
    } catch (error) {
        dispatch(PaymentSuccessUpdateFail(error.response.data.message));
    }
}
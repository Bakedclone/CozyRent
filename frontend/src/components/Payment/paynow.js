import React from 'react'
import axios from 'axios';
import { server } from './../../redux/store.js';
import logo from './../../assets/img/house.png';

function Paynow(props) {
  const paymenthandler = async (amount) => {
    const { data: { key } } = await axios.get(`${server}/razorpaykey`);
    const { data: { order } } = await axios.post(`${server}/paynow`, { amount });
    // console.log(data); 
    var options = {
      key, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Happy Living", //your business name
      description: "Paying Guest website",
      image: logo,
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `${server}/paymentverifiaction`,
      prefill: { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: props.userid, //your customer's name
        "email": props.email,
        "contact": props.contact//Provide the customer's phone number for better conversion rates 
      },
      notes: {
        "address": "Razorpay Corporate Office"
      },
      theme: {
        "color": "#3399cc"
      }
    };
    var razor = new window.Razorpay(options);
    razor.open();
  }

  return (
    <div>
      <div className="py-6 px-3 mt-32 sm:mt-0">
        <button
          className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => paymenthandler(props.Rent)}
        >
          Pay Now
        </button>
      </div>
    </div>
  )
}

export default Paynow
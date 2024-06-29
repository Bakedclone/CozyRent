import React from "react";
import { useState } from "react";
import { forgotPassword } from "./../../redux/actions/profile.js";
import { useDispatch } from 'react-redux';

export default function FogetPassword() {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  }
  return (
    <>
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-blueGray-500 text-lg font-bold">
                      Forget Password
                    </h6>
                  </div>
                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <form>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Enter Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}

                      />
                    </div>

                    <div className="text-center mt-6 mb-10">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="submit"
                        onClick={submitHandler}
                      >
                        Send Request Link
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

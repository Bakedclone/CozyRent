import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { login } from "./../../redux/actions/user.js";

export default function Login() {

  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('password');

  const dispatch = useDispatch();
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    history.push('/');
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
                    Login
                  </h6>
                </div>
              </div>
              
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-4"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="mb-6 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}

                    />
                  </div>

                  <div className="relative w-full mb-6">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-4"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </div>


                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                      onClick={submitHandler}
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <Link to="/auth/forgetpassword" className="text-blueGray-200">
                  <small>Forgot Password</small>
                </Link>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/register" className="text-blueGray-200">
                  <small>Create new account</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

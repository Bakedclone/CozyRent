import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearError, clearMessage } from "./../redux/reducer/profileSlicer.js";
import toast, {Toaster} from "react-hot-toast";
import bg from "./../assets/img/register_bg_2.png";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";

// views

import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";
import FogetPassword from "views/auth/ForgetPassword";
import ResetPassword from "views/auth/ResetPassword.js";

export default function Auth() {

  const { message, error } = useSelector(state=>state.profile);

  const dispatch = useDispatch();
  useEffect(()=> {
    if(error) {
      toast.error(error);
      dispatch(clearError());
    }
    if(message) {
      toast.success(message);
      dispatch(clearMessage());
    }
  },[dispatch, error, message]);

  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <img
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            src={bg}
            alt=""
          ></img>
          <Switch>
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/register" exact component={Register} />
            <Route path="/auth/forgetpassword" exact component={FogetPassword} />
            <Route path="/auth/resetpassword/:token" exact component={ResetPassword} />
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
          <FooterSmall absolute />
        </section>
      </main>
      <Toaster/>
    </>
  );
}

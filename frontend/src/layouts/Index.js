import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

import { clearError, clearMessage } from "./../redux/reducer/userSlicer.js";
import { clearError as clearErrorT, clearMessage as clearMessageT } from "./../redux/reducer/tenantSlicer.js";
import { loadUser } from "./../redux/actions/user.js";

// Views
import Home from "views/Home.js";
import Selectproerty from "views/Selectproerty.js";
import BookNow from "views/BookNow.js";
import Profile from "views/Profile.js";
import Updateprofile from "views/Updateprofile.js";
import RentPay from "views/RentPay.js";
import PaymentSuccess from "views/payment/PaymentSuccess.js";
import PreLoader from "views/PreLoader.js";
import PageNotFound from "views/PageNotFound.js";

function Index() {

  const { isAuthenticated, user, error, message, loading } = useSelector(state => state.user);
  const { error: customError, message: customMessage } = useSelector(state => state.tenant);

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
    if (customMessage) {
      toast.success(customMessage);
      dispatch(clearMessageT());
    }
    if (customError) {
      toast.error(customError);
      dispatch(clearErrorT());
    }
  }, [dispatch, error, message, customError, customMessage]);


  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
    {loading ?  <PreLoader />: <></>}
      <IndexNavbar fixed isAuthenticated={isAuthenticated} user={user} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/selectproperty" exact component={Selectproerty} />
        <Route path="/selectproperty/booknow" exact component={BookNow} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/updateprofile" exact component={Updateprofile} />
        <Route path="/payrent" exact component={RentPay} />
        <Route path="/paymentsuccess" exact component={PaymentSuccess} />
        <Redirect from="/auth" to="/auth/login" />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
      <Toaster />
    </>
  )
}

export default Index
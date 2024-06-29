import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// components

import AdminNavbar from "./../components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import AddTenants from "views/admin/AddTenants";
import AvailableRooms from "views/admin/AvailableRooms";
import ViewUser from "views/admin/ViewUser";
import AddProperty from "views/admin/AddProperty";
import AddRooms from "views/admin/AddRooms";
import UpdateRoom from "views/admin/UpdateRoom";
import UpdateTenants from "views/admin/UpdateTenants";
import RemoveTenant from "views/admin/RemoveTenant";
import RemoveRoom from "views/admin/RemoveRoom";
import ViewTenants from "views/admin/ViewTenants";
import ViewRooms from "views/admin/ViewRooms.js";
import AddAdmin from "views/admin/AddAdmin.js";

// Toaster Notification

import toast, { Toaster } from "react-hot-toast";
import { clearError, clearMessage } from "./../redux/reducer/tenantSlicer.js";
import { clearError as clearErrorR, clearMessage as clearMessageR} from "./../redux/reducer/roomSlicer.js";
import { clearError as clearErrorU, clearMessage as clearMessageU} from "./../redux/reducer/userSlicer.js";
import { clearError as clearErrorP, clearMessage as clearMessageP} from "./../redux/reducer/propertySlicer.js";

export default function Admin() {
  const { error, message } = useSelector(state=>state.tenant);
  const { errorR, messageR } = useSelector(state=>state.room);
  const { error : errorU, message : messageU } = useSelector(state=>state.user);
  const { error : errorP, message : messageP } = useSelector(state=>state.property);
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
    if(errorR) {
      toast.error(errorR);
      dispatch(clearErrorR());
    }
    if(messageR) {
      toast.success(messageR);
      dispatch(clearMessageR());
    }
    if(errorU) {
      toast.error(errorU);
      dispatch(clearErrorU());
    }
    if(messageU) {
      toast.success(messageU);
      dispatch(clearMessageU());
    }
    if(errorP) {
      toast.error(errorP);
      dispatch(clearErrorP());
    }
    if(messageP) {
      toast.success(messageP);
      dispatch(clearMessageP());
    }
    dispatch(clearErrorP());
  },[dispatch, error, message, errorR, messageR, errorU, messageU, errorP, messageP]);

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />

            <Route path="/admin/addtenants" exact component={AddTenants} />
            <Route path="/admin/addadmin" exact component={AddAdmin} />
            <Route path="/admin/updatetenants" exact component={UpdateTenants} />
            <Route path="/admin/viewtenants" exact component={ViewTenants} />
            <Route path="/admin/removetenants" exact component={RemoveTenant} />
            <Route path="/admin/getavailablerooms" exact component={AvailableRooms} />
            <Route path="/admin/getallrooms" exact component={ViewRooms} />
            <Route path="/admin/viewuser" exact component={ViewUser} />
            <Route path="/admin/addproperty" exact component={AddProperty} />
            <Route path="/admin/addrooms" exact component={AddRooms} />
            <Route path="/admin/removeroom" exact component={RemoveRoom} />
            <Route path="/admin/updaterooms" exact component={UpdateRoom} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
      <Toaster/>
    </>
  );
}

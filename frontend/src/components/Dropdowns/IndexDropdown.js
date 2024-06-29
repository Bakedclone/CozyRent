import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";
import Avatar from "./../../assets/img/avatar.png"
import { motion } from "framer-motion";
import { useDispatch } from 'react-redux';
import  { logout } from "./../../redux/actions/user.js";
import { useHistory } from 'react-router-dom';
import { countDeposite } from "./../../redux/actions/tenant.js";
const IndexDropdown = ({isAuthenticated, user}) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };


  const history = useHistory();
  const dispatch = useDispatch();
  const logoutHandler = (e)=>{
    e.preventDefault();
    dispatch(logout());
    closeDropdownPopover();
    history.push('/');
  }
  const countdepositehandler = (e) => {
    e.preventDefault();
    dispatch(countDeposite(user._id));
  }
  return (
    <>
    {isAuthenticated ?
      <span
        type="button"
        href="#pablo"
        ref={btnDropdownRef}
        alt="userprofile"
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}>
        <motion.img
          whileTap={{ scale: 0.6 }}
          src={user.photo ? user.photo.url : Avatar}
          className=" w-8 min-w-[40px] h-8 min-h-[30px] drop-shadow-xl cursor-pointer rounded-full inline-block"
        /> <i className="fas fa-solid fa-caret-down"></i></span> :
      <Link
        to="/auth/login">
        <button
          className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
        >
          <i class="fa-solid fa-right-to-bracket"></i> Login
        </button></Link>}
    <div
      ref={popoverDropdownRef}
      className={
        (dropdownPopoverShow ? "block " : "hidden ") +
        "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
      }
    >
      {user && user.type === "admin" ? (
        <span>
          <span
            className={
              "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
            }
          >
            Admin Layout
          </span>
          <Link
            to="/admin/dashboard"
            className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          >
            Dashboard
          </Link>
        </span>) : (<></>)}
      <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
      <span
        className={
          "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
        }
      >
        Account
      </span>
      <Link
        to="/profile"
        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        onClick={closeDropdownPopover}
      >
        Profile
      </Link>
      <Link
        to="/updateprofile"
        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        onClick={closeDropdownPopover}
      >
        Update Profile
      </Link>
      {user && user.type === "tenant" ? (
        <span>
          <span
            className={
              "text-sm pt-6 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
            }
          >
            My Stay
          </span>
          <Link
            to="/payrent"
            className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            onClick={closeDropdownPopover}
          >
            Pay Rent
          </Link>
          <Link
            onClick={countdepositehandler}
            className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            // onClick={closeDropdownPopover}
          >
            Count Deposite
          </Link>
        </span>) : (<></>)}
      <div
        className={
          "flex justify-center mt-5 items-center h-full"
        }
      >
        <button
          className="bg-lightBlue-500 text-white self-center active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
          onClick={logoutHandler}
        >
          <i class="fa-solid fa-right-to-bracket"></i> logout
        </button>
      </div>
    </div>
  </>
  );
};

export default IndexDropdown;

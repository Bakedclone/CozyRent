import React, { useEffect } from "react";

import Avatar from "./../assets/img/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./../redux/actions/user";
import PreLoader from "./PreLoader";

export default function Profile() {

  const { user, loading } = useSelector(state=>state.user);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
    {loading ?  <PreLoader />: <></>}
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        
        <div className="container mt-64 mx-auto px-34">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={user && user.photo ? user.photo.url : Avatar}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
          
                </div>
                <div className="text-center mt-32">
                  <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                    User ID : {user ? user._id : ""}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                    <i className="fas fa-user mr-2 text-lg text-blueGray-400"></i>{" "}
                    Name : {user ? user.name : ""}
                  </div>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                    <i className="fas fa-envelope mr-2 text-lg text-blueGray-400"></i>{" "}
                    Email : {user ? user.email : ""}
                  </div>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    Contact : {user ? user.phoneNumber : ""}
                  </div>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    Address : {user ? user.address : ""}
                  </div>
                </div>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Images
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-12">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Aadhar Card
                  </label>
                  <img src={user && user.aadharcard ? user.aadharcard.url : ""} alt="Not Uploaded" style={{ maxWidth: '100%' }} />
                </div>

              </div>
              <div className="w-full lg:w-6/12 px-4 ">
                <div className="relative w-full mb-12">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Pan Card
                  </label>
                  <img src={user && user.pancard? user.pancard.url : ""} alt="Not Uploaded" style={{ maxWidth: '100%' }} />
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
      </main>
    </>
  );
}

import React, { useState } from 'react'
import Avatar from './../../assets/img/avatar.png'
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './../../redux/actions/dashboard.js';

function ViewUser() {

  const { user } = useSelector(state => state.dashboard);
  const dispatch = useDispatch();

  const [_id, setUserID] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getUser(_id));
  }
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div className="relative">
                  <img
                    alt="..."
                    src={user && user[0].photo.url ? user[0].photo.url : Avatar}
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                <div className="py-6 px-3 mt-32 sm:mt-0">
                  <button
                    className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={submitHandler}
                  >
                    Search
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4 lg:order-1">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <div className="mr-4 p-3 text-center">
                    <input
                      type="text"
                      className="border-0 placeholder-blueGray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                      placeholder="Enter User ID"
                      onChange={(e) => setUserID(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-2">
              <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                User ID : {user ? user[0]._id : ""}
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i className="fas fa-user mr-2 text-lg text-blueGray-400"></i>{" "}
                Name : {user ? user[0].name : ""}
              </div>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                <i className="fas fa-envelope mr-2 text-lg text-blueGray-400"></i>{" "}
                Email : {user ? user[0].email : ""}
              </div>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                Contact : {user ? user[0].phoneNumber : ""}
              </div>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                Address : {user ? user[0].address : ""}
              </div>
            </div>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Images
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Aadhar Card
                  </label>
                  <img src={user ? user[0].aadharcard.url : ""} alt="aadhar card" style={{ maxWidth: '100%' }} />
                </div>

              </div>
              <div className="w-full lg:w-6/12 px-4 pb-20">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Pan Card
                  </label>
                  <img src={user ? user[0].pancard.url : ""} 
                  alt="pan card" 
                  style={{ maxWidth: '100%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewUser
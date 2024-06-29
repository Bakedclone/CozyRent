import React, { useState } from 'react'
import PropTypes from "prop-types";

import { GetAvailableRoom } from './../../redux/actions/room.js';
import { useDispatch, useSelector } from 'react-redux';

function CardAvailableRooms({ color }) {

  const { rooms } = useSelector(state => state.room);

  const [PropertyID, setPropertyID] = useState();

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(GetAvailableRoom(PropertyID));
  }
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded" +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold ">Available Rooms</h6>
            <input
              type="text"
              className="border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
              placeholder="Enter Property ID"
              onChange={(e) => setPropertyID(e.target.value)}
            />
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={submitHandler}
            >
              Search
            </button>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse mb-12">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid font-bold py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                    Room ID
                </th>
                <th
                  className={
                    "px-6 align-middle border font-bold border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Property ID
                </th>
                <th
                  className={
                    "px-6 align-middle border font-bold border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Monthly Rent
                </th>
                <th
                  className={
                    "px-6 align-middle font-bold border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Sharing Capacity
                </th>
                <th
                  className={
                    "px-6 align-middle border font-bold border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Occupied
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid font-bold py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Facilities
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              {rooms ? (rooms.map((room) =>
                <tr>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                    <span className={"ml-3 font-bold"}>
                      {room._id}
                    </span>
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {room.Propertyid}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {room.MonthlyRent}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {room.SharingCapacity}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {room.Occupied}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {room.facilities.map((faci) => (faci + ", "))}
                  </td>
                </tr>
              )) : <></>}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default CardAvailableRooms

CardAvailableRooms.defaultProps = {
  color: "light",
};

CardAvailableRooms.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
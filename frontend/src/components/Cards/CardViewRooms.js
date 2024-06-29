import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";

import { GetAllRooms } from './../../redux/actions/room.js';
import { useDispatch, useSelector } from 'react-redux';

function CardViewRooms({ color }) {

  const { Allrooms } = useSelector(state => state.room);

  const [PropertyID, setPropertyID] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch((GetAllRooms()));
  }, [dispatch]);
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
            <h6 className="text-blueGray-700 text-xl font-bold ">View Rooms</h6>
            <input
              type="text"
              className="border-0 placeholder-blueGray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
              placeholder="Enter Property ID"
              onChange={(e) => setPropertyID(e.target.value)}
            />
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
              {Allrooms ? (
                Allrooms.map((room) => {
                  // Add a condition to check if room.Propertyid matches PropertyID
                  if (PropertyID === "" || room.Propertyid === PropertyID) {
                    return (
                      <tr key={room._id}>
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
                    );
                  } else {
                    return null;
                  }
                })
              ) : <></>}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default CardViewRooms

CardViewRooms.defaultProps = {
  color: "light",
};

CardViewRooms.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
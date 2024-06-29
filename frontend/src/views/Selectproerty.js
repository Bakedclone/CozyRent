import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid'

import { useDispatch, useSelector } from "react-redux";
import { getAllProperty } from "./../redux/actions/property.js";
import PreLoader from "./PreLoader.js";
import FilterSidebar from "components/Sidebar/FilterSidebar.js";
import CardAppleWatch from "components/Cards/CardAppleWatch.js";

function Selectproerty() {

  const { property, loading } = useSelector(state => state.property);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProperty())
  }, [dispatch]);

  const [selectedArea, setSelectedArea] = useState('Choose a Area');

  return (<>
  {loading ?  <PreLoader />: <></>}
    <div className="container mt-20 mx-auto items-center flex flex-wrap">
    <FilterSidebar/>
      <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg mt-15 py-16 px-12 relative z-10 ">
        <div className="w-full text-center lg:w-8/12">
          <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
            "Ready to experience the warmth and comfort of Our PG? Book now and secure your spot in our vibrant community! Whether you're a student seeking a peaceful study environment or a professional in need of a cozy retreat after a long day's work, Our PG offers the perfect blend of comfort, convenience, and camaraderie."

          </p>
          <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><h6 className="text-xl mb-1 font-semibold">
            Select City :
          </h6></label>
          <select id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected >Choose a City</option>
            <option value="Ahmedabad">Ahmedabad</option>
          </select>
          <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><h6 className="text-xl mt-10 mb-1 font-semibold">
            Select Area :
          </h6></label>
          <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(event) => setSelectedArea(event.target.value)}>
            <option selected>Choose a Area</option>
            <option value="S.G Highway">S.G. Highway</option>
            <option value="Navrangpura">Navrangpura</option>
            <option value="Gurukul">Gurukul</option>
          </select>

          <div className="text-center mt-16"></div>
        </div>
        <Grid container spacing={6}>
          {property && property.map((prop) => (
            (selectedArea === "Choose a Area" || prop.area === selectedArea) ? (
              <Grid item xs={12} sm={6} md={4}>
                <CardAppleWatch prop={prop} />
              </Grid>) : (<></>)
          ))}
        </Grid>
      </div>
    </div>
  </>
  )
}

export default Selectproerty
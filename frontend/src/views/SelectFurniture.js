import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from "react-redux";
import { getAllFurniture } from "./../redux/actions/furniture.js";
import PreLoader from "./PreLoader.js";
import CardAppleWatch from "components/Cards/CardAppleWatch.js";
import notfound from "./../assets/img/imgnotfound.png";

function SelectFurniture() {
  const { furniture, loading } = useSelector(state => state.furniture);
  // const { furniture, loading } = "";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFurniture());
  }, [dispatch]);

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [conditionFilter, setConditionFilter] = useState('');

  return (
    <>
      {loading ? <PreLoader /> : <></>}
      <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg mt-16 py-16 px-12 relative z-10">
        <div className="w-full text-center lg:w-8/12">
          <div className="flex flex-wrap justify-around items-center space-x-2">
            <div className="w-1/5 px-2 mb-4 lg:mb-0">
              <label htmlFor="minPrice" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                Min Price:
              </label>
              <input
                type="number"
                id="minPrice"
                placeholder="Min price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onChange={(event) => setMinPrice(event.target.value)}
              />
            </div>
            <div className="w-1/5 px-2 mb-4 lg:mb-0">
              <label htmlFor="maxPrice" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                Max Price:
              </label>
              <input
                type="number"
                id="maxPrice"
                placeholder="Max price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onChange={(event) => setMaxPrice(event.target.value)}
              />
            </div>
            <div className="w-1/5 px-2 mb-4 lg:mb-0">
              <label htmlFor="category" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                Category:
              </label>
              <input
                type="text"
                id="category"
                placeholder="Category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onChange={(event) => setSearchCategory(event.target.value)}
              />
            </div>
            <div className="w-1/5 px-2 mb-4 lg:mb-0">
              <label htmlFor="condition" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                Condition:
              </label>
              <select
                id="condition"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onChange={(event) => setConditionFilter(event.target.value)}
              >
                <option selected>Choose a Condition</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Average">Average</option>
              </select>
            </div>
          </div>
          <div className="mt-8">
            <Grid container spacing={6}>
              {furniture && furniture
                .filter(prop =>
                  (!minPrice || prop.price_per_month >= minPrice) &&
                  (!maxPrice || prop.price_per_month <= maxPrice) &&
                  (!searchCategory || prop.category.toLowerCase().includes(searchCategory.toLowerCase())) &&
                  (!conditionFilter || prop.condition === conditionFilter)
                )
                .map((prop, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <CardAppleWatch prop={prop} />
                  </Grid>
                ))}
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectFurniture;

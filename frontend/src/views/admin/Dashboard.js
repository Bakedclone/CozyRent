import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dashboardStatsLoader } from "./../../redux/actions/dashboard.js"

// components
import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";

export default function Dashboard() {
  const { lineChart, barChart } = useSelector(state => state.dashboard);
  const [chartReload, setChartReload] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dashboardStatsLoader());
  }, [dispatch]);
  useEffect(() => {
    setChartReload(prevState => !prevState);
  }, [lineChart]);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart values={lineChart ? lineChart : [0, 0, 0, 0, 0, 0]} reload={chartReload} />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart values={barChart ? barChart : [0, 0, 0, 0, 0, 0]} reload={chartReload} />
        </div>
      </div>
    </>
  );
}

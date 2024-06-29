import React, { useEffect } from "react";

import CardStats from "components/Cards/CardStats.js";
import { dashboardCardDataLoader } from "./../../redux/actions/dashboard.js";

import { useDispatch, useSelector } from "react-redux";

export default function HeaderStats() {
  const { carddata } = useSelector(state=>state.dashboard);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(dashboardCardDataLoader());
  }, [dispatch]);
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            {/* <div className="flex flex-wrap"> */}
              {/* <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Pending Rent"
                  statTitle={carddata?carddata.PendingRent:0}
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-solid fa-indian-rupee-sign"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Revenue"
                  statTitle={carddata?carddata.Revenue:0}
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-solid fa-indian-rupee-sign"
                  statIconColor="bg-green"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Available Beds"
                  statTitle={carddata?carddata.AvailableBeds:0}
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-solid fa-bed"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Counted Deposite"
                  statTitle={carddata?carddata.DepositCounts:0}
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-user"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

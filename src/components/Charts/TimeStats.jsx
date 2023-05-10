import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegBell } from "react-icons/fa";
import { TbAdjustments } from "react-icons/tb";

import TcNotification from "./TcNotification";
import { updateShowTcNotification } from "store/ecgSlice";
import clsx from "clsx";

/**
 * Time Stats Component
 * @returns
 */
const TimeStats = () => {
  const [currentTab, setCurrentTab] = useState("today");
  const dispatch = useDispatch();

  const { predictionWidget, showTcNotification } = useSelector(
    (state) => state.ecg
  );

  const Spacer = (props) => {
    const { first, last } = {
      first: false,
      last: false,
      ...props,
    };

    return (
      <div
        className={clsx(
          "absolute w-[0px] left-[50%] border border-[#CECACA]",
          first || last ? "h-[50%]" : "h-full",
          first ? "top-[50%]" : "top-0"
        )}
      />
    );
  };

  return (
    <div className={"w-full p-2 bg-mainPrimary px-4 timestats mt-1"}>
      <div className="relative flex items-center mb-3">
        <nav
          className="relative rounded-xs flex items-center divide-x divide-[#BDB9B9]"
          aria-label="Tabs"
        >
          {["today", "hourly", "daily"].map((tab, tabIdx) => (
            <button
              key={tab}
              className={clsx(
                tab === currentTab ? "font-bold" : "",
                "group relative w-[108px] flex-1 bg-[#F0F2F4] text-center p-1"
              )}
              onClick={() => setCurrentTab(tab)}
            >
              <span className="capitalize">{tab}</span>
            </button>
          ))}
        </nav>

        <div className="flex items-center ml-auto">
          <button
            className="text-white mr-1"
            onClick={() => dispatch(updateShowTcNotification())}
          >
            <FaRegBell className="w-6 h-6" />
          </button>

          <button
            className="text-white"
            onClick={() => dispatch(updateShowTcNotification())}
          >
            <TbAdjustments className="w-6 h-6" />
          </button>
        </div>
      </div>

      <table className="w-full text-white">
        <thead>
          <tr>
            <th className="text-left w-[216px]">
              <span className="text-lg font-bold"></span>
            </th>
            <th className="text-left w-[250px]">
              <span className="pl-8 text-lg font-bold">Mornng</span>
            </th>
            <th />
            <th className="text-center w-[250px]">
              <span className="text-lg font-bold">Afternoon</span>
            </th>
            <th />
            <th className="text-center w-[250px]">
              <span className="text-lg font-bold">Evening</span>
            </th>
            <th />
            <th className="text-center w-[250px]">
              <span className="text-lg font-bold">Overnight</span>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="">
              <span className="text-lg font-bold">AFib/Flutter</span>
            </td>
            <td>
              <div className="flex flex-col mb-2">
                <p className="flex items-center font-normal text-sm my-1">
                  Burden:
                  <span className="ml-auto text-base font-bold">59.62%</span>
                </p>
                <p className="flex items-center font-normal text-">
                  Longest Duration:
                  <span className="ml-auto text-base font-bold">59.62%</span>
                </p>
                <p className="flex items-center font-normal text-sm my-1">
                  Max HR:
                  <span className="ml-auto text-base font-bold">154bpm</span>
                </p>
              </div>
            </td>
            <td className="relative">
              <Spacer first />
            </td>
            <td className="text-center">
              <span className="text-base font-bold">70%</span>
            </td>
            <td className="relative">
              <Spacer first />
            </td>
            <td className="text-center">
              <span className="text-base font-bold">70%</span>
            </td>
            <td className="relative">
              <Spacer first />
            </td>
            <td className="text-center">
              <span className="text-base font-bold">70%</span>
            </td>
          </tr>

          <tr>
            <td className="">
              <span className="text-lg font-bold">VT</span>
            </td>
            <td>
              <div className="flex flex-col mb-2">
                <p className="flex items-center font-normal text-sm my-1">
                  Episodes:
                  <span className="ml-auto text-base font-bold">59.62%</span>
                </p>
                <p className="flex items-center font-normal text-">
                  Longest Duration:
                  <span className="ml-auto text-base font-bold">57s</span>
                </p>
              </div>
            </td>
            <td className="relative">
              <Spacer />
            </td>
            <td className="text-center">
              <span className="text-base font-bold">30%</span>
            </td>
            <td className="relative">
              <Spacer />
            </td>
            <td className="text-center">
              <span className="text-base font-bold">30%</span>
            </td>
            <td className="relative">
              <Spacer />
            </td>
            <td className="text-center">
              <span className="text-base font-bold">30%</span>
            </td>
          </tr>

          <tr>
            <td className="">
              <span className="text-lg font-bold">SVT</span>
            </td>
            <td>
              <div className="flex flex-col mb-2">
                <p className="flex items-center font-normal text-sm my-1">
                  Episodes:
                  <span className="ml-auto text-base font-bold">59.62%</span>
                </p>
                <p className="flex items-center font-normal text-sm my-1">
                  Longest Duration:
                  <span className="ml-auto text-base font-bold">57s</span>
                </p>
              </div>
            </td>
            <td className="relative">
              <Spacer last />
            </td>
            <td className="text-center">
              <span className="text-base font-bold">10%</span>
            </td>
            <td className="relative">
              <Spacer last />
            </td>
            <td className="text-center">
              <span className="text-base font-bold">10%</span>
            </td>
            <td className="relative">
              <Spacer last />
            </td>
            <td className="text-center">
              <span className="text-base font-bold">10%</span>
            </td>
          </tr>
        </tbody>
      </table>

      {showTcNotification && <TcNotification />}
    </div>
  );
};

export default TimeStats;

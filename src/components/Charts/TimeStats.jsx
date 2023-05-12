import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Tab, Tabs} from 'react-bootstrap';
import clsx from "clsx";

import { FaRegBell } from 'react-icons/fa';
import { TbAdjustments } from 'react-icons/tb';

import TcNotification from './TcNotification';
import { updateShowTcNotification } from 'store/ecgSlice';

/**
 * Time Stats Component
 * @returns
 */
const TimeStats = () => {

  const dispatch = useDispatch();

  const { predictionWidget, showTcNotification } = useSelector((state) => state.ecg);

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
    <div className={'w-full h-[32vh] bg-mainPrimary px-2 py-1 timestats mt-1'}>
      <div className='relative'>
        <Tabs defaultActiveKey="today" transition={true} className="mb-1">
          <Tab eventKey="today" title="Today">
            <table className="text-white">
              <thead>
                <tr>
                  <th className="text-left w-[140px]"></th>
                  <th className="time-title w-[280px]">Mornng</th>
                  <th />
                  <th className="time-title w-[200px]">Afternoon</th>
                  <th />
                  <th className="time-title w-[200px]">Evening</th>
                  <th />
                  <th className="time-title w-[200px]">Overnight</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className='time-first'>AFib/Flutter</td>
                  <td>
                    <div className="flex-1 mb-1">
                      <div className="flex flex-row items-center">
                        <span className="time-second">Burden:</span>
                        <span className="ml-auto time-third">59.62%</span>
                      </div>
                      <div className="flex flex-row items-center">
                        <span className="time-second">Longest Duration:</span>
                        <span className="ml-auto time-third">59s</span>
                      </div>
                      <div className="flex flex-row items-center">
                        <span className="time-second">Max HR:</span>
                        <span className="ml-auto time-third">154bpm</span>
                      </div>
                    </div>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">70%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">70%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">70%</span>
                  </td>
                </tr>

                <tr>
                  <td className='time-first'>VT</td>
                  <td>
                    <div className="flex-1 mb-1">
                      <div className="flex flex-row items-center">
                        <span className="time-second">Episodes:</span>
                        <span className="ml-auto time-third">59.62%</span>
                      </div>
                      <div className="flex flex-row items-center">
                        <span className="time-second">Longest Duration:</span>
                        <span className="ml-auto time-third">57s</span>
                      </div>
                    </div>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">30%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">30%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">30%</span>
                  </td>
                </tr>

                <tr>
                  <td className='time-first'>SVT</td>
                  <td>
                    <div className="flex-1 mb-1">
                      <div className="flex flex-row items-center">
                        <span className="time-second">Episodes:</span>
                        <span className="ml-auto time-third">59.62%</span>
                      </div>
                      <div className="flex flex-row items-center">
                        <span className="time-second">Longest Duration:</span>
                        <span className="ml-auto time-third">57s</span>
                      </div>
                    </div>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">10%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">10%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">10%</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="hourly" title="Hourly">
            <table className="text-white">
              <thead>
                <tr>
                  <th className="text-left w-[140px]"></th>
                  <th className="time-title w-[230px]">10AM</th>
                  <th />
                  <th className="time-title w-[130px]">11AM</th>
                  <th />
                  <th className="time-title w-[130px]">12AM</th>
                  <th />
                  <th className="time-title w-[130px]">1PM</th>
                  <th />
                  <th className="time-title w-[130px]">2PM</th>
                  <th />
                  <th className="time-title w-[130px]">3PM</th>
                  <th />
                  <th className="time-title w-[130px]">4PM</th>
                  <th />
                  <th className="time-title w-[130px]">5PM</th>
                  <th />
                  <th className="time-title w-[130px]">6PM</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className='time-first'>AFib/Flutter</td>
                  <td>
                    <div className="flex-1 mb-1">
                      <div className="flex flex-row items-center">
                        <span className="basis-2/3 time-second">Burden:</span>
                        <span className="basis-1/3 time-third">59.62%</span>
                      </div>
                      <div className="flex flex-row items-center">
                        <span className="basis-2/3 time-second">Longest Duration:</span>
                        <span className="basis-1/3 time-third">59s</span>
                      </div>
                      <div className="flex flex-row items-center">
                        <span className="basis-2/3 time-second">Max HR:</span>
                        <span className="basis-1/3 time-third">154bpm</span>
                      </div>
                    </div>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">37%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">34%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">27%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">33%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">35%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">28%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">39%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">37%</span>
                  </td>
                </tr>

                <tr>
                  <td className='time-first'>VT</td>
                  <td>
                    <div className="flex-1 mb-1">
                      <div className="flex flex-row items-center">
                        <span className="basis-2/3 time-second">Episodes:</span>
                        <span className="basis-1/3 time-third">59.62%</span>
                      </div>
                      <div className="flex flex-row items-center">
                        <span className="basis-2/3 time-second">Longest Duration:</span>
                        <span className="basis-1/3 time-third">57s</span>
                      </div>
                    </div>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">33%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">36%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">48%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">31%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">34%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">41%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">20%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">30%</span>
                  </td>
                </tr>

                <tr>
                  <td className='time-first'>SVT</td>
                  <td>
                    <div className="flex-1 mb-1">
                      <div className="flex flex-row items-center">
                        <span className="basis-2/3 time-second">Episodes:</span>
                        <span className="basis-1/3 time-third">59.62%</span>
                      </div>
                      <div className="flex flex-row items-center">
                        <span className="basis-2/3 time-second">Longest Duration:</span>
                        <span className="basis-1/3  time-third">57s</span>
                      </div>
                    </div>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">31%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">30%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">25%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">35%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">31%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">31%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">41%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">33%</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="daily" title="Daily">
          <table className="text-white">
              <thead>
                <tr>
                  <th className="text-left w-[140px]"></th>
                  <th className="time-title w-[230px]">10AM</th>
                  <th />
                  <th className="time-title w-[130px]">11AM</th>
                  <th />
                  <th className="time-title w-[130px]">12AM</th>
                  <th />
                  <th className="time-title w-[130px]">1PM</th>
                  <th />
                  <th className="time-title w-[130px]">2PM</th>
                  <th />
                  <th className="time-title w-[130px]">3PM</th>
                  <th />
                  <th className="time-title w-[130px]">4PM</th>
                  <th />
                  <th className="time-title w-[130px]">5PM</th>
                  <th />
                  <th className="time-title w-[130px]">6PM</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className='time-first'>AFib/Flutter</td>
                  <td>
                    <div className="flex-1 mb-1">
                      <div className="flex flex-row items-center">
                        <span className="basis-2/3 time-second">Burden:</span>
                        <span className="basis-1/3 time-third">59.62%</span>
                      </div>
                      <div className="flex flex-row items-center">
                        <span className="basis-2/3 time-second">Longest Duration:</span>
                        <span className="basis-1/3 time-third">59s</span>
                      </div>
                      <div className="flex flex-row items-center">
                        <span className="basis-2/3 time-second">Max HR:</span>
                        <span className="basis-1/3 time-third">154bpm</span>
                      </div>
                    </div>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">37%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">34%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">27%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">33%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">35%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">28%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">39%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">37%</span>
                  </td>
                </tr>

                <tr>
                  <td className='time-first'>VT</td>
                  <td>
                    <div className="flex-1 mb-1">
                      <div className="flex flex-row items-center">
                        <span className="basis-2/3 time-second">Episodes:</span>
                        <span className="basis-1/3 time-third">59.62%</span>
                      </div>
                      <div className="flex flex-row items-center">
                        <span className="basis-2/3 time-second">Longest Duration:</span>
                        <span className="basis-1/3 time-third">57s</span>
                      </div>
                    </div>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">33%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">36%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">48%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">31%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">34%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">41%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">20%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">30%</span>
                  </td>
                </tr>

                <tr>
                  <td className='time-first'>SVT</td>
                  <td>
                    <div className="flex-1 mb-1">
                      <div className="flex flex-row items-center">
                        <span className="basis-2/3 time-second">Episodes:</span>
                        <span className="basis-1/3 time-third">59.62%</span>
                      </div>
                      <div className="flex flex-row items-center">
                        <span className="basis-2/3 time-second">Longest Duration:</span>
                        <span className="basis-1/3  time-third">57s</span>
                      </div>
                    </div>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">31%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">30%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">25%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">35%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">31%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">31%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">41%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">33%</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Tab>
        </Tabs>
        <div className={'absolute right-[0.25rem] top-[0.25rem] flex items-center cursor-pointer'}>
          <FaRegBell className={'text-xl font-bold text-white hover:text-black mr-1'} onClick={()=>dispatch(updateShowTcNotification())} />
          <TbAdjustments className={'text-xl text-white hover:text-[rgba(0,0,0,0)]'} onClick={()=>dispatch(updateShowTcNotification())}/>
        </div>
      </div>
      
      {showTcNotification && <TcNotification />}
    </div>
  );
};

export default TimeStats;

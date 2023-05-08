import React, { useEffect, useRef, useState } from 'react';

import {Tab, Tabs, TabContainer} from 'react-bootstrap';

import { FaRegBell } from 'react-icons/fa';
import { TbAdjustments } from 'react-icons/tb';

/**
 * Time Stats Component
 * @returns
 */
const TimeStats = () => {


  return (
    <div className={'w-full h-[35vh] p-2 bg-main px-4'}>
      <div className='relative'>
        <Tabs defaultActiveKey="today" transition={true} className="mb-1">
          <Tab eventKey="today" title="TODAY">
            <div className='grid grid-cols-6 text-white'>
              <div></div>
              <div className="time-title">Morning</div>
              <div className="time-title">Afternoon</div>
              <div className="time-title">Evening</div>
              <div className="time-title">Overnight</div>
              <div></div>

              <div className="time-first">AFib/Flutter</div>
              <div className="flex-1 border-r-[1px] border-white">
                <div className='flex'>
                  <div className="time-second">Burden:</div>
                  <div className="time-third">59.62%</div>
                </div>
                <div className='flex'>
                  <div className="time-second">Longest Duration:</div>
                  <div className="time-third">1 d 20 h</div>
                </div>
                <div className='flex'>
                  <div className="time-second pb-3">Max HR:</div>
                  <div className="time-third pb-3">154 bpm</div>
                </div>
              </div>
              <div className="time-normal">60%</div>
              <div className="time-normal">38%</div>
              <div className="time-normal">35%</div>
              <div></div>

              <div className="time-first">VT</div>
              <div className="flex-1 border-r-[1px] border-white">
                <div className='flex'>
                  <div className="time-second">Episodes:</div>
                  <div className="time-third">5</div>
                </div>
                <div className='flex'>
                  <div className="time-second pb-3">Longest Episode:</div>
                  <div className="time-third pb-3">57s</div>
                </div>
              </div>
              <div className="time-normal">35%</div>
              <div className="time-normal">71%</div>
              <div className="time-normal">42%</div>
              <div></div>

              <div className="time-first">SVT</div>
              <div className="flex-1 border-r-[1px] border-white">
                <div className='flex'>
                  <div className="time-second">Episodes:</div>
                  <div className="time-third">5</div>
                </div>
                <div className='flex'>
                  <div className="time-second pb-3">Longest Episode:</div>
                  <div className="time-third pb-3">57s</div>
                </div>
              </div>
              <div className="time-normal">37%</div>
              <div className="time-normal">38%</div>
              <div className="time-normal">67%</div>
              <div></div>
            </div>
          </Tab>
          <Tab eventKey="hourly" title="HOURLY">
            <div className='grid grid-cols-12 text-white'>
              <div></div>
              <div className="time-title">10AM</div>
              <div></div>
              <div className="time-title">11AM</div>
              <div className="time-title">12PM</div>
              <div className="time-title">1PM</div>
              <div className="time-title">2PM</div>
              <div className="time-title">3PM</div>
              <div className="time-title">4PM</div>
              <div className="time-title">5PM</div>
              <div className="time-title">6PM</div>
              <div className="time-title">7PM</div>

              <div className="time-first">AFib/Flutter</div>
              <div className="flex-1 border-r-[1px] border-white col-span-2">
                <div className='flex'>
                  <div className="time-second">Burden:</div>
                  <div className="time-third">59.62%</div>
                </div>
                <div className='flex'>
                  <div className="time-second">Longest Duration:</div>
                  <div className="time-third">1 d 20 h</div>
                </div>
                <div className='flex'>
                  <div className="time-second pb-3">Max HR:</div>
                  <div className="time-third pb-3">154 bpm</div>
                </div>
              </div>
              <div className="time-normal">37%</div>
              <div className="time-normal">34%</div>
              <div className="time-normal">27%</div>
              <div className="time-normal">33%</div>
              <div className="time-normal">35%</div>
              <div className="time-normal">28%</div>
              <div className="time-normal">39%</div>
              <div className="time-normal">37%</div>
              <div className="time-normal">39%</div>

              <div className="time-first">VT</div>
              <div className="flex-1 border-r-[1px] border-white col-span-2">
                <div className='flex'>
                  <div className="time-second">Episodes:</div>
                  <div className="time-third">5</div>
                </div>
                <div className='flex'>
                  <div className="time-second pb-3">Longest Episode:</div>
                  <div className="time-third pb-3">57s</div>
                </div>
              </div>
              <div className="time-normal">33%</div>
              <div className="time-normal">36%</div>
              <div className="time-normal">48%</div>
              <div className="time-normal">31%</div>
              <div className="time-normal">34%</div>
              <div className="time-normal">41%</div>
              <div className="time-normal">20%</div>
              <div className="time-normal">30%</div>
              <div className="time-normal">35%</div>

              <div className="time-first">SVT</div>
              <div className="flex-1 border-r-[1px] border-white col-span-2">
                <div className='flex'>
                  <div className="time-second">Episodes:</div>
                  <div className="time-third">5</div>
                </div>
                <div className='flex'>
                  <div className="time-second pb-3">Longest Episode:</div>
                  <div className="time-third pb-3">57s</div>
                </div>
              </div>
              <div className="time-normal">31%</div>
              <div className="time-normal">30%</div>
              <div className="time-normal">25%</div>
              <div className="time-normal">35%</div>
              <div className="time-normal">31%</div>
              <div className="time-normal">31%</div>
              <div className="time-normal">41%</div>
              <div className="time-normal">33%</div>
              <div className="time-normal">26%</div>
            </div>
          </Tab>
          <Tab eventKey="daily" title="DAILY">
          <div className='grid grid-cols-12 text-white'>
              <div></div>
              <div className="time-title">Mon</div>
              <div></div>
              <div className="time-title">Tues</div>
              <div className="time-title">Weds</div>
              <div className="time-title">Thurs</div>
              <div className="time-title">Fri</div>
              <div className="time-title">Sat</div>
              <div className="time-title">Sun</div>
              <div className="time-title">Mon</div>
              <div className="time-title">Tues</div>
              <div className="time-title">Weds</div>

              <div className="time-first">AFib/Flutter</div>
              <div className="flex-1 border-r-[1px] border-white col-span-2">
                <div className='flex'>
                  <div className="time-second">Burden:</div>
                  <div className="time-third">59.62%</div>
                </div>
                <div className='flex'>
                  <div className="time-second">Longest Duration:</div>
                  <div className="time-third">1 d 20 h</div>
                </div>
                <div className='flex'>
                  <div className="time-second pb-3">Max HR:</div>
                  <div className="time-third pb-3">154 bpm</div>
                </div>
              </div>
              <div className="time-normal">37%</div>
              <div className="time-normal">34%</div>
              <div className="time-normal">27%</div>
              <div className="time-normal">33%</div>
              <div className="time-normal">35%</div>
              <div className="time-normal">28%</div>
              <div className="time-normal">39%</div>
              <div className="time-normal">37%</div>
              <div className="time-normal">39%</div>

              <div className="time-first">VT</div>
              <div className="flex-1 border-r-[1px] border-white col-span-2">
                <div className='flex'>
                  <div className="time-second">Episodes:</div>
                  <div className="time-third">5</div>
                </div>
                <div className='flex'>
                  <div className="time-second pb-3">Longest Episode:</div>
                  <div className="time-third pb-3">57s</div>
                </div>
              </div>
              <div className="time-normal">33%</div>
              <div className="time-normal">36%</div>
              <div className="time-normal">48%</div>
              <div className="time-normal">31%</div>
              <div className="time-normal">34%</div>
              <div className="time-normal">41%</div>
              <div className="time-normal">20%</div>
              <div className="time-normal">30%</div>
              <div className="time-normal">35%</div>

              <div className="time-first">SVT</div>
              <div className="flex-1 border-r-[1px] border-white col-span-2">
                <div className='flex'>
                  <div className="time-second">Episodes:</div>
                  <div className="time-third">5</div>
                </div>
                <div className='flex'>
                  <div className="time-second pb-3">Longest Episode:</div>
                  <div className="time-third pb-3">57s</div>
                </div>
              </div>
              <div className="time-normal">31%</div>
              <div className="time-normal">30%</div>
              <div className="time-normal">25%</div>
              <div className="time-normal">35%</div>
              <div className="time-normal">31%</div>
              <div className="time-normal">31%</div>
              <div className="time-normal">41%</div>
              <div className="time-normal">33%</div>
              <div className="time-normal">26%</div>
            </div>
          </Tab>
        </Tabs>
        <div className={'absolute right-0 top-0 flex items-center cursor-pointer w-[40px]'}>
          <FaRegBell className={'text-2xl font-bold text-white hover:text-white-400 mr-1'} />
          <TbAdjustments className={'text-3xl text-white hover:text-white-400'} />
        </div>
      </div>
    </div>
  );
};

export default TimeStats;

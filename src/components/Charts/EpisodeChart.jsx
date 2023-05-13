import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Plotly from "plotly.js-dist-min";

import { setSelectedChartData, setEpisodeChartDataChecked } from 'store/episodeDataSlice';

import { BsPencil } from "react-icons/bs";
import { CgClose } from 'react-icons/cg';
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

export default function EpisodeChart(props) {
  const dispatch = useDispatch();

  const episodePlotRef = useRef(null);

  const selectedChartData = useSelector((state) => state.episodeData.selectedChartData);
  const {chartId, chartTitle, episodeData, data, layout} = selectedChartData;

  let [current, setCurrent] = useState(1);
  const total = 3;

  useEffect(() => {
    Plotly.newPlot(episodePlotRef.current,
      [
        {
          x: data[0][0].x,
          y: data[0][0].y,
          type: data[0][0].type,
          line: {color: data[0][0].line.color},
        }
      ],
      {
        "xaxis": {
          "showline": true,
          "showgrid": false,
          "showticklabels": false,
          "zeroline": false
        },
        "yaxis": {
          "fixedrange": true,
          "showline": false,
          "showgrid": false,
          "showticklabels": false,
          "zeroline": false
        },
        "margin": {
          "b": 0,
          "l": 10,
          "r": 10,
          "t": 0
        },
        "height": 100,
        "hovermode": false
      },
      {
        displaylogo: false,
        displayModeBar: true,
        modeBarButtonsToRemove: ['autoscale', 'pan', 'toimage'],
        responsive: true,
      }
    );
  }, []);

  const previous = () => {
    if (current > 1) {
      Plotly.restyle(episodePlotRef.current, { x: [data[current - 2][0]['x']], y: [data[current - 2][0]['y']] });
      setCurrent(current - 1);
    }
  };
  const next = () => {
    if (current < total) {
      Plotly.restyle(episodePlotRef.current, { x: [data[current][0]['x']], y: [data[current][0]['y']] });
      setCurrent(current + 1);
    }
  };
  const closeDrawer = () => {
    dispatch(setSelectedChartData({...selectedChartData, checked: "", show: false}));
    dispatch(setEpisodeChartDataChecked({key: chartId, checked: false}));

    setTimeout(() => { (Plotly.Plots.resize('heartRateChart')); }, 125);
    setTimeout(() => { (Plotly.Plots.resize('ecgChart')); }, 125);
  };

  return (
    <div className={'h-full w-full tracking-tight bg-white z-[999]'}>
      <div className='flex justify-between text-white px-3 bg-mainPrimary py-[0.5rem]'>
        <div className='flex items-center text-base'>{chartTitle}</div>
        <div className={'flex items-center cursor-pointer'}
          onClick={() => closeDrawer()}
        >
          <CgClose className={'text-xl'} />
        </div>
      </div>

      <div className='flex bg-borderPrimary m-2 p-2'>
      {
        Object.keys(episodeData).map((key, idx) => {
          return (
            <div className="flex-1 items-center justify-center px-1" key={idx}>
              <div className="text-sm text-drawerText capitalize-first-letter">{key}</div>
              <div className="text-sm text-drawerTextDark">{episodeData[key]}</div>
            </div>
          )
        })
      }
      </div>

      <div className='flex flex-row bg-borderPrimary m-2 px-2 py-1'>
        <div className='flex text-drawerTextDark text-sm'>Duration 1 d 8 h Avg HR 150 bpm</div>
        <button
          type="button"
          onClick={() => previous()}
          className="relative inline-flex items-center justify-center font-sm text-drawerText hover:opacity-70 focus:outline-none ml-2"
        >
          <KeyboardArrowLeft fontSize="small"/>
        </button>
        <div className='flex text-drawerText mx-1'>{ current }/{ total }</div>
        <button
          type="button"
          onClick={() => next()}
          className="relative inline-flex items-center justify-center font-sm text-drawerText hover:opacity-70 focus:outline-none mr-2"
        >
          <KeyboardArrowRight fontSize="small"/>
        </button>

        <div className="flex items-center justify-end text-drawerText text-sm">
          03/24/22 10:43:22
          <BsPencil className={"ml-3"} />
        </div>
      </div>

      <div
        id="episodeChart"
        ref={episodePlotRef}
        className="flex h-[100px]"
      />

      <div className='flex border-b border-[rgba(0, 0, 0, 0.12)]' />
    </div>
  );
}
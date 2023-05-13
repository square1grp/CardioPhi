import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsBell } from "react-icons/bs";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import Plotly from "plotly.js-dist-min";
import clsx from "clsx";

import HrNotification from "./HrNotification";
import ZoomSlider from "components/atoms/ZoomSlider";
import HeartRateToolbarItem from "../atoms/HeartRateToolbarItem";

import { setSelectedChartData, setEpisodeChartDataChecked, setEpisodeData } from 'store/episodeDataSlice';
import { updateShowHrNotification } from "store/episodeDataSlice";

/**
 * HeartRate Chart Component
 * @returns
 */
const HeartRateChart = () => {
  const dispatch = useDispatch();

  const [zoomValue, setZoomValue] = useState(0);

  const heartPlotRef = useRef(null);

  const { episodeChartData, selectedChartData, showHrNotification } = useSelector((state) => state.episodeData);

  const {
    AfibChart1,
    avBlockChart,
  } = useSelector((state) => state.episodes);

  const heartRateStore = useSelector((state) => state.heartRate);
  const every10th = (value, index, arr) => index % 10 === 0;

  const heartRateLayout = {
    xaxis: {
      showline: false,
      showgrid: false,
      showticklabels: true,
      ticklabelposition: "top",
      tickmode: "array",
      tickvals: [50, 220, 390, 560, 730, 900, 1070],
      ticktext: ["6am", "noon", "6pm", "midnight", "6am", "noon", "6pm"],
    },
    yaxis: {
      showline: false,
      showgrid: false,
      showticklabels: true,
      tickmode: "array",
      range: [0, 30],
      tickvals: [5, 12, 18, 25],
      ticktext: [50, 100, 150, 200],

      title: {
        text: "HR<br>(bpm)",
      },
    },
    autosize: true,
    hovermode: false,
    margin: {
      t: 0,
      b: 30,
      r: 0,
    },
  };

  useEffect(() => {
    let epiData = [
      [{
        x: [],
        y: [],
        type: 'scatter',
        line: {
          color: "black",
        },
      }],
      [{
        x: [],
        y: [],
        type: 'scatter',
        line: {
          color: "black",
        },
      }],
      [{
        x: [],
        y: [],
        type: 'scatter',
        line: {
          color: "black",
        },
      }],
    ];
    avBlockChart.chart1.forEach((value, index) => {
      epiData[0][0].x.push(index);
      epiData[0][0].y.push(value);
    });
    avBlockChart.chart2.forEach((value, index) => {
      epiData[1][0].x.push(index);
      epiData[1][0].y.push(value);
    });
    avBlockChart.chart3.forEach((value, index) => {
      epiData[2][0].x.push(index);
      epiData[2][0].y.push(value);
    });

    let afibEpiData = [
      [{
        x: [],
        y: [],
        type: 'scatter',
        line: {
          color: 'black',
        },
      }],
      [{
        x: [],
        y: [],
        type: 'scatter',
        line: {
          color: 'black',
        },
      }],
      [{
        x: [],
        y: [],
        type: 'scatter',
        line: {
          color: 'black',
        },
      }],
    ];
    AfibChart1.afibEpisode1.forEach((value, index) => {
      afibEpiData[0][0].x.push(index);
      afibEpiData[0][0].y.push(value);
    });
    AfibChart1.afibEpisode2.forEach((value, index) => {
      afibEpiData[1][0].x.push(index);
      afibEpiData[1][0].y.push(value);
    });
    AfibChart1.afibEpisode3.forEach((value, index) => {
      afibEpiData[2][0].x.push(index);
      afibEpiData[2][0].y.push(value);
    });

    dispatch(setEpisodeData({episodeData: epiData, afibEpisodesData: afibEpiData}));
  }, [avBlockChart, AfibChart1]);

  useEffect(() => {
    Plotly.newPlot(
      heartPlotRef.current,
      [
        {
          z: heartRateStore.beatdata.map((v, i) => v.filter(every10th)),
          showscale: false,
          type: "heatmap",
          colorscale: [
            ["0.0", "#fff"],
            ["0.1", "#fff"],

            ["0.15", "#fff"],
            ["0.3", "#020202"],
            ["1.0", "#020202"],
          ],
        },
      ],
      heartRateLayout,
      {
        displaylogo: false,
        displaymodebar: true,
        modeBarButtonsToRemove: ["autoscale", "pan", "toimage"],
        responsive: true,
      }
    );
  }, [heartRateStore]);

  const hrshapes = [
    {
      type: "rect",
      xref: "x",
      yref: "paper",
      x0: 25,
      y0: 0,
      x1: 26,
      y1: 1,
      opacity: 0.5,
      line: {
        width: 0,
      },
    },
    {
      type: "rect",
      xref: "x",
      yref: "paper",
      x0: 100,
      y0: 0,
      x1: 102,
      y1: 1,
      opacity: 0.5,
      line: {
        width: 0,
      },
    },
    {
      type: "rect",
      xref: "x",
      yref: "paper",
      x0: 230,
      y0: 0,
      x1: 231,
      y1: 1,
      opacity: 0.5,
      line: {
        width: 0,
      },
    },
    {
      type: "rect",
      xref: "x",
      yref: "paper",
      x0: 325,
      y0: 0,
      x1: 326,
      y1: 1,
      opacity: 0.5,
      line: {
        width: 0,
      },
    },
    {
      type: "rect",
      xref: "x",
      yref: "paper",
      x0: 375,
      y0: 0,
      x1: 376,
      y1: 1,
      opacity: 0.5,
      line: {
        width: 0,
      },
    },
    {
      type: "rect",
      xref: "x",
      yref: "paper",
      x0: 500,
      y0: 0,
      x1: 501,
      y1: 1,
      opacity: 0.5,
      line: {
        width: 0,
      },
    },
  ];

  const showMin = {
    shapes: hrshapes,
  };
  const hideMin = {
    shapes: [],
  };
  
  const updateSelectedChart = (target) => {
    dispatch(setEpisodeChartDataChecked({key: target.value, checked: target.checked}));
    if (target.checked) {
      dispatch(setSelectedChartData({...episodeChartData[target.value], checked: target.value, show: true}));
    } else {
      dispatch(setSelectedChartData({...selectedChartData, checked: "", show: false}));
    }
    setTimeout(() => { (Plotly.Plots.resize('heartRateChart')); }, 125);
    setTimeout(() => { (Plotly.Plots.resize('ecgChart')); }, 125);
  };

  useEffect(() => {
    if (selectedChartData.show) {
      hrshapes.map((shape) => Object.assign(shape,
        { fillcolor: selectedChartData.color }));
      Plotly.relayout('heartRateChart', showMin);
    } else {
      Plotly.relayout('heartRateChart', hideMin);
    }
  }, [selectedChartData]);


  return (
    <div className={"flex w-full"}>
      <div className={clsx(
        selectedChartData.show ? "basis-1/2" : "w-full",
        "flex-1 h-full"
      )}>
        <div className="relative flex justify-between bg-white border-[1px] border-borderPrimary">
          <div className="w-full grid grid-cols-6">
            <HeartRateToolbarItem title="Min HR" subTitle="58 pbm" value="minHR" color={"#ffa29e"} checked={episodeChartData.minHR.checked} onChange={target => updateSelectedChart(target)} />
            <HeartRateToolbarItem title="Max HR" subTitle="115 pbm" value="maxHR" color={"#9274d5"} checked={episodeChartData.maxHR.checked} onChange={target => updateSelectedChart(target)} />
            <HeartRateToolbarItem title="PSVC" subTitle="254 Beats" value="PSVC" color={"#c5e1a5"} checked={episodeChartData.PSVC.checked} onChange={target => updateSelectedChart(target)} />
            <HeartRateToolbarItem title="PVC" subTitle="254 Beats" value="PVC" color={"#ffab40"} checked={episodeChartData.PVC.checked} onChange={target => updateSelectedChart(target)} />
            <HeartRateToolbarItem title="Other Beats" subTitle="254 Beats" value="OtherBeats" color={"#82b1ff"} checked={episodeChartData.OtherBeats.checked} onChange={target => updateSelectedChart(target)} />
            <HeartRateToolbarItem title="Sinus" subTitle="5 Examples" value="sinus" color={"#ff8a65"} checked={episodeChartData.sinus.checked} onChange={target => updateSelectedChart(target)} />
          </div>

          <div className={"flex items-center justify-end w-[150px] border-t-[6px] border-t-[#4A5060] p-1"}>
            <button
              className={"text-xl text-[#222121] mr-1"}
              onClick={() => dispatch(updateShowHrNotification())}
            >
              <BsBell />
            </button>

            <button
              className={"text-xl text-[#222121]"}
              onClick={() => dispatch(updateShowHrNotification())}
            >
              <HiOutlineAdjustmentsVertical />
            </button>
          </div>
        </div>

        <div className="flex justify-between bg-white border-[1px] border-borderPrimary mb-1">
          <div className="w-full grid grid-cols-5">
            <HeartRateToolbarItem title="AFib/Flutter" subTitle="Burden 59.62%" value="AFib" color={"#ffed80"} checked={episodeChartData.AFib.checked} onChange={target => updateSelectedChart(target)} />
            <HeartRateToolbarItem title="SVT" subTitle="1 episode" value="SVT" color={"#b39ddb"} checked={episodeChartData.SVT.checked} onChange={target => updateSelectedChart(target)} />
            <HeartRateToolbarItem title="VT" subTitle="5 Episodes" value="VT" color={"#ff80ab"} checked={episodeChartData.VT.checked} onChange={target => updateSelectedChart(target)} />
            <HeartRateToolbarItem title="Pauses" subTitle="3 Episodes" value="pauses" color={"#80ffaa"} checked={episodeChartData.pauses.checked} onChange={target => updateSelectedChart(target)} />
            <HeartRateToolbarItem title="AV Block" subTitle="Type --" value="avBlock" color={"#80eaff"} checked={episodeChartData.avBlock.checked} onChange={target => updateSelectedChart(target)} />
          </div>
        </div>

        <div
          id="heartRateChart"
          ref={heartPlotRef}
          className={
            "w-full h-[18vh] outline outline-1 outline-borderPrimary"
          }
        />
        <div className="flex justify-end items-cente">
          <div className="items-center w-36">
            <ZoomSlider
              value={zoomValue}
              onChange={(value) => {
                setZoomValue(value);
              }}
            />
          </div>
        </div>
      </div>
      {showHrNotification && <HrNotification />}
    </div>
  );
};

export default HeartRateChart;

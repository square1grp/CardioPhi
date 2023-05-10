import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsBell } from "react-icons/bs";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import Plotly from "plotly.js-dist-min";

import HrNotification from "./HrNotification";
import ZoomSlider from "components/atoms/ZoomSlider";
import HeartRateToolbarItem from "../../components/atoms/HeartRateToolbarItem";

import { setSelectedChartData } from "store/heartRateSlice";
import { updateShowHrNotification } from "store/episodeDataSlice";

/**
 * HeartRate Chart Component
 * @returns
 */
const HeartRateChart = () => {
  const dispatch = useDispatch();

  const [zoomValue, setZoomValue] = useState(0);

  const heartPlotRef = useRef(null);

  const episodeChartData = useSelector(
    (state) => state.episodeData.episodeChartData
  );
  const selectedChartData = useSelector(
    (state) => state.episodeData.selectedChartData
  );

  const showHrNotification = useSelector(
    (state) => state.episodeData.showHrNotification
  );

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

  useEffect(() => {
    if (selectedChartData.checked) {
      hrshapes.map((shape) =>
        Object.assign(shape, { fillcolor: selectedChartData.color })
      );
      Plotly.relayout("heartRateChart", showMin);
    } else {
      Plotly.relayout("heartRateChart", hideMin);
    }
  }, [selectedChartData]);

  const updateSelectedChart = (val) => {
    if (val) {
      if (selectedChartData.checked) {
        selectedChartData.checked = false;
      }

      // eslint-disable-next-line dot-notation
      dispatch(setSelectedChartData(episodeChartData[val]));
      dispatch(setSelectedChartData({ ...selectedChartData, show: true }));
      Object.keys(episodeChartData).map((item) =>
        Object.assign(item, { test: false })
      );
    } else {
      dispatch(setSelectedChartData({ ...selectedChartData, show: false }));
    }
    setTimeout(() => {
      Plotly.Plots.resize("heartRateChart");
    }, 125);
    setTimeout(() => {
      Plotly.Plots.resize("ecgChart");
    }, 125);
  };

  return (
    <div className={"w-full overflow-hidden"}>
      <div className="flex-1 w-full h-full">
        <div className="relative flex justify-between bg-white border-[1px] border-borderPrimary mb-1">
          <div className="w-full grid grid-cols-6">
            <HeartRateToolbarItem
              title="Min HR"
              value="58 pbm"
              checked={episodeChartData.minHR.checked}
              onChange={updateSelectedChart}
            />
            <HeartRateToolbarItem
              title="Max HR"
              value="115 pbm"
              checked={episodeChartData.maxHR.checked}
              onChange={updateSelectedChart}
            />
            <HeartRateToolbarItem
              title="PSVC"
              value="254 Beats"
              checked={episodeChartData.PSVC.checked}
              onChange={updateSelectedChart}
            />
            <HeartRateToolbarItem
              title="PVC"
              value="254 Beats"
              checked={episodeChartData.PVC.checked}
              onChange={updateSelectedChart}
            />
            <HeartRateToolbarItem
              title="Other Beats"
              value="254 Beats"
              checked={episodeChartData.OtherBeats.checked}
              onChange={updateSelectedChart}
            />
            <HeartRateToolbarItem
              title="Sinus"
              value="5 Examples"
              checked={episodeChartData.sinus.checked}
              onChange={updateSelectedChart}
            />
          </div>

          <div
            className={
              "flex items-start justify-end w-[150px] border-t-8 border-t-[#4A5060] p-1"
            }
          >
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
            <HeartRateToolbarItem
              title="AFib/Flutter"
              value="Burden 59.62%"
              checked={episodeChartData.AFib.checked}
              onChange={updateSelectedChart}
            />
            <HeartRateToolbarItem
              title="SVT"
              value="1 episode"
              checked={episodeChartData.SVT.checked}
              onChange={updateSelectedChart}
            />
            <HeartRateToolbarItem
              title="VT"
              value="5 Episodes"
              checked={episodeChartData.VT.checked}
              onChange={updateSelectedChart}
            />
            <HeartRateToolbarItem
              title="Pauses"
              value="3 Episodes"
              checked={episodeChartData.pauses.checked}
              onChange={updateSelectedChart}
            />
            <HeartRateToolbarItem
              title="AV Block"
              value="Type --"
              checked={episodeChartData.avBlock.checked}
              onChange={updateSelectedChart}
            />
          </div>
        </div>

        <div
          id="heartRateChart"
          ref={heartPlotRef}
          className={
            "w-full h-[230px] outline outline-1 outline-borderPrimary mt-4"
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

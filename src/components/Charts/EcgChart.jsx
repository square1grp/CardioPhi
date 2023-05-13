import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import Plotly from "plotly.js-dist-min";
import Slider from "react-rangeslider";

import { BsPencil, BsPause, BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import ZoomSlider from "components/atoms/ZoomSlider";
import { fetchEcgSummary } from "../../store/asyncThunk";

import "react-rangeslider/lib/index.css";

/**
 * Ecg Chart Component
 * @returns
 */
const EcgChart = () => {
  const dispatch = useDispatch();

  const plotRef = useRef(null);

  const intervalId = useRef();
  const liveGraph = useSelector((state) => state.ecg.liveGraph);
  const store = useSelector((state) => state.ecg);
  const show = useSelector((state) => state.episodeData.selectedChartData.show);
  const { ticktext, tickvals } = store;

  const [play, setPlay] = useState(false);
  const [sliderValue, setSliderValue] = useState(80);
  const [zoomValue, setZoomValue] = useState(0);
  const [showDetections, setDetections] = useState(false);

  const liveDetections = useRef([]);

  const [data, setData] = useState([
    {
      x: [],
      y: [],
      type: "scattergl",
      line: {
        color: "black",
      },
    },
  ]);

  const chartLayout = {
    xaxis: {
      showline: false,
      showgrid: false,
      showticklabels: true,
      tickmode: "array",
      range: [0, 3600],
      tickvals,
      ticktext,
      minor: {
        dtick: 72,
        tick0: 0,
        showgrid: true,
      },
    },
    yaxis: {
      fixedrange: true,
      showline: true,
      showgrid: true,
      showticklabels: true,
      zeroline: false,
      gridcolor: "#555",
      title: {
        text: "Millivolts<br>(mV)",
      },
    },
    margin: {
      b: 25,
      t: 0,
      r: 0,
    },
    shapes: null,
    autosize: true,

    hovermode: false,
  };

  const detections = useRef({
    shapes: liveDetections.current,
  });
  const noDetections = useRef({
    shapes: [],
  });

  useEffect(() => {
    dispatch(fetchEcgSummary());
  }, [dispatch]);

  useEffect(() => {
    const config = {
      displaylogo: false,
      displaymodebar: true,
      modeBarButtonsToRemove: ["autoscale", "pan", "toimage"],
      responsive: true,
    };

    Plotly.newPlot(plotRef.current, data, chartLayout, config);
  }, [data]);

  useEffect(() => {
    if (play) {
      intervalId.current = setInterval(() => {
        const xaxisRange = plotRef.current.layout.xaxis.range;
        Plotly.relayout(plotRef.current, {
          "xaxis.range": [xaxisRange[0] + 45, xaxisRange[1] + 45],
        });
      }, 125);
    } else {
      clearInterval(intervalId.current);
    }
  }, [play]);

  useEffect(() => {
    if (showDetections) {
      Plotly.relayout(plotRef.current, detections.current);
    } else {
      Plotly.relayout(plotRef.current, noDetections.current);
    }
  }, [showDetections]);

  useEffect(() => {
    let x = [],
      y = [];
    liveGraph.raw_signal.forEach((value, index) => {
      x.push(index);
      y.push(value);
    });

    setData([{ ...data[0], x: x, y: y }]);

    liveGraph.detections.forEach((arr) => {
      liveDetections.current.push({
        type: "rect",
        xref: "x",
        yref: "paper",
        x0: arr[0][0],
        y0: 0,
        x1: arr[0][1],
        y1: 1,
        fillcolor: "#55CEFF",
        opacity: arr[1] > 0.55 ? 0.8 : arr[1],
        line: {
          width: 0,
        },
      });
    });
  }, [liveGraph]);

  const handlePlay = () => setPlay(!play);

  const handleZoomChange = (newValue) => {
    if (newValue === zoomValue) return;

    const isZoomIn = newValue > zoomValue;
    const totalTimes = Math.abs(newValue - zoomValue);

    for (let times = 0; times < totalTimes; times++) {
      if (isZoomIn) handleZoomIn();
      else handleZoomOut();
    }
  };

  const handleZoomIn = () => {
    setZoomValue(zoomValue + 1);

    plotRef.current.querySelector('a[data-attr="zoom"][data-val="in"]').click();
  };

  const handleZoomOut = () => {
    setZoomValue(zoomValue - 1);

    plotRef.current
      .querySelector('a[data-attr="zoom"][data-val="out"]')
      .click();
  };

  return (
    <div className={"w-full overflow-hidden"}>
      <div className="flex flex-row text-xs pb-1">
        <div className="flex items-center">
          Start: 07/08/2022 10:40 PM
          <BsPencil className={"mx-2"} />
        </div>
        <div
          className={clsx(
            "flex items-center",
            show ? "ml-[1rem]" : "ml-[2.5rem]"
          )}
        >
          End: 07/09/2022 12:40 PM
          <BsPencil className={"mx-2"} />
        </div>
        <div
          className={clsx(
            "flex items-center",
            show ? "ml-[1rem]" : "ml-[2.5rem]"
          )}
        >
          Total Monitoring Time: 20h 52min
        </div>
        <div
          className={clsx(
            "flex items-center",
            show ? "ml-[1rem]" : "ml-[2.5rem]"
          )}
        >
          Total Time Analyzed: 20h 52min
        </div>
      </div>

      <div className="flex-1 bg-mainPrimary">
        <div className="flex justify-between px-3 text-white text-sm">
          <div className="flex items-center">
            ECG <BsPause className={"text-xl"} />
          </div>
          <div className="flex items-center">
            Min HR: {Math.round(liveGraph.hr.min)} pbm
          </div>
          <div className="flex items-center font-bold">HR: 86 pbm</div>
          <div className="flex items-center">
            Max HR: {Math.round(liveGraph.hr.max)} pbm
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={showDetections}
              onChange={() => setDetections(!showDetections)}
              className="custom-checkbox mr-1"
            />
            Interpretation
          </div>
          <div className="flex items-center"> Atrial Fibrilation/Flutter</div>
          <div className={"flex items-center"}>
            <RxDotFilled className={"text-2xl"} />
            Live
          </div>
        </div>

        <div
          id="ecgChart"
          ref={plotRef}
          className={"w-full h-[calc(18vh-10px)] outline-1 outline-black"}
        />

        <div className="slider progress-slider">
          <Slider
            min={0}
            max={100}
            value={sliderValue}
            onChange={(value) => {
              setSliderValue(value);
            }}
            style={{ height: "100%" }}
          />
        </div>

        <div className="flex justify-between items-center bg-white">
          <button
            className={
              "inline-flex items-center justify-center text-2xl text-black"
            }
            onClick={handlePlay}
          >
            {!play ? <BsFillPlayFill /> : <BsPauseFill />}
          </button>

          <div className="flex-none items-center w-36">
            <ZoomSlider
              value={zoomValue}
              onZoomIn={handleZoomIn}
              onZoomOut={handleZoomOut}
              onChangeValue={handleZoomChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcgChart;

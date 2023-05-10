import { RangeSlider } from "components";
import React, { useEffect, useRef, useState } from "react";
import {
  Edit as EditIcon,
  FiberManualRecord as FiberManualRecordIcon,
  Stop as StopIcon,
} from "@mui/icons-material";
import { Slider } from "@mui/material";

const TimeIndicator = ({ defaultValue, onChange }) => {
  return (
    <Slider
      aria-label="time-indicator"
      defaultValue={defaultValue}
      min={1}
      max={100}
      onChange={(_, value) => onChange(value)}
      sx={{
        color: "rgba(0,0,0,0.87)",
        height: 8,
        borderRadius: 0,
        "& .MuiSlider-thumb": {
          width: 12,
          height: 12,
          transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
          "&:before": {
            boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
          },
          "&:hover, &.Mui-focusVisible": {
            boxShadow: `0px 0px 0px 8px ${"rgb(0 0 0 / 16%)"}`,
          },
          "&.Mui-active": {
            width: 20,
            height: 20,
          },
        },
        "& .MuiSlider-rail": {
          opacity: 0.28,
        },
      }}
    />
  );
};

const ECG = () => {
  const [isLive, setIsLive] = useState(false);
  const [time, setTime] = useState(50);

  return (
    <div className="p-4">
      <div className="flex items-center mb-2.5">
        <span>Start: 07/08/2021 10:40 PM</span>

        <button className="h-4 w-4 inline-flex items-center justify-center mx-2">
          <EditIcon />
        </button>

        <span>End: 07/09/2021 12:40 PM</span>

        <button className="h-4 w-4 inline-flex items-center justify-center mx-2">
          <EditIcon />
        </button>

        <span className="mx-4">Total monitoring time: 20h 52min</span>

        <span className="mx-4">Total time analyzed: 20h 52min</span>
      </div>

      <div className="flex items-center bg-[#066A94] text-white p-1">
        <span className="mr-8">ECG II</span>
        <span className="mr-14">Min HR: 68 bpm</span>
        <span className="mr-16">HR: 86 bpm</span>
        <span className="mr-16">Max HR: 158 bpm</span>

        <div className="relative flex items-center">
          <div className="flex items-center h-5">
            <input
              id="interpretation"
              name="comments"
              type="checkbox"
              className="h-4 w-4 border-[#066A94] focus:ring-0 focus:ring-offset-0 focus:outline-0 focus:outline-offset-0	"
            />
          </div>
          <div className="ml-2">
            <label htmlFor="interpretation" className="">
              Interpretation
            </label>
          </div>
        </div>

        <span className="mx-auto">Atrial Fibrillation / Flutter</span>

        <div className="inline-flex items-center">
          {!isLive ? (
            <FiberManualRecordIcon fontSize="small" />
          ) : (
            <StopIcon fontSize="small" />
          )}
          <span className="ml-1">Live</span>
        </div>
      </div>

      <div className="">
        <TimeIndicator defaultValue={time} onChange={setTime} />
      </div>
    </div>
  );
};

export default ECG;

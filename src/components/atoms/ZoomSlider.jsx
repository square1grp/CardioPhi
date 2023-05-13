import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";

const ZoomSlider = ({
  value: initValue,
  onChange: handleChange = () => null,
}) => {
  const [value, setValue] = useState(initValue);

  useEffect(() => {
    if (Math.abs(value) > 5) return;

    handleChange(value);
  }, [value]);

  return (
    <div className="w-full flex flex-row items-center justify-center">
      <div className="inline-flex items-center mr-[-1px]">
        <IconButton
          sx={{ padding: 0 }}
          onClick={() => setValue(Math.max(value - 1, -5))}
        >
          <AiOutlineMinusCircle size={16} />
        </IconButton>
      </div>
      <div className="w-full flex-1 slider zoom-slider">
        <Slider
          min={-5}
          max={5}
          value={value}
          style={{ height: "100%" }}
          onChange={setValue}
        />
      </div>
      <div className="inline-flex items-center ml-[-1px]">
        <IconButton
          sx={{ padding: 0 }}
          onClick={() => setValue(Math.min(value + 1, 5))}
        >
          <AiOutlinePlusCircle size={16} />
        </IconButton>
      </div>
    </div>
  );
};

export default ZoomSlider;

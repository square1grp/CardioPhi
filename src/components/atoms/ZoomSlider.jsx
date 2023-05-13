import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IconButton } from "@mui/material";

const ZoomSlider = ({
  value,
  onChangeValue = () => null,
  onZoomOut = () => null,
  onZoomIn = () => null,
}) => {
  const handleZoomOut = () => {
    if (value > -5) onZoomOut();
  };

  const handleZoomIn = () => {
    if (value < 5) onZoomIn();
  };

  return (
    <div className="w-full flex flex-row items-center justify-center">
      <div className="inline-flex items-center mr-[-1px]">
        <IconButton sx={{ padding: 0 }} onClick={handleZoomOut}>
          <AiOutlineMinusCircle size={16} />
        </IconButton>
      </div>
      <div className="w-full flex-1 slider zoom-slider">
        <Slider
          min={-5}
          max={5}
          value={value}
          style={{ height: "100%" }}
          onChange={(newValue) =>
            Math.abs(newValue) <= 5 ? onChangeValue() : null
          }
        />
      </div>
      <div className="inline-flex items-center ml-[-1px]">
        <IconButton sx={{ padding: 0 }} onClick={handleZoomIn}>
          <AiOutlinePlusCircle size={16} />
        </IconButton>
      </div>
    </div>
  );
};

export default ZoomSlider;

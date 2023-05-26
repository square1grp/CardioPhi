import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";

const ZoomSlider = ({ value, onChange, min, max }) => {
  const handleZoomOut = () => {
    const newValue = value - 1;
    if (newValue < min) return alert(`Can't zoom out since min is ${min}.`);
    else onChange(newValue);
  };

  const handleZoomIn = () => {
    const newValue = value + 1;
    if (newValue > max) return alert(`Can't zoom in since max is ${max}.`);
    else onChange(newValue);
  };

  return (
    <div className="w-full flex flex-row items-center justify-center">
      <div className="flex-none mr-[-2px] cursor-pointer" onClick={handleZoomOut}>
        <AiOutlineMinusCircle size={24} color="#AAAAAA" />
      </div>
      <div className="w-full flex-1 slider zoom-slider">
        <Slider
          min={min}
          max={max}
          value={value}
          onChange={(value) => {
            onChange(value);
          }}
          tooltip={false}
          style={{ height: "100%" }}
        />
      </div>
      <div className="flex-none ml-[-2px] cursor-pointer" onClick={handleZoomIn}>
        <AiOutlinePlusCircle size={24} color="#AAAAAA" />
      </div>
    </div>
  );
};

export default ZoomSlider;

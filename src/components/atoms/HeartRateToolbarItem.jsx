import clsx from "clsx";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const Item = ({ title = "", value = "", checked, onChange }) => {
  const [isChecked, setChecked] = useState(checked);

  const id = title.toLowerCase().replace(/ /g, "-");

  const handleChange = (event) => {
    setChecked(event.target.checked);
    onChange(event.target.checked);
  };

  return (
    <div
      className={clsx(
        "border-t-8 px-1 pb-1",
        isChecked ? "border-t-black" : "border-t-[#4A5060]"
      )}
    >
      <div className="flex items-start">
        <div className="relative flex items-center h-4 mt-2">
          <div
            className={clsx(
              "w-4 h-4 border border-[#D9D9D9]",
              isChecked && "bg-black"
            )}
          />
          <input
            id={id}
            name={id}
            type="checkbox"
            className="absolute focus:ring-0 focus:ring-offset-0 h-0 w-0 border-0"
            checked={isChecked}
            onChange={handleChange}
          />
        </div>

        <div className="ml-1">
          <label htmlFor={id} className="text-lg font-bold cursor-pointer">
            {title}
          </label>
          <p className="text-sm">{value}</p>
        </div>

        <div className="ml-auto p-2">
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
};

export default Item;

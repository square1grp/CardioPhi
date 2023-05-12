import clsx from "clsx";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const Item = ({ title = "", subTitle="",  value = "", checked, color, onChange }) => {
  const id = title.toLowerCase().replace(/ /g, "-");

  const handleChange = (event) => {
    onChange(event.target);
  };

  return (
    <div
      className={clsx(
        "border-t-[6px] px-1 py-[3px]",
        checked ? "border-t-black" : "border-t-[#4A5060]"
      )}
      style={{backgroundColor: clsx(checked ? color : "white")}}
    >
      <div className="flex items-start">
        <div className={"flex flex-row"}>
          <div className="flex-none items-start">
            <input
              type='checkbox'
              id={id}
              name={id}
              value={value}
              checked={checked}
              onChange={handleChange}
              className='mr-2 w-[15px] h-[15px] custom-checkbox cursor-pointer'
            />
          </div>
          <div className="flex-1 ml-1">
            <label className="text-xs font-bold">
              {title}
            </label>
            <p className="text-[10px] leading-3">{subTitle}</p>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end p-2">
          <FaChevronRight size={14} className="mr-8"/>
        </div>
      </div>
    </div>
  );
};

export default Item;

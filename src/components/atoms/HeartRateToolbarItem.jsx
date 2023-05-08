import { useState } from "react";

const Item = ({ title = "", value = "", checked, onChange }) => {
  const [isChecked, setChecked] = useState(checked);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    onChange(event.target.checked);
  };

  return (
    <div className={'flex items-start'}>
      <input type='checkbox' checked={isChecked} onChange={handleChange} className='mr-2 mt-1 w-[18px] h-[18px]'/>
      <div className="flex-1 items-start text-sm">
        <div className=" text-[rgba(0,0,0,0.87)]">{title}</div>
        <div className=" text-[rgba(0,0,0,0.6)]">{value}</div>
      </div>
    </div>
  );
};

export default Item;

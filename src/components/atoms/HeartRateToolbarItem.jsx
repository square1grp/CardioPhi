import { useState } from "react";
import { HiChevronRight } from 'react-icons/hi';

const Item = ({ title = "", value = "", checked, onChange }) => {
  const [isChecked, setChecked] = useState(checked);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    onChange(event.target.checked);
  };

  return (
    <div className={'flex flex-row items-start'}>
      <input type='checkbox' checked={isChecked} onChange={handleChange} className='mr-2 w-[15px] h-[15px]'/>
      <div className="basis-4/5 items-start">
        <div className="text-xs font-bold text-[rgba(0,0,0,0.87)]">{title}</div>
        <div className=" text-[10px] text-[rgba(0,0,0,0.6)]">{value}</div>
      </div>
      <div className="basis-1/5 items-center justify-center">
        <HiChevronRight className={'flex text-base'}/>
      </div>
    </div>
  );
};

export default Item;

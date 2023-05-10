import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

import { AiOutlineMinusCircle } from 'react-icons/ai';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const ZoomSlider = ({value, onChange}) => {
  return (
    <div className='w-full flex flex-row items-center justify-center'>
      <div className='flex-none mr-[-1px]'>
        <AiOutlineMinusCircle size={16}/>
      </div>
      <div className='w-full flex-1 slider zoom-slider'>
        <Slider
          min={-5}
          max={5}
          value={value}
          onChange={(value) => {onChange(value)}}
          style={{height:"100%"}}
        />
      </div>
      <div className='flex-none ml-[-1px]'>
        <AiOutlinePlusCircle size={16}/>
      </div>
    </div>
  )
}

export default ZoomSlider
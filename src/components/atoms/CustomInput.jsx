
const CustomInput = ({label, backLabel="", value="", onChange, readonly, style}) => {
  return (
    <div className='flex flex-row items-center justify-start mb-[0.5rem]'>
      <div className='flex-none'>
        {label}: 
      </div>
      <div className='ml-2'>
        <input onChange={onChange} defaultValue={value} className="custom-input" readOnly={readonly} style={style}/>
      </div>
      <div className='flex-none'>
        {backLabel} 
      </div>
    </div>
  )
}

export default CustomInput
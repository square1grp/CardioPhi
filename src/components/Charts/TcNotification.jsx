import React from 'react';
import { useDispatch } from 'react-redux';
import { updateShowTcNotification } from 'store/ecgSlice';
import CustomSelect from 'components/atoms/CustomSelect';
import CustomInput from 'components/atoms/CustomInput';

import { FaRegBell } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';

/**
 * Time Stats Component
 * @returns
 */
const TcNotification = () => {

  const dispatch = useDispatch();

  const alertActions = {

    afib: {
      checked: false,
      action: ['Sound', 'SMS', 'Notification'],
      expiration: '07/08/2021',
      prob: {
        operator: ['>', '<', '='],
        value: '50',
      },
      rolling: ['Hourly', '6 hour', 'Daily'],
    },
    vt: {
      checked: false,
      action: ['Sound', 'SMS', 'Notification'],
      expiration: '07/08/2021',
      prob: {
        operator: ['>', '<', '='],
        value: '50',
      },
      rolling: ['Hourly', '6 hour', 'Daily'],
    },
    svt: {
      checked: false,
      action: ['Sound', 'SMS', 'Notification'],
      expiration: '07/08/2021',
      prob: {
        operator: ['>', '<', '='],
        value: '50',
      },
      rolling: ['Hourly', '6 hour', 'Daily'],
    },
  };

  return (
    <div className={'h-screen absolute top-0 right-0 text-white w-[450px] bg-[#f0f2f4] z-[999]'}>
      <div className='flex justify-between px-3 text-sm bg-mainPrimary py-[0.5rem]'>
        <div className='flex items-center text-xl'>Alert Editor <FaRegBell className={'ml-2 text-xl'}/></div>
        <div className={'flex items-center cursor-pointer'} onClick={() => {dispatch(updateShowTcNotification())}}>
          <CgClose className={'text-2xl'} />
        </div>
      </div>
      <div className='flex-1 text-drawerText'>
      <div className='py-2 px-3'>
          <div className='flex flex-row items-center mb-[0.5rem]'>
            <input type='checkbox' className='custom-checkbox-alert mr-2'/>
            <div className="text-drawerText">AFIB/Flutter</div>
          </div>
          <div className='w-full grid grid-cols-2'>
            <CustomSelect label="Action" options={alertActions.afib.action}/>
            <CustomInput label="Expiration" value={alertActions.afib.expiration} readonly style={{maxWidth: "100px"}}/>
            <CustomSelect label="Prob" options={alertActions.afib.prob.operator}/>
            <CustomInput label="Value" backLabel="%" value={alertActions.afib.prob.value} style={{maxWidth: "50px"}}/>
            <CustomSelect label="Rolling" options={alertActions.afib.rolling}/>
          </div>
        </div>
        <div className='flex border-b border-[rgba(0,0,0,0.87)]' />

        <div className='py-2 px-3'>
          <div className='flex flex-row items-center mb-[0.5rem]'>
            <input type='checkbox' className='custom-checkbox-alert mr-2'/>
            <div className="text-drawerText">Ventricular tachycardia (VT)</div>
          </div>
          <div className='w-full grid grid-cols-2'>
            <CustomSelect label="Action" options={alertActions.vt.action}/>
            <CustomInput label="Expiration" value={alertActions.vt.expiration} readonly style={{maxWidth: "100px"}}/>
            <CustomSelect label="Prob" options={alertActions.vt.prob.operator}/>
            <CustomInput label="Value" backLabel="%" value={alertActions.vt.prob.value} style={{maxWidth: "50px"}}/>
            <CustomSelect label="Rolling" options={alertActions.vt.rolling}/>
          </div>
        </div>
        <div className='flex border-b border-[rgba(0,0,0,0.87)]' />

        <div className='py-2 px-3'>
          <div className='flex flex-row items-center mb-[0.5rem]'>
            <input type='checkbox' className='custom-checkbox-alert mr-2'/>
            <div className="text-drawerText">Supraventricular tachycardia (SVT)</div>
          </div>
          <div className='w-full grid grid-cols-2'>
            <CustomSelect label="Action" options={alertActions.svt.action}/>
            <CustomInput label="Expiration" value={alertActions.svt.expiration} readonly style={{maxWidth: "100px"}}/>
            <CustomSelect label="Prob" options={alertActions.svt.prob.operator}/>
            <CustomInput label="Value" backLabel="%" value={alertActions.svt.prob.value} style={{maxWidth: "50px"}}/>
            <CustomSelect label="Rolling" options={alertActions.svt.rolling}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TcNotification;

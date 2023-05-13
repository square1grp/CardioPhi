import React from 'react';
import { useDispatch } from 'react-redux';
import { updateShowHrNotification } from 'store/episodeDataSlice';
import CustomSelect from 'components/atoms/CustomSelect';
import CustomInput from 'components/atoms/CustomInput';

import { FaRegBell } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';

/**
 * Time Stats Component
 * @returns
 */
const HrNotification = () => {

  const dispatch = useDispatch();

  const alertActions = {
    pvc: {
      checked: false,
      action: ['Sound', 'SMS', 'Notification'],
      expiration: '07/08/2021',
      burden: {
        operator: ['>', '<', '='],
        value: '20',
      },
    },
    svt: {
      checked: false,
      action: ['Sound', 'SMS', 'Notification'],
      expiration: '07/08/2021',
      hr: {
        operator: ['>', '<', '='],
        value: '150',
      },
    },
    vt: {
      checked: false,
      action: ['Sound', 'SMS', 'Notification'],
      expiration: '07/08/2021',
      hr: {
        operator: ['>', '<', '='],
        value: '150',
      },
      duration: {
        operator: ['>', '<', '='],
        value: '30',
      },
    },
    pause: {
      checked: false,
      action: ['Sound', 'SMS', 'Notification'],
      expiration: '07/08/2021',
      duration: {
        operator: ['>', '<', '='],
        value: '5',
      },
    },
    afib: {
      checked: false,
      action: ['Sound', 'SMS', 'Notification'],
      expiration: '07/08/2021',
      hr: {
        operator: ['>', '<', '='],
        value: '150',
      },
    },
  };

  return (
    <div className={'h-screen absolute top-0 right-0 text-white tracking-tight w-[500px] bg-main z-[999]'}>
      <div className='flex justify-between px-3 bg-mainPrimary py-[0.5rem]'>
        <div className='flex items-center text-lg'>Alert Editor <FaRegBell className={'ml-2 text-lg'}/></div>
        <div className={'flex items-center cursor-pointer'} onClick={() => {dispatch(updateShowHrNotification())}}>
          <CgClose className={'text-2xl'} />
        </div>
      </div>
      <div className='flex-1 text-drawerText'>
        <div className='py-2 px-3'>
          <div className='flex flex-row items-center mb-[0.5rem]'>
            <input type='checkbox' className='custom-checkbox-alert mr-2'/>
            <div className="text-drawerText">Premature ventricular contractions (PVC)</div>
          </div>
          <div className='w-full grid grid-cols-2'>
            <CustomSelect label="Action" options={alertActions.pvc.action}/>
            <CustomInput label="Expiration" value={alertActions.pvc.expiration} readonly style={{maxWidth: "100px"}}/>
            <CustomSelect label="Burden" options={alertActions.pvc.burden.operator}/>
            <CustomInput label="Value" backLabel="%" value={alertActions.pvc.burden.value} style={{maxWidth: "50px"}}/>
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
            <CustomSelect label="HR" options={alertActions.svt.hr.operator}/>
            <CustomInput label="Value" backLabel="bpm" value={alertActions.svt.hr.value} style={{maxWidth: "50px"}}/>
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
            <div className='text-[rgba(0,0,0,0.87)] mb-[0.5rem]'>AND/OR</div>
            <div></div>
            <CustomSelect label="HR" options={alertActions.vt.hr.operator}/>
            <CustomInput label="Value" backLabel="bpm" value={alertActions.vt.hr.value} style={{maxWidth: "50px"}}/>
          </div>
        </div>
        <div className='flex border-b border-[rgba(0,0,0,0.87)]' />

        <div className='py-2 px-3'>
          <div className='flex flex-row items-center mb-[0.5rem]'>
            <input type='checkbox' className='custom-checkbox-alert mr-2'/>
            <div className="text-drawerText">Pause</div>
          </div>
          <div className='w-full grid grid-cols-2'>
            <CustomSelect label="Action" options={alertActions.pause.action}/>
            <CustomInput label="Expiration" value={alertActions.pause.expiration} readonly style={{maxWidth: "100px"}}/>
            <CustomSelect label="HR" options={alertActions.pause.duration.operator}/>
            <CustomInput label="Value" backLabel="sec" value={alertActions.pause.duration.value} style={{maxWidth: "50px"}}/>
          </div>
        </div>
        <div className='flex border-b border-[rgba(0,0,0,0.87)]' />

        <div className='py-2 px-3'>
          <div className='flex flex-row items-center mb-[0.5rem]'>
            <input type='checkbox' className='custom-checkbox-alert mr-2'/>
            <div className="text-drawerText">AFIB/Flutter</div>
          </div>
          <div className='w-full grid grid-cols-2'>
            <CustomSelect label="Action" options={alertActions.afib.action}/>
            <CustomInput label="Expiration" value={alertActions.afib.expiration} readonly style={{maxWidth: "100px"}}/>
            <CustomSelect label="HR" options={alertActions.afib.hr.operator}/>
            <CustomInput label="Value" backLabel="bpm" value={alertActions.afib.hr.value} style={{maxWidth: "50px"}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HrNotification;

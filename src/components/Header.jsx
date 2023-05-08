import React from 'react';
import { Navbar } from 'react-bootstrap';

import Button from '../components/atoms/Button';
import { HiChevronDoubleRight } from 'react-icons/hi';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { MdOutlineAccountBox } from 'react-icons/md';
import { ImCog } from 'react-icons/im';


const Header = () => {
  return (
    <div className={'flex justify-between max-h-[45] px-4 pt-2 w-full bg-white'}>
      <div className="flex justify-start items-center">
        <Navbar.Brand href="/">
          <img
            src={"/assets/images/CardioPhi-logos_colored.png"} // Replace with the URL or file path of your logo image
            className={'max-w-[120px] w-[120px]'} alt="CardioPhi Logos Colored"
          />
        </Navbar.Brand>
        <div className={'flex items-center px-3 py-1'}>
          <div className={'text-xl'}>Main</div>
          <HiChevronDoubleRight className={'text-lg mx-2'}/>
          <div className={'text-xl font-black'}>ECG Analysis</div>
          <HiChevronDoubleRight className={'text-lg mx-2'}/>
          <div className={'text-xl'}>Report Generation</div>
        </div>
      </div>

      <div className={'flex justify-end items-center'}>
        <Button text="GENERATE REPORT" />
        <a href="#">
          <GoDeviceCameraVideo className={'text-3xl mx-3 text-main hover:text-main-700'}/>
        </a>
        <MdOutlineAccountBox className={'text-2xl ml-5'}/>
        <ImCog className={'text-xl mx-2'}/>
      </div>
    </div>
  );
};

export default Header;

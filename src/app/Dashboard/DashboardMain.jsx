"use client";
import React from 'react';
import Chefimg from '../../assets/Chefimg.svg';

function DashboardMain() {
  return (
    <div className="text-center flex flex-col lg:flex-row items-center lg:mt-10 justify-center  lg:px-32 space-y-8 lgspace-y-0 lg:space-x-8">
      <div>
        <ul className="text-3xl text-left lg:text-6xl font-semibold">
          <li>Revolutionizing</li>
          <li>Restaurant</li>
          <li>Operations<span className=' text-indigo-700'>.</span></li>
          
        </ul>
      </div>
      <div>
        <Chefimg className="w-96 h-full mx-auto lg:mx-0" />
      </div>
    </div>
  );
}

export default DashboardMain;

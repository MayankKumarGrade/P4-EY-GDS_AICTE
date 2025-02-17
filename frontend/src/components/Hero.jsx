import React from 'react';
import { assets } from '../assets/assets';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero mt-32">
      <div className="heroleft">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium txt-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            LATEST ARRIVALS
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      <div className="heroright">
        <img className="right-0 w-full sm:w-1/2" src={assets.hero} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;

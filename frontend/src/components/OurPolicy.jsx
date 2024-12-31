import React from 'react'
import { ArrowLeftRight, CircleCheckBig, Headset } from 'lucide-react';

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-16 sm:gap-4 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div className="border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:translate-y-2">
        <ArrowLeftRight className='w-12 h-12 m-auto mb-5 text-black' />
        <p className='font-semibold text-lg transform hover:scale-110 transition-transform duration-300 text-gray-800'>
          Easy Exchange Policy
        </p>
        <p className='text-gray-400 text-base'>
          We offer hassle-free exchanges without the stress.
        </p>
      </div>
      <div className="border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:translate-y-2">
        <CircleCheckBig className='w-12 h-12 m-auto mb-5 text-black' />
        <p className='font-semibold text-lg transform hover:scale-110 transition-transform duration-300 text-gray-800'>
          7 Days Return Policy
        </p>
        <p className='text-gray-400 text-base'>
          Enjoy a no-questions-asked 7-day free return window.
        </p>
      </div>
      <div className="border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:translate-y-2">
        <Headset className='w-12 h-12 m-auto mb-5 text-black' />
        <p className='font-semibold text-lg transform hover:scale-110 transition-transform duration-300 text-gray-800'>
          Best Customer Support
        </p>
        <p className='text-gray-400 text-base'>
          Get the help you need, when you need it—24/7 support!
        </p>
      </div>
    </div>
  )
}

export default OurPolicy

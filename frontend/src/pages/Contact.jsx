import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl border-t pt-10 mt-32'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[500px]' src={assets.contactus} />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>WZ-69 Willam Nagar <br/> Suite 360, Washington, India</p>
          <p className='text-gray-500'>Tel : +91 91920 00000 <br/> Email: contact@mern-commerce.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
          <p className='text-gray-500'>Learn More about us!!</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetter />
    </div>
  )
}

export default Contact

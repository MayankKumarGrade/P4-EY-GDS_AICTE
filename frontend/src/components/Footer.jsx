import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div>
      <div className='flex ldex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt='logo' />
            <p className='w-full md:w-2/3 text-gray-600'>
            We are an innovative e-commerce platform offering a wide range of high-quality products at affordable prices. Our mission is to provide a seamless shopping experience for customers all over the world. Join us in shaping the future of online shopping.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>
                GET IN TOUCH
            </p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91-91920-00000</li>
                <li>contact@mern-commerce.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='text-center text-gray-600 py-5 text-sm'>
            &copy; 2025 MERN Commerce & Mayank Kumar Grade. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer

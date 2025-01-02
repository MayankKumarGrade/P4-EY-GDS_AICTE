import React from 'react'
import Title from '../components/Title'
import NewsLetter from '../components/NewsLetter'
import {assets} from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 mt-32 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'> 
        <img className='w-full md:max-w-[500px]' src={assets.aboutus} alt="About Us"/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to MERN-Commerce, your ultimate destination for premium products and an unparalleled shopping experience. Founded with a passion for quality and customer satisfaction, we aim to bridge the gap between exceptional products and convenience.</p>
          <p>At MERN-Commerce, every item is handpicked to ensure it meets our rigorous quality standards, and every customer interaction is crafted to leave a lasting impression. From trendsetting fashion to innovative gadgets, our extensive catalog offers something special for everyone.</p>
          <p className='text-gray-800'>Our Mission</p>
          <p>Our mission is to redefine online shopping by blending reliability, innovation, and customer-centric services. With a secure shopping platform, seamless navigation, and dedicated customer support, we strive to make every transaction smooth and every purchase satisfying. As a team of passionate individuals, we are continuously evolving, embracing new trends, and exceeding expectations. Join us on this exciting journey and experience the joy of shopping with MERN-Commerce, where every click leads to happiness.</p>
        </div>
      </div>

      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
        <div className='flex flex-col md:flex-row text-sm mb-20 gap-5'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Premium Quality Products : </b>
            <p className='text-gray-600'>Every product undergoes a strict quality check to ensure it meets our standards.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Seamless Shopping Experience : </b>
            <p className='text-gray-600'>Our platform is designed for effortless browsing, quick checkouts, and an overall smooth shopping experience.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Support : </b>
            <p className='text-gray-600'>Our dedicated support team is always ready to assist you with any queries or concerns.</p>
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  )
}

export default About

import React,{useState, useContext} from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets';
import { ShopContext } from '../context/shopContext';

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod');

  const {navigate} = useContext(ShopContext);


  return (
    <div className='flex flex-col sm:flex-row justify-between gap-16 sm:pt-14 min-h-[80vh] mt-32 border-t'>
      
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px] rounded-xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-200 transform hover:translate-y-2'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFROMATION'} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="First Name and Middle Name (if any)" 
            className="py-2 px-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
          />
          <input 
            type="text" 
            placeholder="Last Name" 
            className="py-2 px-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
          />
        </div>

        <input 
          type="email" 
          placeholder="Email Address" 
          className="py-2 px-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
        />

        <input 
          type="text" 
          placeholder="Address" 
          className="py-2 px-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="City" 
            className="py-2 px-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
          />
          <input 
            type="text" 
            placeholder="State" 
            className="py-2 px-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="number" 
            placeholder="Zip-code" 
            className="py-2 px-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
          />
          <input 
            type="text" 
            placeholder="Country" 
            className="py-2 px-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input 
            type="number" 
            placeholder="Code" 
            className="py-2 px-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
          />
          <input 
            type="number" 
            placeholder="Phone Number" 
            className="col-span-2 py-2 px-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
          />
        </div>

      </div>

      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-12 rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-200 transform hover:translate-y-2'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          <div className='flex gap-5 flex-col lg:flex-row'>

            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-1 p-2 px-3 border-l cursor-pointer hover:scale-105'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.stripe} />
            </div>

            <div onClick={()=>setMethod('paypal')} className='flex items-center gap-1  p-2 px-3 border-l cursor-pointer hover:scale-105'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'paypal' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.paypal} />
            </div>

            <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-1 p-2 px-3 border-l cursor-pointer hover:scale-105'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay} />
            </div>

            <div onClick={()=>setMethod('cod')} className='flex items-center gap-1 p-2 px-3 border-l cursor-pointer hover:scale-105'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className={`text-gray-500 text-sm font-medium mx-4`}>COD</p>
            </div>
        </div>
        <div>
          <button onClick={()=>navigate('/orders')} className='w-full py-2 mt-4 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-all duration-200'>FINALLY YOUR&#39;S</button>
        </div>
      </div>
    </div>

  </div>
  )
}

export default PlaceOrder

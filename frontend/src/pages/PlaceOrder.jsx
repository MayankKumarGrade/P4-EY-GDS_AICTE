import React, { useState, useContext } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios'
import {toast} from 'react-toastify'

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName:'',
    lastname:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    phone:''
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData(data => ({...data,[name]:value}))
  }

  const onSubmitHandler = async () => {
    event.preventDefault()
    try {
      let orderItems = []

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item]>0) {
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if (itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }

      switch (method) {
        case 'cod': {
          const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } });
          if (response.data.success) {
            setCartItems({});
            navigate('/orders');
          } else {
            toast.error(response.data.message);
          }
          break;
        }
        default:
          break;
      }      
    } catch (error) {
      console.log(error)
      toast.error(error.message)
      
    }
  }
  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-16 sm:pt-14 min-h-[80vh] mt-32 border-t">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px] rounded-xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-200 transform hover:translate-y-2">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={'DELIVERY'} text2={'INFROMATION'} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input onChange={onChangeHandler} name='firstName' value={formData.firstName} required
            type="text"
            placeholder="First Name and Middle Name (if any)"
            className="py-2 px-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
          />
          <input onChange={onChangeHandler} name='lastname' value={formData.lastname} required
            type="text"
            placeholder="Last Name"
            className="py-2 px-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
          />
        </div>

        <input onChange={onChangeHandler} name='email' value={formData.email} required
          type="email"
          placeholder="Email Address"
          className="py-2 px-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
        />

        <input onChange={onChangeHandler} name='street' value={formData.street} required
          type="text"
          placeholder="Address"
          className="py-2 px-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input onChange={onChangeHandler} name='city' value={formData.city} required
            type="text"
            placeholder="City"
            className="py-2 px-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
          />
          <input onChange={onChangeHandler} name='state' value={formData.state} required
            type="text"
            placeholder="State"
            className="py-2 px-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input  onChange={onChangeHandler} name='zipcode' value={formData.zipcode} required
            type="number"
            placeholder="Zip-code"
            className="py-2 px-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
          />
          <input  onChange={onChangeHandler} name='country' value={formData.country} required
            type="text"
            placeholder="Country"
            className="py-2 px-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
          />
        </div>

        <input   onChange={onChangeHandler} name='phone' value={formData.phone} required
            type="number"
            placeholder="Phone Number"
            className="col-span-2 py-2 px-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
          />
      </div>

      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12 rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-200 transform hover:translate-y-2">
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          <div className="flex gap-5 flex-col lg:flex-row">
            <div
              onClick={() => setMethod('stripe')}
              className="flex items-center gap-1 p-2 px-3 border-l cursor-pointer hover:scale-105"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe} />
            </div>

            <div
              onClick={() => setMethod('paypal')}
              className="flex items-center gap-1  p-2 px-3 border-l cursor-pointer hover:scale-105"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${method === 'paypal' ? 'bg-green-400' : ''}`}
              ></p>
              <img className="h-5 mx-4" src={assets.paypal} />
            </div>

            <div
              onClick={() => setMethod('razorpay')}
              className="flex items-center gap-1 p-2 px-3 border-l cursor-pointer hover:scale-105"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}
              ></p>
              <img className="h-5 mx-4" src={assets.razorpay} />
            </div>

            <div
              onClick={() => setMethod('cod')}
              className="flex items-center gap-1 p-2 px-3 border-l cursor-pointer hover:scale-105"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}
              ></p>
              <p className={`text-gray-500 text-sm font-medium mx-4`}>COD</p>
            </div>
          </div>
          <div>
            <button type='submit'
              className="w-full py-2 mt-4 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-all duration-200"
            >
              FINALLY YOUR&#39;S
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;

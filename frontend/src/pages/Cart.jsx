import React, {useState, useEffect, useContext}from 'react';
import {ShopContext} from '../context/shopContext';
import Title from '../components/Title';
import { Trash2 } from 'lucide-react';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const {products, currency, cartItems, updateQuantity, navigate} = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems [items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData)
  }, [cartItems])


  return (
    <div className='border-t pt-14 mt-32'>

      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);
            
            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img src={productData.image[0]} alt="" className='w-16 sm:w-20' />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-s mt-2'>
                      <p className='px-2 sm-ppx-3 sm-py-1 text-xs sm:text-lg font-medium'>{currency}{productData.price}</p>
                      <p className='px-2 sm-ppx-3 sm-py-1 border bg-slate-50 text-xs sm:text-lg font-medium rounded-lg'>{item.size}</p>
                    </div>
                  </div>
                </div>
                <input onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null: updateQuantity(item._id, item.size, Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 rounded-lg' type="number" min={1} defaultValue={item.quantity}></input>
                <Trash2 onClick={()=>updateQuantity(item._id, item.size, 0)} alt="trash" className='w-4 sm:w-6 cursor-pointer' />
              </div>
            )
          })
        }     
    </div>
    <div className='flex flex-col items-end justify-end mt-4 my-20'>
      <div className='w-full sm:w-[450px]'>
        <CartTotal />
      </div>
      <div>
          <button onClick={()=>navigate('/place-order')} className=' bg-black text-white text-sm my-2 px-8 py-3 rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-200 transform hover:translate-y-2'>MAKE IT YOUR&apos;S</button>
      </div>
    </div>
    </div>
  )
}

export default Cart
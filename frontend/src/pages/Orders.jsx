import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/shopContext';
import Title from '../components/Title';

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);

  const [orderData, setorderData] = useState([])

  const loadOrderData = async () => {
  try {
    
  } catch (error) {
    
  }
}

  return (
    <div className="mt-32 border-t pt-16">
      <div className="text-2xl">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div className="">
        {orderData.map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:justify-between md:items-center gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img src={item.image[0]} className="w-16 sm:w-20" />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">
                    {currency} {item.price}
                  </p>
                  <p>Quantity : 1</p>
                  <p>Size : 1</p>
                </div>
                <p className="mt-2">
                  Order Date :{' '}
                  <span className="text-gray-400">16 December 2024</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded full bg-green-400"></p>
                <p className="text-sm md:text-base">Ready to Ship.</p>
              </div>
              <button className="text-sm md:text-base text-gray-900 border border-gray-700 px-4 py-2 rounded hover:bg-gray-400">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;

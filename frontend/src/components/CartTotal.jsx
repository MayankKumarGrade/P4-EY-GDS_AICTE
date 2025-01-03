import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import Title from './Title';

const CartTotal = () => {
  const { delivery_fee, currency, getCartAmount } = useContext(ShopContext);

  return (
    <div className="w-full border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-200 transform hover:translate-y-2">
      <div className="text-2xl">
        <Title text1={'CART'} text2={'TOTAL'} />
      </div>

      <div className="flex flex-col gap-2 text-sm mt-2 mb-4">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency}
            {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Delivery Charges</p>
          <p>
            {currency}
            {delivery_fee}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;

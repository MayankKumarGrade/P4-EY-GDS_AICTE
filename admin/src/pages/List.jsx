import axios from "axios";
import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { backendUrl, currency } from "../config";
import { toast } from 'react-toastify';
import { X } from 'lucide-react';

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = useCallback(async () => {
    try {
      const response = await axios.get(backendUrl +'/api/product/list',{ headers: { token } });
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error listing product:", error);
      toast.error(error.message);
    }
  }, [token]);

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl +'/api/product/remove', { id }, { headers: { token } });
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error in removing product:", error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  return (
    <>
      <p className='mb-2'>All Products</p>
      <div className='flex flex-col gap-3'>
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-200 text-sm rounded-lg'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {list.map((item, index) => (
          <div
            key={item._id || index}
            className='rounded-xl grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-200 text-sm'
          >
            <img className='w-12' src={item.image?.[0]} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{currency}{item.price}</p>
            <X
              onClick={() => removeProduct(item._id)}
              className="h-8 w-8 cursor-pointer text-center text-gray-800 transition-transform duration-300 rotate-180 hover:rotate-90 hover:opacity-80"
            />
          </div>
        ))}
      </div>
    </>
  );
};

List.propTypes = {
  token: PropTypes.string.isRequired,
};

export default List;

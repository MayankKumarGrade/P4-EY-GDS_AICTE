import React, {useContext, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import { Star } from 'lucide-react';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {
  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState(''); 
  const [size, setSize] = useState('');

  const fetchProductData = async () => {

    products.map((item)=>{
      if(item._id === productId){
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
  })
}

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 mt-32">

      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[19%] w-full'>
            {productData.image.map((item, index) => (
              <img onClick={()=>setImage(item)} key={index} src={item} alt="product" className='cursor-pointer w-[24%] sm:w-full sm:mb-3 flex-shrink-0'/>
            ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} alt="product" className='w-full h-auto'/>
          </div>
        </div>

        <div className='flex-1'>
          <h1 className='text-2xl mt-2 font-medium'>{productData.name}</h1>
          <div className='flex items-center mt-2'>
            <Star alt="" className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            <Star alt="" className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            <Star alt="" className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            <Star alt="" className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            <Star alt="" className="w-6 h-6 text-gray-400 fill-gray-400 opacity-25"/>
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency} {productData.price}</p>
          <p className='mt-5 text-gray-5500 md:w4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button 
                  key={index} onClick={()=>setSize(item)}
                  className={ `${item === size ? 'bg-gray-300 text-white' : 'bg-white text-gray-700'}
                    border border-gray-300 
                    px-4 py-2 
                    rounded-md 
                    text-sm 
                    font-medium 
                    text-gray-700 
                    hover:bg-gray-100 
                    hover:border-gray-400 
                    active:bg-gray-200 
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-gray-300 
                    transition-all 
                    duration-300 
                    shadow-sm`}
                  >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300 shadow-sm'>ADD TO CART</button>
          <hr className="mt-8 sm:w-4"/>
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product.</p>
            <p>Cash On Delviery is available on this product.</p>
            <p>Easy return and exchange policy within 6 days.</p>
          </div>
        </div>
      </div>

      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <b className='border px-5 py-3 text-sm'>Reviews (122)</b>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>An e-commerce platform offering a wide range of high-quality products at affordable prices. Our mission is to provide a seamless shopping experience for customers all over the world. Join us in shaping the future of online shopping</p>
          <p>E-commerce is to provide a seamless shopping experience for customers all over the world. Join us in shaping the future of online shopping</p>
        </div>
      </div>

      <RelatedProduct category={productData.category} subCategory={productData.subCategory} />

    </div>
  ) : <div className="opacity-0"></div>
}

export default Product

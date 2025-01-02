import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ShopContext } from '../context/shopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProduct = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);
    
    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice();

            productsCopy = productsCopy.filter((item) => category === item.category);
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);

            setRelated(productsCopy.slice(0, 4));
        }
    }, [products, category, subCategory]);

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={'RELATED'} text2={'PRODUCTS'} />
            </div>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                {related.map((item, index) => (
                    <ProductItem 
                        key={index} 
                        id={item._id} 
                        name={item.name} 
                        price={item.price} 
                        image={item.image} 
                        className='relative flex flex-col items-center justify-center'
                    />
                ))}
            </div>
        </div>
    );
};

RelatedProduct.propTypes = {
    category: PropTypes.string.isRequired,
    subCategory: PropTypes.string.isRequired,
};

export default RelatedProduct;

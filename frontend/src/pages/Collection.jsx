import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/shopContext';
import { ChevronDown } from 'lucide-react';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [sort, setSort] = useState('relavent');

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const toggleSubcategory = (e) => {
    const value = e.target.value;
    setSubcategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const clearFilters = () => {
    setCategory([]);
    setSubcategory([]);
    setSort('relavent');
  };

  const applyFilters = () => {
    let tempProducts = [...products];

    if (showSearch && search) {
      tempProducts = tempProducts.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      tempProducts = tempProducts.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subcategory.length > 0) {
      tempProducts = tempProducts.filter((item) =>
        subcategory.includes(item.subCategory)
      );
    }

    switch (sort) {
      case 'low-high':
        tempProducts.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        tempProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredProducts(tempProducts);
  };

  useEffect(() => {
    applyFilters();
  }, [category, subcategory, sort, products, search, showSearch, products]);

  return (
    <div
      className={`flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t ${showSearch ? '' : 'mt-32'}`}
    >
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <ChevronDown
            className={`h-3 sm:hidden ${showFilter ? 'rotate-180' : ''}`}
          />
        </p>

        <div
          className={`border border-gray-300 rounded-2xl pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label>
              <input
                type="checkbox"
                value="Men"
                onChange={toggleCategory}
                checked={category.includes('Men')}
              />{' '}
              Men
            </label>
            <label>
              <input
                type="checkbox"
                value="Women"
                onChange={toggleCategory}
                checked={category.includes('Women')}
              />{' '}
              Women
            </label>
            <label>
              <input
                type="checkbox"
                value="Kids"
                onChange={toggleCategory}
                checked={category.includes('Kids')}
              />{' '}
              Kids
            </label>
          </div>
        </div>

        <div
          className={`border border-gray-300 rounded-2xl pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label>
              <input
                type="checkbox"
                value="Topwear"
                onChange={toggleSubcategory}
                checked={subcategory.includes('Topwear')}
              />{' '}
              Topwear
            </label>
            <label>
              <input
                type="checkbox"
                value="Bottomwear"
                onChange={toggleSubcategory}
                checked={subcategory.includes('Bottomwear')}
              />{' '}
              Bottomwear
            </label>
            <label>
              <input
                type="checkbox"
                value="Bodywear"
                onChange={toggleSubcategory}
                checked={subcategory.includes('Bodywear')}
              />{' '}
              Bodywear
            </label>
            <label>
              <input
                type="checkbox"
                value="Winterwear"
                onChange={toggleSubcategory}
                checked={subcategory.includes('Winterwear')}
              />{' '}
              Winterwear
            </label>
          </div>
        </div>

        <button
          onClick={clearFilters}
          className="w-full mt-4 bg-red-500 text-white py-2 px-4 rounded-md font-semibold transition-all duration-300 ease-in-out
          hover:bg-red-600 hover:text-yellow-200 hover:shadow-lg hover:scale-105 
          active:scale-95 active:bg-red-700 
          focus:ring-2 focus:ring-red-400 focus:outline-none"
        >
          Clear Filters
        </button>
      </div>

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="ALL" text2="COLLECTIONS" />
          <select
            onChange={(e) => setSort(e.target.value)}
            value={sort}
            className="border-2 border-gray-300 rounded-md text-sm px-4 py-2 bg-white cursor-pointer shadow-md hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
          >
            <option value="relavent">Sort By: Relevant</option>
            <option value="low-high">Sort By: Low to High</option>
            <option value="high-low">Sort By: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filteredProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;

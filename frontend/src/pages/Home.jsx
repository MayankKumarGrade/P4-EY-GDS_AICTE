import ProductCard from '../components/ProductCard';

const Home = () => {
    const products = [ // Sample product data
        {
          name: 'Stylish T-Shirt',
          description: 'A comfortable and trendy t-shirt.',
          price: 29.99,
          image: 'tshirt.jpg', // Replace with actual image URL
        },
        {
          name: 'Cool Jeans',
          description: 'Classic denim jeans for any occasion.',
          price: 59.99,
          image: 'jeans.jpg', // Replace with actual image URL
        },
        // ... more products
      ];
  return (
    <div>
      <h1>Welcome to Our Clothing Store</h1>
      <p>Discover the latest fashion trends.</p>
      {/* wearing stylish clothes. */}
      <img src="hero-image.jpg" alt="Fashion Models" style={{maxWidth: '100%'}}/>
      {/* Product Categories Section: Images representing different categories (men's, women's, accessories). */}
      <h2>Shop by Category</h2>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <div>
          <img src="mens-category.jpg" alt="Men's Fashion" style={{maxWidth: '200px'}}/>
          <h3>Mens</h3>
        </div>
        <div>
          <img src="womens-category.jpg" alt="Women's Fashion" style={{maxWidth: '200px'}}/>
          <h3>Womens</h3>
        </div>
        <div>
          <img src="accessories-category.jpg" alt="Accessories" style={{maxWidth: '200px'}}/>
          <h3>Accessories</h3>
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;

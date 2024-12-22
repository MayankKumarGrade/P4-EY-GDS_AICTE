import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
    const products = [
        {
          name: 'Stylish T-Shirt',
          description: 'A comfortable and trendy t-shirt.',
          price: 29.99,
          image: 'tshirt.png',
        },
        {
          name: 'Cool Jeans',
          description: 'Classic denim jeans for any occasion.',
          price: 69.99,
          image: 'jeans.png',
        },
        // ... more products
    ];

    return (
        <div className="home-container">
            <section className="hero">
                <div className="hero-text">
                    <h1>Welcome to Our Clothing Store</h1>
                    <p>Discover the latest fashion trends</p>
                    <button className="cta-btn">Shop Now</button>
                </div>
            </section>

            <section className="categories">
                <h2>Shop by Category</h2>
                <div className="category-cards">
                    <div className="category-card">
                        <img src="mens-category.png" alt="Men's Fashion" />
                        <h3>Mens</h3>
                    </div>
                    <div className="category-card">
                        <img src="womens-category.png" alt="Women's Fashion" />
                        <h3>Womens</h3>
                    </div>
                    <div className="category-card">
                        <img src="shoes.png" alt="Accessories" />
                        <h3>Accessories</h3>
                    </div>
                </div>
            </section>

            <section className="products">
                <h2>Featured Products</h2>
                <div className="product-grid">
                    {products.map((product) => (
                        <ProductCard key={product.name} product={product} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;

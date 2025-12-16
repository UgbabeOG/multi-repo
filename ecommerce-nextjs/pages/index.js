import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import styles from '../styles/Home.module.css';

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    category: 'Electronics',
    price: 149.99,
    description: 'High-quality sound with noise cancellation',
    image: 'https://via.placeholder.com/300x200?text=Headphones'
  },
  {
    id: 2,
    name: 'Luxury Watch',
    category: 'Accessories',
    price: 299.99,
    description: 'Elegant timepiece for any occasion',
    image: 'https://via.placeholder.com/300x200?text=Watch'
  },
  {
    id: 3,
    name: 'Smartphone Case',
    category: 'Mobile',
    price: 24.99,
    description: 'Durable protection for your device',
    image: 'https://via.placeholder.com/300x200?text=Phone+Case'
  },
  {
    id: 4,
    name: 'USB-C Cable',
    category: 'Electronics',
    price: 12.99,
    description: 'Fast charging and data transfer',
    image: 'https://via.placeholder.com/300x200?text=USB+Cable'
  },
  {
    id: 5,
    name: 'Portable Speaker',
    category: 'Audio',
    price: 79.99,
    description: 'Compact speaker with great bass',
    image: 'https://via.placeholder.com/300x200?text=Speaker'
  },
  {
    id: 6,
    name: 'Screen Protector',
    category: 'Mobile',
    price: 9.99,
    description: 'Tempered glass protection for screens',
    image: 'https://via.placeholder.com/300x200?text=Protector'
  }
];

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Welcome to ShopHub</h1>
            <p>Discover amazing products at unbeatable prices</p>
            <a href="/products" className={styles.ctaButton}>Shop Now</a>
          </div>
        </section>

        <section className={styles.container}>
          <h2 className={styles.sectionTitle}>Featured Products</h2>
          <div className={styles.grid}>
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className={styles.benefits}>
          <div className={styles.container}>
            <h2>Why Shop With Us?</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefit}>
                <h3>Free Shipping</h3>
                <p>On orders over $50</p>
              </div>
              <div className={styles.benefit}>
                <h3>Easy Returns</h3>
                <p>30-day return policy</p>
              </div>
              <div className={styles.benefit}>
                <h3>24/7 Support</h3>
                <p>Dedicated customer service</p>
              </div>
              <div className={styles.benefit}>
                <h3>Secure Payment</h3>
                <p>Protected transactions</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

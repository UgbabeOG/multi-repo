import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';
import styles from '../../styles/ProductDetail.module.css';

const PRODUCTS = {
  1: {
    id: 1,
    name: 'Premium Wireless Headphones',
    category: 'Electronics',
    price: 149.99,
    description: 'High-quality sound with noise cancellation',
    fullDescription: 'Experience crystal-clear audio with our premium wireless headphones. Features active noise cancellation, 30-hour battery life, and premium comfort for all-day wear.',
    rating: 4.5,
    reviews: 127,
    image: 'https://via.placeholder.com/400x300?text=Headphones'
  },
  2: {
    id: 2,
    name: 'Luxury Watch',
    category: 'Accessories',
    price: 299.99,
    description: 'Elegant timepiece for any occasion',
    fullDescription: 'A timeless luxury watch with Swiss movement. Water-resistant up to 100m, sapphire crystal, and a premium leather strap.',
    rating: 4.8,
    reviews: 89,
    image: 'https://via.placeholder.com/400x300?text=Watch'
  },
  3: {
    id: 3,
    name: 'Smartphone Case',
    category: 'Mobile',
    price: 24.99,
    description: 'Durable protection for your device',
    fullDescription: 'Military-grade protection with sleek design. Shockproof, drop-tested from 10 feet, and compatible with wireless charging.',
    rating: 4.3,
    reviews: 234,
    image: 'https://via.placeholder.com/400x300?text=Phone+Case'
  },
  4: {
    id: 4,
    name: 'USB-C Cable',
    category: 'Electronics',
    price: 12.99,
    description: 'Fast charging and data transfer',
    fullDescription: 'High-speed USB-C cable supporting up to 100W charging and 480Mbps data transfer. Durable braided design with lifetime warranty.',
    rating: 4.6,
    reviews: 412,
    image: 'https://via.placeholder.com/400x300?text=USB+Cable'
  },
  5: {
    id: 5,
    name: 'Portable Speaker',
    category: 'Audio',
    price: 79.99,
    description: 'Compact speaker with great bass',
    fullDescription: 'Compact yet powerful speaker with 360-degree sound, 12-hour battery, waterproof design, and Bluetooth 5.0 connectivity.',
    rating: 4.4,
    reviews: 156,
    image: 'https://via.placeholder.com/400x300?text=Speaker'
  }
};

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const product = PRODUCTS[id];

  if (!product) {
    return (
      <>
        <Header />
        <main style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>Product not found</h1>
          <a href="/products">Back to Products</a>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.breadcrumb}>
            <a href="/products">Products</a> / {product.name}
          </div>
          
          <div className={styles.productContainer}>
            <div className={styles.imageSection}>
              <img src={product.image} alt={product.name} className={styles.image} />
            </div>

            <div className={styles.detailsSection}>
              <h1 className={styles.title}>{product.name}</h1>
              <p className={styles.category}>{product.category}</p>
              
              <div className={styles.rating}>
                <span className={styles.stars}>★★★★☆</span>
                <span className={styles.ratingText}>{product.rating} ({product.reviews} reviews)</span>
              </div>

              <p className={styles.description}>{product.fullDescription}</p>

              <div className={styles.price}>${product.price.toFixed(2)}</div>

              <div className={styles.actions}>
                <input type="number" min="1" defaultValue="1" className={styles.quantity} />
                <button className={styles.addToCart}>Add to Cart</button>
                <button className={styles.wishlist}>♡ Wishlist</button>
              </div>

              <div className={styles.shipping}>
                <h3>Shipping Information</h3>
                <ul>
                  <li>Free shipping on orders over $50</li>
                  <li>Standard shipping: 3-5 business days</li>
                  <li>Express shipping available</li>
                  <li>30-day return policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

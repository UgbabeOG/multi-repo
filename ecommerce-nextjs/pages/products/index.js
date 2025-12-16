import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import styles from '../../styles/Products.module.css';

const ALL_PRODUCTS = [
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
  },
  {
    id: 7,
    name: 'Wireless Charger',
    category: 'Electronics',
    price: 34.99,
    description: 'Fast wireless charging pad',
    image: 'https://via.placeholder.com/300x200?text=Charger'
  },
  {
    id: 8,
    name: 'Phone Stand',
    category: 'Accessories',
    price: 19.99,
    description: 'Adjustable phone stand for desk',
    image: 'https://via.placeholder.com/300x200?text=Stand'
  },
  {
    id: 9,
    name: 'Cable Organizer',
    category: 'Accessories',
    price: 14.99,
    description: 'Keep your cables organized',
    image: 'https://via.placeholder.com/300x200?text=Organizer'
  }
];

export default function Products() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>All Products</h1>
          <div className={styles.grid}>
            {ALL_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

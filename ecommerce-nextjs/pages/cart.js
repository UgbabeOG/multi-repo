import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Cart.module.css';

export default function Cart() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Shopping Cart</h1>
          <div className={styles.content}>
            <div className={styles.cartItems}>
              <p style={{ textAlign: 'center', color: '#7f8c8d', padding: '2rem' }}>
                Your cart is empty
              </p>
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <a href="/products" className={styles.continueShoppingButton}>
                  Continue Shopping
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

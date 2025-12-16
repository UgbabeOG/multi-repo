import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h4>About ShopHub</h4>
          <p>Your trusted online shopping destination for quality products.</p>
        </div>
        <div className={styles.section}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#shipping">Shipping Info</a></li>
            <li><a href="#returns">Returns</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4>Contact</h4>
          <p>Email: support@shophub.com</p>
          <p>Phone: 1-800-SHOP-HUB</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; 2025 ShopHub. All rights reserved.</p>
      </div>
    </footer>
  );
}

import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>About ShopHub</h1>
          
          <section className={styles.section}>
            <h2>Our Story</h2>
            <p>
              ShopHub was founded with a simple mission: to provide high-quality products at affordable prices 
              with exceptional customer service. Since our launch, we've served thousands of satisfied customers 
              across the globe.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Our Mission</h2>
            <p>
              To empower customers with access to premium products and services through innovative technology 
              and dedicated customer support. We believe in transparency, quality, and customer satisfaction above all else.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Why Choose Us?</h2>
            <ul className={styles.list}>
              <li>✓ Wide selection of quality products</li>
              <li>✓ Competitive pricing</li>
              <li>✓ Fast and free shipping on orders over $50</li>
              <li>✓ 30-day money-back guarantee</li>
              <li>✓ 24/7 customer support</li>
              <li>✓ Secure checkout and data protection</li>
              <li>✓ Easy returns and exchanges</li>
              <li>✓ Regular promotions and discounts</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Contact Us</h2>
            <p>
              Have questions? We'd love to hear from you!
            </p>
            <p>
              Email: support@shophub.com<br />
              Phone: 1-800-SHOP-HUB<br />
              Address: 123 Shopping Street, Commerce City, CC 12345
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

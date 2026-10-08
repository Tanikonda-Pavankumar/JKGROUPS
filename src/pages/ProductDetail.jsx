import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../productsData';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } })
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [activeImg, setActiveImg] = useState(0);

  if (!product) {
    return (
      <AnimatedPage>
        <div style={{ textAlign: 'center', padding: '8rem 2rem' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--primary-blue)', fontSize: '2rem' }}>Product not found.</h2>
          <Link to="/products" style={{ color: 'var(--primary-orange)', fontWeight: 700, marginTop: '1rem', display: 'inline-block' }}>← Back to Products</Link>
        </div>
      </AnimatedPage>
    );
  }

  return (
    <AnimatedPage>
      {/* Hero Banner */}
      <div style={{
        position: 'relative', height: '50vh', overflow: 'hidden',
        background: '#1a1a1a'
      }}>
        <motion.img
          src={product.image}
          alt={product.title}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: 'easeInOut' }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0, opacity: 0.55 }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(10,7,5,0.9) 0%, rgba(10,7,5,0.2) 60%)'
        }} />
        <div style={{
          position: 'absolute', bottom: '2.5rem', left: 'var(--px-main)',
          right: 'var(--px-main)', zIndex: 2
        }}>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontSize: '0.7rem', letterSpacing: '4px', textTransform: 'uppercase', color: '#c8a96e', marginBottom: '0.5rem', fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
          >
            JK Group · {product.category}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '0.3rem' }}
          >
            {product.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: 'rgba(255,255,255,0.55)', fontSize: '1.1rem' }}
          >
            {product.tagline}
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ backgroundColor: 'var(--bg-light)', padding: 'var(--py-section) var(--px-main)' }}>
        {/* Back Link */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show">
          <Link to="/products" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            color: 'var(--text-light)', textDecoration: 'none',
            fontSize: '0.85rem', fontWeight: 600, fontFamily: "'Montserrat', sans-serif",
            marginBottom: '2.5rem', letterSpacing: '0.5px'
          }}>
            ← Back to Products
          </Link>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))', gap: '4rem', alignItems: 'start' }}>
          
          {/* Left — Image Gallery */}
          <motion.div custom={1} variants={fadeUp} initial="hidden" animate="show">
            {/* Main Image */}
            <motion.div
              key={activeImg}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{ borderRadius: '8px', overflow: 'hidden', marginBottom: '1rem', aspectRatio: '4/3' }}
            >
              <img
                src={product.gallery[activeImg]}
                alt={product.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
            {/* Thumbnails */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {product.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  onClick={() => setActiveImg(i)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    flex: 1, aspectRatio: '1', borderRadius: '6px', overflow: 'hidden',
                    cursor: 'pointer',
                    border: activeImg === i ? '2px solid var(--primary-orange)' : '2px solid transparent',
                    opacity: activeImg === i ? 1 : 0.6,
                    transition: 'opacity 0.3s, border-color 0.3s'
                  }}
                >
                  <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Details */}
          <div>
            {/* Description */}
            <motion.div custom={2} variants={fadeUp} initial="hidden" animate="show" style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', color: 'var(--primary-blue)', marginBottom: '1rem', fontWeight: 600 }}>
                About This Product
              </h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.8, fontSize: '0.97rem' }}>
                {product.fullDescription}
              </p>
            </motion.div>

            {/* Features */}
            <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show" style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', color: 'var(--text-dark)', marginBottom: '1rem', fontWeight: 600 }}>
                Key Features
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                {product.features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.5rem 0' }}>
                    <span style={{ color: 'var(--primary-orange)', fontSize: '1rem', flexShrink: 0 }}>✦</span>
                    <span style={{ fontSize: '0.88rem', color: 'var(--text-dark)', fontFamily: "'Montserrat', sans-serif" }}>{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Specifications */}
            <motion.div custom={4} variants={fadeUp} initial="hidden" animate="show" style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', color: 'var(--text-dark)', marginBottom: '1rem', fontWeight: 600 }}>
                Specifications
              </h3>
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
                {Object.entries(product.specs).map(([key, value], i) => (
                  <div
                    key={key}
                    style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '0.8rem 1.2rem',
                      backgroundColor: i % 2 === 0 ? '#f8fafc' : '#fff',
                      borderBottom: i < Object.keys(product.specs).length - 1 ? '1px solid #e2e8f0' : 'none'
                    }}
                  >
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-light)', textTransform: 'capitalize', fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.5px' }}>{key}</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-dark)', fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div custom={5} variants={fadeUp} initial="hidden" animate="show" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-orange">
                Get a Quote <span className="arrow">→</span>
              </Link>
              <a
                href="https://wa.me/918971794949"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                WhatsApp Us
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div style={{ padding: 'var(--py-section) var(--px-main)', background: '#f7f9fc' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--primary-blue)', marginBottom: '2rem', fontSize: '1.8rem' }}>
          Explore More Products
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))', gap: '1.5rem' }}>
          {products.filter(p => p.id !== product.id).slice(0, 3).map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 12px 30px rgba(0,0,0,0.08)' }}
              style={{ backgroundColor: 'white', borderRadius: '10px', overflow: 'hidden', border: '1px solid #e2e8f0', cursor: 'pointer' }}
            >
              <img src={p.image} alt={p.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
              <div style={{ padding: '1rem' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--primary-blue)', marginBottom: '0.3rem', fontSize: '1.05rem' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', marginBottom: '0.8rem' }}>{p.description}</p>
                <Link to={`/products/${p.id}`} style={{ color: 'var(--primary-orange)', textDecoration: 'none', fontWeight: 700, fontSize: '0.82rem', fontFamily: "'Montserrat', sans-serif" }}>
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default ProductDetail;

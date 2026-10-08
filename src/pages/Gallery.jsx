import AnimatedPage from '../components/AnimatedPage';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Typewriter from '../components/Typewriter';

// ─── Import ALL gallery images dynamically ───
const imageModules = import.meta.glob('../gallery/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' });
let images = Object.values(imageModules);

// Add an extra door image to the end of the array to fill the empty space at the bottom left
if (images.length > 0) {
  images = [...images, images[0]];
}

// No need for buildColumns

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null); // index
  const [colCount, setColCount] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setColCount(2);
      else if (window.innerWidth < 1024) setColCount(3);
      else setColCount(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openLightbox = useCallback((idx) => setLightbox(idx), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() => setLightbox(i => (i - 1 + images.length) % images.length), []);
  const next = useCallback(() => setLightbox(i => (i + 1) % images.length), []);

  return (
    <AnimatedPage>

      {/* ─── Banner: Text Block on top ─── */}
      <div style={{
        background: 'linear-gradient(to bottom, rgba(15,30,50,0.55) 0%, rgba(15,30,50,0.35) 100%), url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        padding: '5rem 4rem',
        color: 'white',
      }}>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
          style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '4px', color: 'var(--primary-orange)', marginBottom: '1rem', fontWeight: 700 }}>
          Our Work
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
          style={{ fontSize: '1.8rem', textTransform: 'uppercase', letterSpacing: '4px', color: 'var(--primary-white)', marginBottom: '1rem', fontWeight: 700 }}>
          <Typewriter text="Gallery" delay={300} />
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontSize: '1.1rem', color: '#e2e8f0', fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>
          A visual journey through craftsmanship &amp; excellence.
        </motion.p>
      </div>


      {/* ─── Masonry Grid ─── */}
      <div style={{ backgroundColor: '#ffffff', padding: 'var(--py-section) var(--px-main)' }}>
        <div style={{ 
          columnCount: colCount, 
          columnGap: colCount === 2 ? '8px' : '16px', 
          maxWidth: '1400px', 
          margin: '0 auto' 
        }}>
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              className="gallery-img"
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{
                duration: 0.6,
                delay: (idx % 8) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.03, filter: 'brightness(1.05)' }}
              onClick={() => openLightbox(idx)}
              style={{ 
                position: 'relative', 
                overflow: 'hidden', 
                borderRadius: '8px', 
                cursor: 'zoom-in', 
                marginBottom: colCount === 2 ? '8px' : '16px',
                breakInside: 'avoid',
                display: 'block'
              }}
            >
              <img
                src={src}
                alt={`JK Group gallery ${idx + 1}`}
                loading="lazy"
                style={{ width: '100%', display: 'block', objectFit: 'cover', transition: 'transform 0.5s ease' }}
              />
              {/* Hover overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
                  display: 'flex', alignItems: 'flex-end', padding: '1rem',
                }}
              >
                <span style={{ color: 'white', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.5px' }}>
                  View Image
                </span>
                <span style={{ color: 'var(--primary-orange)', marginLeft: 'auto', fontSize: '1.2rem' }}>⊕</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─── Lightbox ─── */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {lightbox !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeLightbox}
              style={{
                position: 'fixed', inset: 0, zIndex: 9999,
                background: 'rgba(0,0,0,0.95)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '2rem',
              }}
            >
              {/* Close */}
              <button onClick={closeLightbox} style={{ position: 'fixed', top: '1.5rem', right: '2rem', background: 'none', border: 'none', color: 'white', fontSize: '2rem', cursor: 'pointer', zIndex: 10000, lineHeight: 1 }}>✕</button>

              {/* Prev */}
              <button onClick={(e) => { e.stopPropagation(); prev(); }}
                style={{ position: 'fixed', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', fontSize: '2rem', cursor: 'pointer', borderRadius: '50%', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10000 }}>
                ‹
              </button>

              {/* Image */}
              <motion.img
                key={lightbox}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                src={images[lightbox]}
                alt={`Gallery ${lightbox + 1}`}
                onClick={(e) => e.stopPropagation()}
                style={{ maxHeight: '88vh', maxWidth: '90vw', objectFit: 'contain', borderRadius: '10px', boxShadow: '0 30px 80px rgba(0,0,0,0.6)' }}
              />

              {/* Next */}
              <button onClick={(e) => { e.stopPropagation(); next(); }}
                style={{ position: 'fixed', right: '1.5rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', fontSize: '2rem', cursor: 'pointer', borderRadius: '50%', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10000 }}>
                ›
              </button>

              {/* Counter */}
              <div style={{ position: 'fixed', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', letterSpacing: '2px' }}>
                {lightbox + 1} / {images.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

    </AnimatedPage>
  );
};

export default Gallery;

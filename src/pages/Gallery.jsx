import AnimatedPage from '../components/AnimatedPage';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

// ─── Import ALL gallery images ───
import g1 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.20 AM.jpeg';
import g2 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.20 AM (1).jpeg';
import g3 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.20 AM (2).jpeg';
import g4 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.20 AM (3).jpeg';
import g5 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.20 AM (4).jpeg';
import g6 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.20 AM (5).jpeg';
import g7 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.20 AM (6).jpeg';
import g8 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM.jpeg';
import g9 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (1).jpeg';
import g10 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (2).jpeg';
import g11 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (3).jpeg';
import g12 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (4).jpeg';
import g13 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (5).jpeg';
import g14 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (6).jpeg';
import g15 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (7).jpeg';
import g16 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (8).jpeg';
import g17 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (9).jpeg';
import g18 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (10).jpeg';
import g19 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (11).jpeg';
import g20 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (12).jpeg';
import g21 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (13).jpeg';
import g22 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (14).jpeg';
import g23 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (15).jpeg';
import g24 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (16).jpeg';
import g25 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (17).jpeg';
import g26 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (18).jpeg';
import g27 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (19).jpeg';
import g28 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (20).jpeg';
import g29 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (21).jpeg';
import g30 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (22).jpeg';
import g31 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (23).jpeg';
import g32 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (24).jpeg';
import g33 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (25).jpeg';
import g34 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (26).jpeg';
import g35 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (27).jpeg';
import g36 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (28).jpeg';
import g37 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (29).jpeg';
import g38 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (30).jpeg';
import g39 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (31).jpeg';
import g40 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (32).jpeg';
import g41 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (33).jpeg';
import g42 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (34).jpeg';
import g43 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (35).jpeg';

const images = [
  g35, g36, g37, g38, g39, g40,
  g41, g42, g43, g15, g16, g17, g18, g19, g20,
  g21, g22, g23, g24, g25, g26, g27, g28, g29, g30,
  g31, g32, g33, g34,
  g1, g2, g3, g4, g5, g6, g7, g8, g9, g10,
  g11, g12, g13, g14,
];

// Split into 4 masonry columns
const buildColumns = (imgs, count = 4) => {
  const cols = Array.from({ length: count }, () => []);
  imgs.forEach((img, i) => cols[i % count].push({ src: img, idx: i }));
  return cols;
};

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

  const columns = buildColumns(images, colCount);

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
          Gallery
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontSize: '1.1rem', color: '#e2e8f0', fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>
          A visual journey through craftsmanship &amp; excellence.
        </motion.p>
      </div>


      {/* ─── Masonry Grid ─── */}
      <div style={{ backgroundColor: '#ffffff', padding: 'var(--py-section) var(--px-main)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${colCount}, 1fr)`, gap: colCount === 2 ? '8px' : '16px', maxWidth: '1400px', margin: '0 auto' }}>
          {columns.map((col, ci) => (
            <div key={ci} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {col.map(({ src, idx }, ii) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.9,
                    delay: (ci * 0.1) + (ii * 0.05),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openLightbox(idx)}
                  style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', cursor: 'zoom-in', lineHeight: 0 }}
                >
                  <img
                    src={src}
                    alt={`JK Group gallery ${idx + 1}`}
                    loading="lazy"
                    style={{ width: '100%', display: 'block', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                  />
                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
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

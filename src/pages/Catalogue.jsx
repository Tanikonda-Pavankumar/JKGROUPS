import AnimatedPage from '../components/AnimatedPage';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import the 4 PDFs
import pdf1 from '../Catalogue/Catalog JK FINAL-1-.pdf';
import pdf2 from '../Catalogue/Copy of 84.pdf';
import pdf3 from '../Catalogue/LATHER.pdf';
import pdf4 from '../Catalogue/NEW LINER.pdf';

// Import local catalogue images
import catImg1 from '../cataloguesImages/Doors & Frames Catalog image.png';
import catImg2 from '../cataloguesImages/Lather Catalog image.png';
import catImg3 from '../cataloguesImages/Laminates Catalog.png';
import catImg4 from '../cataloguesImages/Doors & Frames Catalog image.png';

const catalogues = [
  {
    id: 1,
    title: 'Doors & Frames Catalog',
    subtitle: 'Premium Teak & Solid Wood Doors',
    year: '2024',
    pages: 'Main Catalogue',
    pdf: pdf1,
    accent: '#c8a96e',
    cover: catImg1,
  },
  {
    id: 2,
    title: 'Lather Catalog',
    subtitle: 'Modern Luxury Leather-Style Doors',
    year: '2024',
    pages: 'Leather Series',
    pdf: pdf3,
    accent: '#a0856a',
    cover: catImg2,
  },
  {
    id: 3,
    title: 'Laminates Catalog',
    subtitle: 'Contemporary Laminate Finishes',
    year: '2024',
    pages: 'Laminate Series',
    pdf: pdf4,
    accent: '#8b6f5e',
    cover: catImg3,
  },
  {
    id: 4,
    title: 'Doors & Frames Catalog',
    subtitle: 'Premium Carved Wooden Entrances',
    year: '2024',
    pages: 'Premium Series',
    pdf: pdf2,
    accent: '#7a6455',
    cover: catImg4,
  },
];
// Decorative roman numeral labels
const romanNumerals = ['I', 'II', 'III', 'IV'];

const CatalogueCard = ({ cat, index, featured = false, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(cat)}
      style={{
        position: 'relative',
        cursor: 'pointer',
        overflow: 'hidden',
        borderRadius: featured ? '4px' : '3px',
        background: '#1c1510',
        boxShadow: hovered
          ? '0 40px 80px rgba(0,0,0,0.35)'
          : '0 8px 30px rgba(0,0,0,0.15)',
        transition: 'box-shadow 0.6s ease',
        height: featured ? '520px' : '100%',
        minHeight: featured ? '520px' : '300px',
      }}
    >
      {/* Background — catalogue cover image */}
      <motion.div
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("${cat.cover}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      />

      {/* Wood grain lines decorative */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, opacity: 0.07,
        backgroundImage: `repeating-linear-gradient(
          90deg,
          transparent,
          transparent 60px,
          rgba(200,169,110,0.6) 60px,
          rgba(200,169,110,0.6) 61px
        )`,
      }} />

      {/* Overlay on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)',
        }}
      />

      {/* Catalogue number */}
      <div style={{
        position: 'absolute', top: '1.8rem', left: '1.8rem', zIndex: 2,
        fontFamily: "'Playfair Display', serif",
        fontSize: featured ? '5rem' : '3.5rem',
        fontWeight: 700,
        color: cat.accent,
        opacity: 0.2,
        lineHeight: 1,
        userSelect: 'none',
      }}>
        {romanNumerals[index]}
      </div>

      {/* Top badge */}
      <div style={{
        position: 'absolute', top: '1.8rem', right: '1.8rem', zIndex: 2,
        background: 'rgba(200,169,110,0.15)',
        border: `1px solid ${cat.accent}40`,
        borderRadius: '2px',
        padding: '0.3rem 0.8rem',
        fontSize: '0.65rem',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        color: cat.accent,
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 600,
      }}>
        {cat.pages}
      </div>

      {/* Content */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3,
        padding: featured ? '2.5rem' : '1.8rem',
        background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
      }}>
        <motion.p
          style={{
            fontSize: '0.65rem',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: cat.accent,
            marginBottom: '0.5rem',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 600,
          }}
        >
          JK Group · {cat.year}
        </motion.p>

        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: featured ? '2rem' : '1.25rem',
          fontWeight: 700,
          color: '#fff',
          marginBottom: '0.4rem',
          lineHeight: 1.2,
        }}>
          {cat.title}
        </h3>

        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '0.82rem',
          color: 'rgba(255,255,255,0.55)',
          marginBottom: '1.5rem',
        }}>
          {cat.subtitle}
        </p>

        {/* CTA — reveals on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 12 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}
        >
          <span style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.75rem',
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            color: cat.accent,
            fontWeight: 700,
          }}>
            View Catalogue
          </span>
          <motion.span
            animate={{ x: hovered ? 6 : 0 }}
            transition={{ duration: 0.4 }}
            style={{ color: cat.accent, fontSize: '1.1rem' }}
          >
            →
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

/* ─── PDF Viewer Modal ─── */
const PdfModal = ({ cat, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(10,7,5,0.97)',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* Modal Toolbar */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '1rem 2rem',
          background: 'rgba(255,255,255,0.03)',
          borderBottom: '1px solid rgba(200,169,110,0.15)',
          flexShrink: 0,
        }}
      >
        <div>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#c8a96e', marginBottom: '0.2rem' }}>
            JK Group Catalogue
          </p>
          <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', color: 'white', margin: 0 }}>
            {cat.title}
          </h4>
        </div>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {/* Download */}
          <a
            href={cat.pdf}
            download
            onClick={(e) => e.stopPropagation()}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.72rem', letterSpacing: '1.5px',
              textTransform: 'uppercase', color: '#c8a96e',
              textDecoration: 'none', fontWeight: 700,
              padding: '0.5rem 1.2rem',
              border: '1px solid rgba(200,169,110,0.4)',
              borderRadius: '2px',
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              transition: 'background 0.3s',
            }}
          >
            ↓ Download
          </a>

          {/* Close */}
          <button
            onClick={onClose}
            style={{
              background: 'none', border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem',
              cursor: 'pointer', borderRadius: '2px',
              width: '42px', height: '42px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'border-color 0.3s',
            }}
          >
            ✕
          </button>
        </div>
      </div>

      {/* PDF Embed */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ flex: 1, overflow: 'hidden' }}
      >
        <iframe
          src={`${cat.pdf}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`}
          title={cat.title}
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      </div>
    </motion.div>
  );
};

/* ─── Main Page ─── */
const Catalogue = () => {
  const [selected, setSelected] = useState(null);

  return (
    <AnimatedPage>

      {/* ─── Cinematic Hero ─── */}
      <div style={{ position: 'relative', height: '92vh', overflow: 'hidden', background: '#0e0a07' }}>
        {/* Hero image with slow zoom */}
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 14, ease: 'easeInOut' }}
          style={{
            position: 'absolute', inset: 0, zIndex: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=90)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
          }}
        />

        {/* Dark gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: `
            linear-gradient(to bottom,
              rgba(10,7,5,0.5) 0%,
              rgba(10,7,5,0.25) 40%,
              rgba(10,7,5,0.75) 80%,
              rgba(10,7,5,0.95) 100%
            )
          `,
        }} />

        {/* Hero Text */}
        <div style={{
          position: 'absolute', bottom: '8%', left: '5%', zIndex: 2, maxWidth: '700px',
        }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.75rem', letterSpacing: '5px',
              textTransform: 'uppercase', color: '#c8a96e',
              marginBottom: '1.2rem', fontWeight: 600,
            }}
          >
            JK Group · Bengaluru
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              fontWeight: 700, color: '#fff',
              lineHeight: 1.05, marginBottom: '1.2rem',
              letterSpacing: '-0.5px',
            }}
          >
            Catalogue
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.25rem', fontStyle: 'italic',
              color: 'rgba(255,255,255,0.65)',
              marginBottom: '2.5rem',
            }}
          >
            Explore Our Signature Collection
          </motion.p>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
          >
            <div style={{ width: '40px', height: '1px', background: '#c8a96e' }} />
            <span style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.68rem', letterSpacing: '3px',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)',
            }}>
              Scroll to explore
            </span>
          </motion.div>
        </div>
      </div>

      {/* ─── Catalogue Grid ─── */}
      <div style={{ background: '#faf7f2', padding: '7rem 4rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '5rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}
          >
            <div>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.7rem', letterSpacing: '4px',
                textTransform: 'uppercase', color: '#c8a96e',
                marginBottom: '0.75rem', fontWeight: 600,
              }}>
                Our Collections
              </p>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#1c1510', margin: 0, lineHeight: 1.1,
              }}>
                Four Signature Catalogues
              </h2>
            </div>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.9rem', color: '#8b7355',
              maxWidth: '320px', lineHeight: 1.7,
            }}>
              Each catalogue represents a distinct chapter in our craftsmanship story.
            </p>
          </motion.div>

          {/* ─── Asymmetric Layout ─── */}
          <div className="catalogue-grid">
            {/* Featured — spans 2 rows, 2 cols */}
            <div className="cat-item-1">
              <CatalogueCard cat={catalogues[0]} index={0} featured onClick={setSelected} />
            </div>

            {/* Right top */}
            <div className="cat-item-2">
              <CatalogueCard cat={catalogues[1]} index={1} onClick={setSelected} />
            </div>

            {/* Bottom left */}
            <div className="cat-item-3">
              <CatalogueCard cat={catalogues[2]} index={2} onClick={setSelected} />
            </div>

            {/* Bottom right — spans 2 cols */}
            <div className="cat-item-4">
              <CatalogueCard cat={catalogues[3]} index={3} onClick={setSelected} />
            </div>
          </div>

          {/* Helper note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              textAlign: 'center', marginTop: '3rem',
              fontSize: '0.78rem', letterSpacing: '1px',
              color: '#b0956e', opacity: 0.7,
            }}
          >
            Click any catalogue to open a full-screen preview · All catalogues available to download
          </motion.p>
        </div>
      </div>

      {/* ─── Premium CTA ─── */}
      <div style={{
        position: 'relative', overflow: 'hidden',
        background: '#1c1510', padding: 'var(--py-hero) var(--px-main)',
        textAlign: 'center',
      }}>
        {/* Subtle background */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1610427181077-440d6cda7679?w=1600&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: 0.08,
        }} />

        {/* Decorative lines */}
        <div style={{
          position: 'absolute', left: '50%', top: '3rem',
          transform: 'translateX(-50%)',
          width: '60px', height: '1px', background: '#c8a96e',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.7rem', letterSpacing: '4px',
              textTransform: 'uppercase', color: '#c8a96e',
              marginBottom: '1.5rem', fontWeight: 600,
            }}
          >
            Start Your Project
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              color: '#fff', lineHeight: 1.2,
              marginBottom: '0.75rem',
            }}
          >
            Have a Project in Mind?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: '1.2rem', color: 'rgba(255,255,255,0.5)',
              marginBottom: '3rem',
            }}
          >
            Let's create your signature door.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45 }}
            style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link
              to="/contact"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700, fontSize: '0.78rem',
                letterSpacing: '2.5px', textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '1rem 2.5rem',
                background: '#c8a96e', color: '#1c1510',
                borderRadius: '2px',
                transition: 'background 0.35s, transform 0.35s',
                display: 'inline-block',
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = '#b8986a'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = '#c8a96e'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Get a Quote →
            </Link>

            <a
              href="https://wa.me/918971794549"
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700, fontSize: '0.78rem',
                letterSpacing: '2.5px', textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '1rem 2.5rem',
                background: 'transparent',
                color: '#c8a96e',
                border: '1px solid rgba(200,169,110,0.5)',
                borderRadius: '2px',
                transition: 'border-color 0.35s, transform 0.35s',
                display: 'inline-block',
              }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = '#c8a96e'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(200,169,110,0.5)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* ─── PDF Viewer Modal ─── */}
      <AnimatePresence>
        {selected && (
          <PdfModal cat={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>

    </AnimatedPage>
  );
};

export default Catalogue;

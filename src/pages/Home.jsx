import { Link } from 'react-router-dom';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import bannerImg from '../assets/banner.png';

// ─── 8 real gallery images for home preview (last 8) ───
import gp1 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (28).jpeg';
import gp2 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (29).jpeg';
import gp3 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (30).jpeg';
import gp4 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (31).jpeg';
import gp5 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (32).jpeg';
import gp6 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (33).jpeg';
import gp7 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (34).jpeg';
import gp8 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (35).jpeg';
import gp9 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (26).jpeg';
import gp10 from '../gallery/WhatsApp Image 2026-10-02 at 11.09.21 AM (27).jpeg';

const previewImages = [gp1, gp2, gp3, gp4, gp5, gp6, gp7, gp8, gp9, gp10];

import imgTeak from '../product images/TEAK WOOD DOORS.png';
import imgVeneer from '../product images/VENEER DOORS.png';
import imgLaminate from '../product images/LAMINATE DOORS.png';
import imgWpc from '../product images/WPC DOORS Premium.png';
import imgWpcFrames from '../product images/WPC FRAMES.png';
import imgPlywood from '../product images/PLYWOOD.png';
import imgHardware from '../product images/HARDWARE.png';
import imgInteriors from '../product images/INTERIORS.png';

const categories = [
  { name: 'Teak Wood Doors',  image: imgTeak },
  { name: 'Veneer Doors',     image: imgVeneer },
  { name: 'Laminate Doors',   image: imgLaminate },
  { name: 'WPC Doors',        image: imgWpc },
  { name: 'WPC Frames',       image: imgWpcFrames },
  { name: 'Plywood',          image: imgPlywood },
  { name: 'Hardware',         image: imgHardware },
  { name: 'Interiors',        image: imgInteriors }
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } }
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
};

// ─── Premium Hero (replaces door animation) ───
const CinematicHero = () => {
  return (
    <section style={{ position: 'relative', height: '100vh', overflow: 'hidden', background: '#0a0603' }}>
      {/* Slow cinematic hero image zoom */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1.03 }}
        transition={{ duration: 16, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      />
      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(8,5,2,0.88) 0%, rgba(8,5,2,0.5) 55%, rgba(8,5,2,0.18) 100%)'
      }} />

      {/* Hero text */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        style={{
          position: 'absolute', zIndex: 2,
          top: '50%', left: 'var(--px-main)',
          transform: 'translateY(-50%)',
          maxWidth: '640px',
        }}
      >
        <motion.p variants={fadeUp} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem', letterSpacing: '4px', textTransform: 'uppercase', color: '#c8a96e', marginBottom: '1rem', fontWeight: 700 }}>
          Wooden Doors &amp; Frames · Manufacturing Hub
        </motion.p>
        <motion.h1 variants={fadeUp} style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '1.2rem', letterSpacing: '-0.5px' }}>
          Crafting <span style={{ color: '#b8935c' }}>Luxury</span><br />
          Premium <span style={{ color: '#b8935c' }}>Doors &amp; Frames</span>
        </motion.h1>
        <motion.p variants={fadeUp} style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
          Since 2006 — Bengaluru's finest door manufacturing house.
        </motion.p>
        <motion.div variants={fadeUp} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
          {['Premium Craftsmanship', 'Custom Manufacturing', 'Modern Designs', 'Bengaluru'].map(f => (
            <span key={f} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem', letterSpacing: '1px', color: 'rgba(255,255,255,0.7)', fontWeight: 600, border: '1px solid rgba(255,255,255,0.2)', borderRadius: '2px', padding: '0.3rem 0.75rem', background: 'rgba(255,255,255,0.06)' }}>
              {f}
            </span>
          ))}
        </motion.div>
        <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/products" className="btn btn-orange" style={{ padding: '0.85rem 2rem', fontSize: '0.9rem' }}>
            Explore Products <span className="arrow">→</span>
          </Link>
          <Link to="/contact" className="btn" style={{ padding: '0.85rem 2rem', fontSize: '0.9rem', background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}>
            Get a Quote
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}
      >
        <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.6rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', fontWeight: 600 }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }} style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, rgba(200,169,110,0.6), transparent)' }} />
      </motion.div>
    </section>
  );
};

// ─── END-TO-END DOOR SOLUTIONS ───
const services = [
  { num: '01', title: 'Design Consultation',   desc: 'We begin by understanding your space, style and requirements in detail.' },
  { num: '02', title: 'Material Selection',     desc: 'Choose from premium teak, veneer, laminate, WPC and more.' },
  { num: '03', title: 'Custom Door Design',     desc: 'Our designers craft a door tailored precisely to your vision.' },
  { num: '04', title: 'Manufacturing',          desc: 'Skilled artisans build every door with precision at our Bengaluru facility.' },
  { num: '05', title: 'Precision Finishing',    desc: 'Hand-polished, lacquered and detailed to a flawless standard.' },
  { num: '06', title: 'Quality Checking',       desc: 'Every door passes a rigorous multi-point quality inspection.' },
  { num: '07', title: 'Delivery & Installation',desc: 'Safe, on-time delivery and professional installation at your site.' },
  { num: '08', title: 'Project Support',        desc: 'We stay with you after handover — full after-sales support.' },
];

const EndToEndSection = () => (
  <section style={{ padding: 'var(--py-section) var(--px-main)', background: '#0d0a07', color: 'white', overflow: 'hidden' }}>
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.8 }}
      style={{ textAlign: 'center', marginBottom: '4rem' }}
    >
      <p style={{ fontSize: '0.72rem', letterSpacing: '4px', textTransform: 'uppercase', color: '#c8a96e', fontWeight: 700, marginBottom: '0.75rem' }}>From Concept to Completion</p>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#fff', margin: 0 }}>End-to-End Door Solutions</h2>
    </motion.div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))', gap: '1px', border: '1px solid rgba(255,255,255,0.07)' }}>
      {services.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ background: 'rgba(200,169,110,0.07)' }}
          style={{ padding: '2.2rem 1.8rem', borderRight: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', transition: 'background 0.4s' }}
        >
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: 'rgba(200,169,110,0.75)', fontWeight: 700, margin: '0 0 1rem', lineHeight: 1 }}>{s.num}</p>
          <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem', letterSpacing: '0.3px' }}>{s.title}</h3>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

// ─── OUR PROCESS ───
const processSteps = [
  { step: '01', side: 'left',  title: 'Consultation',            desc: 'Understanding customer requirements, space dimensions and design needs in detail.' },
  { step: '02', side: 'right', title: 'Design & Selection',      desc: 'Selecting the right wood species, finish, style, hardware and exact dimensions.' },
  { step: '03', side: 'left',  title: 'Precision Manufacturing', desc: 'Expert craftsmen manufacture the door and frame with precision at our facility.' },
  { step: '04', side: 'right', title: 'Finishing',               desc: 'Premium polishing, lacquering and hand-detailing to a flawless standard.' },
  { step: '05', side: 'left',  title: 'Quality Check',           desc: 'Every door is carefully inspected across multiple quality checkpoints before dispatch.' },
  { step: '06', side: 'right', title: 'Delivery & Installation', desc: 'Safe, on-time delivery and professional installation carried out at your site.' },
  { step: '07', side: 'left',  title: 'Final Handover',          desc: 'Complete project documentation, walkthrough and full after-sales support.' },
];

const ProcessSection = () => (
  <section style={{ padding: 'var(--py-section) var(--px-main)', background: 'var(--bg-light)', overflow: 'hidden' }}>
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.8 }}
      style={{ textAlign: 'center', marginBottom: '4rem' }}
    >
      <p style={{ fontSize: '0.72rem', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--primary-orange)', fontWeight: 700, marginBottom: '0.75rem' }}>How We Work</p>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--primary-blue)', margin: 0 }}>Our Process</h2>
    </motion.div>

    <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
      {/* Vertical line */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute', left: '50%', top: 0, bottom: 0,
          width: '1px', background: 'linear-gradient(to bottom, transparent, #e2e8f0 8%, #e2e8f0 92%, transparent)',
          transformOrigin: 'top', transform: 'translateX(-50%)',
        }}
      />

      {processSteps.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: s.side === 'left' ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'flex',
            justifyContent: s.side === 'left' ? 'flex-start' : 'flex-end',
            marginBottom: '3.5rem',
            position: 'relative',
          }}
        >
          {/* Dot on the line */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
            style={{
              position: 'absolute', left: '50%', top: '1.4rem',
              transform: 'translate(-50%, -50%)',
              width: '13px', height: '13px', borderRadius: '50%',
              background: 'var(--primary-orange)',
              border: '3px solid var(--bg-light)',
              boxShadow: '0 0 0 2px var(--primary-orange)',
              zIndex: 2,
            }}
          />

          {/* Content card */}
          <div style={{ 
            width: '44%', 
            padding: 'clamp(1rem, 4vw, 1.8rem) clamp(0.75rem, 3vw, 2rem)', 
            background: '#fff', 
            borderRadius: '8px', 
            border: '1px solid #e2e8f0', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.04)' 
          }}>
            <p style={{ fontSize: 'clamp(0.55rem, 2vw, 0.65rem)', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--primary-orange)', fontWeight: 700, marginBottom: '0.5rem' }}>Step {s.step}</p>
            <h3 style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontSize: 'clamp(0.9rem, 3.5vw, 1.2rem)', 
              color: 'var(--primary-blue)', 
              marginBottom: '0.6rem',
              wordBreak: 'normal',
              overflowWrap: 'normal',
              hyphens: 'none'
            }}>{s.title}</h3>
            <p style={{ fontSize: 'clamp(0.75rem, 3vw, 0.9rem)', color: 'var(--text-light)', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

// ─── CLIENT REVIEWS ───
// NOTE TO JK GROUP: Replace the placeholder reviews below with your actual client reviews.
const reviews = [
  {
    name: 'Ramesh Kumar',
    role: 'Architect',
    stars: 5,
    review: '[PLACEHOLDER — Please replace with your actual client review] The quality of craftsmanship and attention to detail from JK Group completely exceeded our expectations on the project.',
  },
  {
    name: 'Priya Sharma',
    role: 'Interior Designer',
    stars: 5,
    review: '[PLACEHOLDER — Please replace with your actual client review] We have been sourcing doors and frames from JK Group for years. Consistent quality, on-time delivery and excellent support.',
  },
  {
    name: 'Suresh Nair',
    role: 'Builder & Developer',
    stars: 5,
    review: '[PLACEHOLDER — Please replace with your actual client review] JK Group handled our entire project from design to installation. Professional, reliable and truly premium quality.',
  },
  {
    name: 'Anitha Reddy',
    role: 'Homeowner',
    stars: 5,
    review: '[PLACEHOLDER — Please replace with your actual client review] The teak wood doors they made for our home are absolutely beautiful. Every detail was perfect and the team was very helpful.',
  },
];

const Stars = ({ count }) => (
  <div style={{ display: 'flex', gap: '3px', marginBottom: '1rem' }}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--primary-orange)">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const ReviewsSection = () => (
  <section style={{ padding: 'var(--py-section) var(--px-main)', background: '#f7f9fc' }}>
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.8 }}
      style={{ textAlign: 'center', marginBottom: '3.5rem' }}
    >
      <p style={{ fontSize: '0.72rem', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--primary-orange)', fontWeight: 700, marginBottom: '0.75rem' }}>Client Testimonials</p>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--primary-blue)', margin: 0 }}>What Our Clients Say</h2>
    </motion.div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
      {reviews.map((r, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
          style={{
            background: '#fff', borderRadius: '10px',
            padding: '2rem', border: '1px solid #e2e8f0',
            boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
            transition: 'box-shadow 0.35s ease',
            display: 'flex', flexDirection: 'column',
          }}
        >
          {/* Opening quote mark */}
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', color: 'var(--primary-orange)', opacity: 0.25, lineHeight: 1, margin: '0 0 0.5rem', fontWeight: 700 }}>&ldquo;</p>
          <Stars count={r.stars} />
          <p style={{ fontStyle: 'italic', color: 'var(--text-light)', lineHeight: 1.75, fontSize: '0.92rem', flex: 1, marginBottom: '1.5rem' }}>{r.review}</p>
          <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '1rem' }}>
            <p style={{ fontWeight: 700, color: 'var(--primary-blue)', margin: 0, fontSize: '0.95rem' }}>{r.name}</p>
            <p style={{ color: 'var(--text-light)', margin: '0.2rem 0 0', fontSize: '0.82rem' }}>{r.role}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

// ─── HOME GALLERY PREVIEW ───
const GalleryPreview = () => {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section style={{ padding: 'var(--py-section) var(--px-main)', background: '#fff' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.8 }}
        style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}
      >
        <div>
          <p style={{ fontSize: '0.72rem', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--primary-orange)', fontWeight: 700, marginBottom: '0.5rem' }}>Our Work</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--primary-blue)', margin: 0 }}>From Our Gallery</h2>
        </div>
        <Link
          to="/gallery"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
            fontSize: '0.82rem', letterSpacing: '1.5px', textTransform: 'uppercase',
            color: 'var(--primary-blue)', textDecoration: 'none',
            borderBottom: '1.5px solid var(--primary-blue)', paddingBottom: '2px',
            transition: 'color 0.25s, border-color 0.25s',
          }}
          onMouseOver={e => { e.currentTarget.style.color = 'var(--primary-orange)'; e.currentTarget.style.borderColor = 'var(--primary-orange)'; }}
          onMouseOut={e => { e.currentTarget.style.color = 'var(--primary-blue)'; e.currentTarget.style.borderColor = 'var(--primary-blue)'; }}
        >
          View Full Gallery &rarr;
        </Link>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '10px',
        perspective: isMobile ? 'none' : '1200px' // Add perspective to the container for 3D effect only on desktop
      }}>
        {previewImages.map((src, i) => {
          const isLeftDoor = i % 2 === 0;
          return (
            <motion.div
              key={`${i}-${isMobile}`}
              initial={{ 
                opacity: 0, 
                ...(isMobile ? { y: 30 } : {
                  rotateY: isLeftDoor ? 90 : -90, // Start swung open
                  transformOrigin: isLeftDoor ? 'left center' : 'right center'
                })
              }}
              whileInView={{ opacity: 1, ...(isMobile ? { y: 0 } : { rotateY: 0 }) }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: isMobile ? 0.7 : 1.1, 
                delay: i * (isMobile ? 0.05 : 0.1), 
                ease: [0.22, 1, 0.36, 1] 
              }}
              style={{
                overflow: 'hidden', 
                borderRadius: '6px',
                height: '240px', 
                boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
              }}
            >
              <Link to="/gallery" style={{ display: 'block', height: '100%', width: '100%' }}>
                <motion.img
                  src={src}
                  alt={`JK Group project ${i + 1}`}
                  loading="lazy"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', display: 'block',
                  }}
                />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

// ─── Main Home Component ───
const Home = () => {
  return (
    <AnimatedPage>
      {/* Cinematic Hero */}
      <CinematicHero />

      {/* Categories Section */}
      <section className="categories">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="section-title">Our Product Categories</h2>
          <p className="section-subtitle">Explore our wide range of premium doors, frames and interior solutions.</p>
        </motion.div>

        <div className="category-grid">
          {categories.map((cat, idx) => (
            <motion.div
              className="category-card"
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <Link to="/products" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <img src={cat.image} alt={cat.name} />
                <div style={{ padding: '0.8rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexGrow: 1, backgroundColor: 'white' }}>
                  <h3 style={{ margin: 0, padding: 0, paddingBottom: '0.3rem', fontSize: '0.85rem' }}>{cat.name}</h3>
                  <span style={{ fontSize: '0.7rem', color: 'var(--primary-orange)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    View Details <span>→</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us" style={{ background: 'var(--primary-blue)' }}>
        <div className="why-content">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title" style={{ color: '#ffffff' }}>Why Choose JK Group?</h2>
            <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto 3rem auto', color: 'rgba(255,255,255,0.7)' }}>
              With over 15 years of excellence, we bring uncompromised quality and elegance to your spaces.
            </p>
          </motion.div>
          <div className="why-grid">
            {[
              { title: 'Unmatched Quality', desc: 'We source only the finest timber and materials to ensure durability and a flawless finish for every product.' },
              { title: 'Custom Solutions', desc: 'Every space is unique. Our team works closely with you to deliver tailored designs that match your vision perfectly.' },
              { title: 'Timely Delivery', desc: 'We value your time. Our streamlined manufacturing process guarantees on-time delivery without cutting corners.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="why-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <h3 style={{ color: 'var(--primary-orange)' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* ─── END-TO-END DOOR SOLUTIONS ─── */}
      <EndToEndSection />

      {/* ─── OUR PROCESS ─── */}
      <ProcessSection />

      {/* ─── CLIENT REVIEWS ─── */}
      <ReviewsSection />

      {/* ─── GALLERY PREVIEW ─── */}
      <GalleryPreview />

      {/* ─── OUR BRANDS ─── */}
      <section style={{ padding: 'var(--py-section) var(--px-main)', background: '#fff', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <p style={{ fontSize: '0.7rem', letterSpacing: '4px', textTransform: 'uppercase', color: '#c8a96e', fontWeight: 700, marginBottom: '0.75rem', fontFamily: "'Montserrat', sans-serif" }}>
            Under JK Group
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--primary-blue)', margin: 0 }}>
            Our Brands
          </h2>
          <p style={{ color: 'var(--text-light)', maxWidth: '520px', margin: '1rem auto 0', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Three distinct brands, one promise — premium quality craftsmanship for every need and budget.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '2rem', maxWidth: '960px', margin: '0 auto' }}>
          {[
            {
              name: 'JK Doors',
              tagline: 'The Original. The Premium.',
              desc: 'Our flagship brand — crafted from A-grade teak and premium hardwood. JK Doors represents the finest in luxury door manufacturing with bespoke designs for high-end residences and commercial spaces.',
              accent: '#c8961a',
              bg: 'linear-gradient(135deg, #1c1407 0%, #2e1f0a 100%)',
              icon: '🪵',
            },
            {
              name: 'Rudra Doors',
              tagline: 'Bold. Durable. Timeless.',
              desc: 'Rudra Doors delivers solid construction with modern design sensibilities. Built for strength and style, perfect for mid-range residential projects that demand both character and longevity.',
              accent: '#f58634',
              bg: 'linear-gradient(135deg, #1a0c04 0%, #3d1a08 100%)',
              icon: '🚪',
            },
            {
              name: 'Isha Doors',
              tagline: 'Elegant. Affordable. Refined.',
              desc: 'Isha Doors brings premium aesthetics within reach. High-quality laminate and WPC finishes that look stunning without compromising your budget — ideal for apartments and everyday homes.',
              accent: '#6ea8c8',
              bg: 'linear-gradient(135deg, #060e14 0%, #0d2030 100%)',
              icon: '✨',
            },
          ].map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, boxShadow: `0 20px 50px rgba(0,0,0,0.18)` }}
              style={{
                background: brand.bg,
                borderRadius: '16px',
                padding: '2.5rem 2rem',
                textAlign: 'left',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
                border: `1px solid rgba(255,255,255,0.06)`,
              }}
            >
              {/* Decorative corner accent */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: '80px', height: '80px', background: `radial-gradient(circle at top right, ${brand.accent}22, transparent 70%)` }} />

              <div style={{ fontSize: '2rem', marginBottom: '1.2rem' }}>{brand.icon}</div>

              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.6rem', fontWeight: 700,
                color: '#fff', marginBottom: '0.3rem',
              }}>
                {brand.name}
              </h3>

              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.7rem', letterSpacing: '2px',
                textTransform: 'uppercase', color: brand.accent,
                fontWeight: 700, marginBottom: '1rem',
              }}>
                {brand.tagline}
              </p>

              {/* Gold divider */}
              <div style={{ width: '40px', height: '2px', background: brand.accent, marginBottom: '1.2rem', borderRadius: '1px' }} />

              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', lineHeight: 1.8 }}>
                {brand.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}

      <section style={{ padding: 'var(--py-section) var(--px-main)', background: 'linear-gradient(135deg, #fffdf9 0%, #f7f9fc 100%)', textAlign: 'center', borderTop: '1px solid #eee' }}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontFamily: "'Playfair Display', serif", color: 'var(--primary-blue)', marginBottom: '1rem' }}>Ready to Elevate Your Space?</h2>
          <p style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto 2.5rem auto', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Contact our experts today to discuss your project requirements and get a personalized quote.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-orange" style={{ padding: '0.9rem 2.2rem', fontSize: '1rem' }}>
              Contact Us Now
            </Link>
            <a href="https://wa.me/918971794549" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '0.9rem 2.2rem', fontSize: '1rem' }}>
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </section>
    </AnimatedPage>
  );
};

export default Home;

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

const stats = [
  { end: 18, suffix: '+', label: 'Years of Excellence', delay: 0 },
  { end: 25, suffix: 'k+', label: 'Doors Manufactured', delay: 0.1 },
  { end: 3, suffix: '', label: 'Premium Brands', delay: 0.2 },
  { end: 100, suffix: '%', label: 'Quality Assurance', delay: 0.3 }
];

const AnimatedNumber = ({ value, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    } else {
      motionValue.set(0);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const QuickStats = () => (
  <section style={{ 
    padding: '4rem var(--px-main)', 
    background: '#0d0a07', 
    borderTop: '1px solid rgba(255,255,255,0.05)',
    borderBottom: '1px solid rgba(255,255,255,0.05)'
  }}>
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '2rem'
    }}>
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: stat.delay, ease: [0.22, 1, 0.36, 1] }}
          style={{ flex: '1 1 200px', textAlign: 'center' }}
        >
          <h3 style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
            color: '#c8a96e', 
            margin: '0 0 0.5rem 0',
            lineHeight: 1
          }}>
            <AnimatedNumber value={stat.end} suffix={stat.suffix} />
          </h3>
          <p style={{ 
            fontFamily: "'Montserrat', sans-serif", 
            fontSize: '0.8rem', 
            letterSpacing: '2px', 
            textTransform: 'uppercase', 
            color: 'rgba(255,255,255,0.6)', 
            margin: 0,
            fontWeight: 600
          }}>
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default QuickStats;

import { motion } from 'framer-motion';
import useCountUp from './useCountUp';

const stats = [
  { num: 18,  suffix: '+', label: 'Years Experience'    },
  { num: 500, suffix: '+', label: 'Projects Completed'  },
  { num: 150, suffix: '+', label: 'Expert Artisans'     },
  { num: 100, suffix: '%', label: 'Client Satisfaction' },
];

const StatItem = ({ num, suffix, label, delay }) => {
  const [count, ref] = useCountUp(num, 1800);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ textAlign: 'center', padding: '0 1rem' }}
    >
      <div ref={ref}>
        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2.4rem, 5vw, 3.4rem)',
          fontWeight: 700,
          color: 'var(--primary-orange)',
          margin: 0,
          lineHeight: 1,
        }}>
          {count}{suffix}
        </p>
        <div style={{
          width: '32px', height: '2px',
          background: 'rgba(255,255,255,0.25)',
          margin: '0.75rem auto',
          borderRadius: '2px',
        }} />
        <p style={{
          fontSize: '0.88rem',
          fontWeight: 600,
          color: '#ffffff',
          margin: 0,
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
        }}>
          {label}
        </p>
      </div>
    </motion.div>
  );
};

const StatsSection = () => (
  <section style={{
    padding: 'var(--py-section) var(--px-main)',
    background: 'var(--primary-blue)',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '2.5rem',
  }}>
    {stats.map((s, i) => (
      <StatItem key={i} num={s.num} suffix={s.suffix} label={s.label} delay={i * 0.12} />
    ))}
  </section>
);

export default StatsSection;

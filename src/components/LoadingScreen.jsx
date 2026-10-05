import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState('in'); // 'in' → 'hold' → 'out'

  useEffect(() => {
    // Hold after intro animation
    const holdTimer = setTimeout(() => setPhase('out'), 2200);
    // Unmount and reveal site
    const doneTimer = setTimeout(() => onComplete(), 3000);
    return () => {
      clearTimeout(holdTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: '#0d0a07',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Subtle radial glow behind */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 0.18, scale: 1.4 }}
            transition={{ duration: 2.5, ease: 'easeOut' }}
            style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse at center, #c8a96e 0%, transparent 65%)',
              pointerEvents: 'none',
            }}
          />

          {/* Thin horizontal lines (architectural feel) */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute', top: '42%', left: '10%', right: '10%',
              height: '1px', background: 'rgba(200,169,110,0.18)',
              transformOrigin: 'center',
            }}
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute', top: '58%', left: '10%', right: '10%',
              height: '1px', background: 'rgba(200,169,110,0.18)',
              transformOrigin: 'center',
            }}
          />

          {/* Main Brand Content */}
          <div style={{ position: 'relative', textAlign: 'center' }}>

            {/* Eyebrow label */}
            <motion.p
              initial={{ opacity: 0, letterSpacing: '10px' }}
              animate={{ opacity: 1, letterSpacing: '6px' }}
              transition={{ duration: 1.0, delay: 0.4, ease: 'easeOut' }}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.65rem', letterSpacing: '6px',
                textTransform: 'uppercase', color: '#c8a96e',
                marginBottom: '1.2rem', fontWeight: 700,
              }}
            >
              Est. 2006 · Bengaluru
            </motion.p>

            {/* Main Brand Logo */}
            <div style={{ overflow: 'hidden', display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.8rem', padding: '1rem' }}>
              <motion.span
                initial={{ y: '100%', opacity: 0, rotate: -5 }}
                animate={{ y: '0%', opacity: 1, rotate: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(4rem, 12vw, 7rem)',
                  fontWeight: 700, fontStyle: 'italic',
                  color: '#cc0000', // Official brand red
                  letterSpacing: '-2px',
                  lineHeight: 1,
                  textShadow: '0 0 40px rgba(204,0,0,0.5)',
                }}
              >
                jk
              </motion.span>
              
              <motion.h1
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight: 700,
                  color: '#fff',
                  letterSpacing: '8px',
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                JK GROUP
              </motion.h1>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0, delay: 1.4, ease: 'easeOut' }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: 'clamp(0.8rem, 1.8vw, 1rem)',
                color: 'rgba(200,169,110,0.7)',
                marginTop: '1.2rem',
              }}
            >
              Premium Doors &amp; Frames · Since 2006
            </motion.p>
          </div>

          {/* Loading bar at bottom */}
          <div style={{
            position: 'absolute', bottom: '2.5rem', left: '15%', right: '15%',
          }}>
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', borderRadius: '1px', overflow: 'hidden' }}>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  height: '100%', background: 'linear-gradient(to right, #c8a96e, #f0d080)',
                  transformOrigin: 'left',
                  boxShadow: '0 0 8px rgba(200,169,110,0.6)',
                }}
              />
            </div>
          </div>

          {/* Corner decorations */}
          {[
            { top: '2rem', left: '2rem', borderTop: '1px solid rgba(200,169,110,0.3)', borderLeft: '1px solid rgba(200,169,110,0.3)' },
            { top: '2rem', right: '2rem', borderTop: '1px solid rgba(200,169,110,0.3)', borderRight: '1px solid rgba(200,169,110,0.3)' },
            { bottom: '2rem', left: '2rem', borderBottom: '1px solid rgba(200,169,110,0.3)', borderLeft: '1px solid rgba(200,169,110,0.3)' },
            { bottom: '2rem', right: '2rem', borderBottom: '1px solid rgba(200,169,110,0.3)', borderRight: '1px solid rgba(200,169,110,0.3)' },
          ].map((style, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.07 }}
              style={{ position: 'absolute', width: '24px', height: '24px', ...style }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({ children, strength = 0.3, ...props }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * strength;
    const dy = (e.clientY - cy) * strength;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0px, 0px)';
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ display: 'inline-flex', transition: 'transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)' }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './CustomCursor.css';

const isMobile = () => window.matchMedia('(pointer: coarse)').matches;

export default function CustomCursor() {
  const [state, setState] = useState('default');
  const [visible, setVisible] = useState(false);

  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  const springConfigDot = { damping: 25, stiffness: 400, mass: 0.5 };
  const springConfigRing = { damping: 30, stiffness: 250, mass: 0.8 };

  const dotX = useSpring(cursorX, springConfigDot);
  const dotY = useSpring(cursorY, springConfigDot);

  const ringX = useSpring(cursorX, springConfigRing);
  const ringY = useSpring(cursorY, springConfigRing);

  useEffect(() => {
    if (isMobile()) return;

    const updateStateFromElement = (el) => {
      if (!el) return;
      if (el.closest('img, .category-card, .product-img, .gallery-img')) {
        setState('image');
      } else if (el.closest('button, a, [role="button"]')) {
        setState('button');
      } else {
        setState('default');
      }
    };

    const onMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onMouseOver = (e) => {
      updateStateFromElement(e.target);
    };

    let scrollRaf;
    const onScroll = () => {
      if (!scrollRaf) {
        scrollRaf = requestAnimationFrame(() => {
          const el = document.elementFromPoint(cursorX.get(), cursorY.get());
          updateStateFromElement(el);
          scrollRaf = null;
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true, capture: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('scroll', onScroll, { capture: true });
      if (scrollRaf) cancelAnimationFrame(scrollRaf);
    };
  }, [visible, cursorX, cursorY]);

  if (isMobile()) return null;

  return (
    <>
      <motion.div
        className={`cc-dot${visible ? ' cc-visible' : ''}`}
        data-state={state}
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className={`cc-ring${visible ? ' cc-visible' : ''}`}
        data-state={state}
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="cc-label"
        data-state={state}
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      >
        VIEW
      </motion.div>
    </>
  );
}

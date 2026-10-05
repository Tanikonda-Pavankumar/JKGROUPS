import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const isMobile = () => window.matchMedia('(pointer: coarse)').matches;

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);
  const pos = useRef({ x: -200, y: -200 });
  const cur = useRef({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isMobile()) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    let raf;
    let state = 'default'; // 'default' | 'button' | 'image'

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const setState = (s) => {
      state = s;
      dot.dataset.state = s;
      ring.dataset.state = s;
      label.dataset.state = s;
    };

    const attachListeners = () => {
      document.querySelectorAll('button, a, [role="button"]').forEach(el => {
        if (el._cursorBound) return;
        el._cursorBound = true;
        el.addEventListener('mouseenter', () => setState('button'));
        el.addEventListener('mouseleave', () => setState('default'));
      });
      document.querySelectorAll('img, .category-card, .product-img').forEach(el => {
        if (el._cursorImgBound) return;
        el._cursorImgBound = true;
        el.addEventListener('mouseenter', () => setState('image'));
        el.addEventListener('mouseleave', () => setState('default'));
      });
    };

    const loop = () => {
      const lerp = 0.1;
      cur.current.x += (pos.current.x - cur.current.x) * lerp;
      cur.current.y += (pos.current.y - cur.current.y) * lerp;

      const x = cur.current.x;
      const y = cur.current.y;

      dot.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
      ring.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
      label.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;

      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(loop);
    attachListeners();

    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  if (isMobile()) return null;

  return (
    <>
      <div ref={dotRef} className={`cc-dot${visible ? ' cc-visible' : ''}`} />
      <div ref={ringRef} className={`cc-ring${visible ? ' cc-visible' : ''}`} />
      <div ref={labelRef} className="cc-label">VIEW</div>
    </>
  );
}

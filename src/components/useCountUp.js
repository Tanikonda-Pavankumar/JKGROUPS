import { useState, useCallback, useRef } from 'react';

export default function useCountUp(target, duration = 1600) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const observerRef = useRef(null);

  const ref = useCallback(
    (node) => {
      // Disconnect any previous observer
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      if (!node) return;

      // Reset so each new mount (new page) counts fresh
      started.current = false;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting || started.current) return;
          started.current = true;
          observer.disconnect();

          const startTime = performance.now();
          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
          };
          requestAnimationFrame(tick);
        },
        { threshold: 0.25 }
      );

      observer.observe(node);
      observerRef.current = observer;
    },
    [target, duration]
  );

  return [count, ref];
}

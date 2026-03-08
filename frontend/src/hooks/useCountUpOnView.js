import { useEffect, useMemo, useRef, useState } from 'react';

export default function useCountUpOnView(rawValue, { threshold = 0.4, steps = 60 } = {}) {
  const ref = useRef(null);
  const [value, setValue] = useState('0');

  const parsed = useMemo(() => {
    const raw = String(rawValue ?? '0');
    const hasPlus = raw.endsWith('+');
    const numeric = parseInt(raw, 10) || 0;
    return { raw, hasPlus, numeric };
  }, [rawValue]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let interval = null;

    const start = () => {
      let current = 0;
      const stepValue = parsed.numeric / steps;
      interval = window.setInterval(() => {
        current += stepValue;
        if (current >= parsed.numeric) {
          current = parsed.numeric;
          if (interval) window.clearInterval(interval);
        }
        const base = Math.round(current);
        setValue(parsed.hasPlus ? `${base}+` : `${base}`);
      }, 16);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            start();
            observer.disconnect();
          }
        });
      },
      { threshold },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (interval) window.clearInterval(interval);
    };
  }, [parsed, steps, threshold]);

  return { ref, value };
}


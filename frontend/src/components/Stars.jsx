import { useEffect, useRef } from 'react';

export default function Stars() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const STAR_COUNT = 180;
    const stars = [];

    const createStars = () => {
      stars.length = 0;
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: 0.2 + Math.random() * 1.2,
          speed: 0.5 + Math.random() * 1.5,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    let rafId = 0;
    const draw = (time) => {
      ctx.clearRect(0, 0, width, height);
      for (const star of stars) {
        const t = time * 0.001 * star.speed + star.phase;
        const alpha = 0.08 + ((Math.sin(t) + 1) / 2) * (0.4 - 0.08);
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,245,255,${alpha.toFixed(3)})`;
        ctx.fill();
      }
      rafId = requestAnimationFrame(draw);
    };

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      createStars();
    };

    window.addEventListener('resize', onResize);
    createStars();
    rafId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas id="stars" ref={canvasRef} />;
}


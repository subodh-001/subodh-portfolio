import { useEffect, useRef } from 'react';

export default function NetworkLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    interface Drop {
      y: number;
      speed: number;
      opacity: number;
    }

    const drops: Drop[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = {
        y: Math.random() * -100,
        speed: Math.random() * 0.5 + 0.3,
        opacity: Math.random() * 0.5 + 0.3
      };
    }

    let animationId: number;

    function animate() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px "Courier New", monospace`;

      drops.forEach((drop, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;

        // Fade effect
        const gradient = ctx.createLinearGradient(x, drop.y - fontSize * 10, x, drop.y);
        gradient.addColorStop(0, `rgba(0, 255, 0, 0)`);
        gradient.addColorStop(0.5, `rgba(0, 255, 0, ${drop.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(0, 255, 0, ${drop.opacity})`);

        ctx.fillStyle = gradient;
        ctx.fillText(char, x, drop.y);

        drop.y += drop.speed * fontSize;

        if (drop.y > canvas.height && Math.random() > 0.975) {
          drop.y = 0;
          drop.speed = Math.random() * 0.5 + 0.3;
          drop.opacity = Math.random() * 0.5 + 0.3;
        }
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-5"
      style={{ opacity: 0.15 }}
    />
  );
}

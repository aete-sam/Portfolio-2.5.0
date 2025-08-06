import React, { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const scale = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * scale;
      canvas.height = window.innerHeight * scale;
      ctx.scale(scale, scale);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Using only numbers and symbols for a more cryptographic look
    const chars = '0123456789!@#$%^&*()_+-=[]{}|;:,./<>?~'.split('');
    const fontSize = 16; // Reduced font size for more density
    const columns = Math.ceil(window.innerWidth / (fontSize * 0.7)); // Increased columns by reducing spacing
    const drops: number[] = Array(columns).fill(1);
    const glowIntensity: number[] = Array(columns).fill(1);

    ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
    ctx.textAlign = 'center';

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * (fontSize * 0.7); // Reduced spacing between columns
        const y = drops[i] * fontSize;
        const intensity = glowIntensity[i];

        // Leading character (brighter)
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#00ff00';
        ctx.fillStyle = `rgba(0, 255, 0, ${intensity * 0.85})`;
        ctx.fillText(char, x, y);

        // Trail characters (multiple for denser effect)
        ctx.shadowBlur = 0;
        for (let j = 1; j <= 4; j++) { // Added second trail character
          ctx.fillStyle = `rgba(0, 255, 0, ${intensity * (0.4 / j)})`;
          ctx.fillText(chars[Math.floor(Math.random() * chars.length)], x, y - fontSize * j);
        }

        if (y > canvas.height && Math.random() > 0.96) { // Increased spawn rate
          drops[i] = 0;
          glowIntensity[i] = 1;
        }

        drops[i]++;
        glowIntensity[i] *= 0.95;
      }
    };

    let animationId: number;
    const animate = () => {
      draw();
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ opacity: 0.89 }}
    />
  );
};

export default MatrixRain;
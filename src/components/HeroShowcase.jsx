import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const images = [
  'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556741533-f6acd6477e9a?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551292831-023188e78222?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1559523182-a8848f7c5c8a?q=80&w=2000&auto=format&fit=crop'
];

export default function HeroShowcase() {
  const [index, setIndex] = useState(0);
  const intervalMs = 5000; // 5s

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, []);

  const orderedImages = useMemo(() => {
    // Put current image last so it fades in on top
    const before = images.slice(0, index + 1);
    const after = images.slice(index + 1);
    return [...after, ...before];
  }, [index]);

  return (
    <section className="relative w-full h-[70vh] md:h-[78vh] rounded-2xl overflow-hidden shadow-2xl">
      {/* Background crossfade + Ken Burns */}
      <div className="absolute inset-0">
        {orderedImages.map((src, i) => (
          <motion.img
            key={src + i}
            src={src}
            alt="Background visual"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: i === orderedImages.length - 1 ? 1 : 0, scale: 1.1 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
            style={{ filter: 'saturate(1.1) contrast(1.02)' }}
          />
        ))}
      </div>

      {/* Gradient overlay - bottom to top */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 h-full flex items-end">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="p-8 md:p-12 w-full text-white"
        >
          <h1 className="font-bold tracking-tight text-4xl md:text-[56px] leading-[1.05]">
            Modern Fintech Designer & Developer
          </h1>
          <p className="mt-3 text-base md:text-[20px]/relaxed text-white/60 max-w-3xl">
            Crafting glassmorphic experiences with motion-first interfaces and immersive 3D.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

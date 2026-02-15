'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { regions } from '@/data/gems';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function RegionCard({ region, index }) {
  const cardRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const card = cardRef.current;
    const bg = bgRef.current;

    // Parallax effect for background image
    gsap.to(bg, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: card,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Card entrance animation
    gsap.from(card, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  const scrollToMap = () => {
    document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      ref={cardRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center"
        style={{
          backgroundImage: `url(${region.image})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-light p-8 md:p-12 rounded-2xl"
        >
          <h2
            className="font-display text-4xl md:text-6xl mb-4 text-shadow-lg"
            style={{ color: region.color }}
          >
            {region.name}
          </h2>
          <p className="text-white text-lg md:text-xl mb-8 leading-relaxed">
            {region.description}
          </p>
          <button
            onClick={scrollToMap}
            className="btn-primary inline-flex items-center space-x-2 group"
          >
            <span>View Gems</span>
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default function ParallaxSection() {
  return (
    <section id="regions" className="relative">
      {regions.map((region, index) => (
        <RegionCard key={region.name} region={region} index={index} />
      ))}
    </section>
  );
}

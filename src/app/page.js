'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ParallaxSection from '@/components/ParallaxSection';
import Map3D from '@/components/Map3D';
import Quiz from '@/components/Quiz';
import Favourites from '@/components/Favourites';
import Footer from '@/components/Footer';
import GemModal from '@/components/GemModal';

export default function Home() {
  useEffect(() => {
    // Smooth scroll polyfill for Safari
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ParallaxSection />
      <Map3D />
      <Quiz />
      <Favourites />
      <Footer />
      <GemModal />
    </main>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Heart, Map, Home, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@/store/useStore';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const favourites = useStore(state => state.favourites);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', icon: Home, action: () => scrollToSection('hero') },
    { name: 'Regions', icon: Compass, action: () => scrollToSection('regions') },
    { name: 'Map', icon: Map, action: () => scrollToSection('map') },
    { name: 'Quiz', icon: Compass, action: () => scrollToSection('quiz') },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-dark' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-kenya-orange to-kenya-yellow flex items-center justify-center">
                <span className="text-white font-display text-lg">UK</span>
              </div>
              <div>
                <h1 className="text-white font-display text-xl md:text-2xl">Unbound</h1>
                <p className="text-kenya-yellow text-xs -mt-1">Kenya</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={link.action}
                  className="text-white hover:text-kenya-yellow transition-colors duration-300 flex items-center space-x-2"
                >
                  <link.icon size={18} />
                  <span>{link.name}</span>
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => scrollToSection('favourites')}
                className="glass px-4 py-2 rounded-full text-white hover:scale-105 transition-transform duration-300 flex items-center space-x-2"
              >
                <Heart size={18} fill={favourites.length > 0 ? '#E86B2C' : 'none'} />
                <span>My Gems</span>
                {favourites.length > 0 && (
                  <span className="bg-kenya-orange rounded-full px-2 py-0.5 text-xs">
                    {favourites.length}
                  </span>
                )}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2 rounded-lg glass"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-dark mt-2"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={link.action}
                    className="w-full text-left text-white hover:text-kenya-yellow transition-colors duration-300 flex items-center space-x-3 py-2"
                  >
                    <link.icon size={20} />
                    <span>{link.name}</span>
                  </button>
                ))}
                <button
                  onClick={() => {
                    scrollToSection('favourites');
                    setIsOpen(false);
                  }}
                  className="w-full text-left glass px-4 py-3 rounded-lg text-white flex items-center space-x-3"
                >
                  <Heart size={20} fill={favourites.length > 0 ? '#E86B2C' : 'none'} />
                  <span>My Gems ({favourites.length})</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

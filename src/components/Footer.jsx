'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Twitter, Instagram, Users } from 'lucide-react';
import { useStore } from '@/store/useStore';

export default function Footer() {
  const { explorerCount, incrementExplorers } = useStore();

  useEffect(() => {
    // Increment explorer count randomly
    const interval = setInterval(() => {
      if (Math.random() > 0.5) {
        incrementExplorers();
      }
    }, 3000 + Math.random() * 3000);

    return () => clearInterval(interval);
  }, [incrementExplorers]);

  return (
    <footer className="relative pt-20 pb-8 px-4 mt-20 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-kenya-orange to-kenya-yellow flex items-center justify-center">
                <span className="text-white font-display text-xl">UK</span>
              </div>
              <div>
                <h3 className="text-white font-display text-2xl">Unbound</h3>
                <p className="text-kenya-yellow text-sm -mt-1">Kenya</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Unlocking Kenya's hidden tourism potential, one discovery at a time. 
              Together, we can bridge the KSh 150B gap.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display text-lg mb-4">Explore</h4>
            <ul className="space-y-2">
              {['Regions', 'Interactive Map', 'Take Quiz', 'My Gems'].map((link) => (
                <li key={link}>
                  <button className="text-white/60 hover:text-kenya-yellow transition-colors text-sm">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats & Social */}
          <div>
            <h4 className="text-white font-display text-lg mb-4">Join the Movement</h4>
            
            {/* Live explorer counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass rounded-lg p-4 mb-4"
            >
              <div className="flex items-center space-x-2 text-kenya-yellow mb-1">
                <Users size={20} />
                <span className="font-semibold text-sm">Live Explorers</span>
              </div>
              <motion.div
                key={explorerCount}
                initial={{ scale: 1.2, color: '#F4AB4D' }}
                animate={{ scale: 1, color: '#ffffff' }}
                className="font-display text-3xl text-white"
              >
                {explorerCount.toLocaleString()}
              </motion.div>
              <p className="text-white/40 text-xs mt-1">discovering hidden gems right now</p>
            </motion.div>

            {/* Social links */}
            <div className="flex space-x-3">
              {[
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Github, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="glass w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 hover:text-kenya-yellow transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-white/40 text-sm text-center md:text-left">
            © 2026 Unbound Kenya. Built with <Heart size={14} className="inline text-kenya-orange" fill="#E86B2C" /> for Kenya's future.
          </p>
          <p className="text-white/40 text-sm">
            A hackathon project reimagining tourism
          </p>
        </div>

        {/* Hidden impact statement */}
        <div className="mt-8 text-center">
          <p className="text-white/20 text-xs italic">
            "Every hidden gem discovered is a step towards unlocking KSh 150B in untapped potential"
          </p>
        </div>
      </div>
    </footer>
  );
}

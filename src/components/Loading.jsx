'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-kenya-orange to-kenya-yellow flex items-center justify-center"
        >
          <span className="text-white font-display text-2xl">UK</span>
        </motion.div>
        <h2 className="font-display text-2xl text-white mb-2">Unbound Kenya</h2>
        <p className="text-white/60">Loading hidden gems...</p>
      </motion.div>
    </div>
  );
}

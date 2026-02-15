'use client';

import { motion } from 'framer-motion';
import { Heart, Trash2 } from 'lucide-react';
import { useStore } from '@/store/useStore';

export default function Favourites() {
  const { favourites, removeFavourite, setSelectedGem, openModal } = useStore();

  const handleGemClick = (gem) => {
    setSelectedGem(gem);
    openModal();
  };

  if (favourites.length === 0) {
    return (
      <section id="favourites" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-light rounded-2xl p-12"
          >
            <Heart size={64} className="text-white/30 mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              My Saved Gems
            </h2>
            <p className="text-white/60 text-lg">
              You haven't saved any destinations yet. Explore the map and quiz to find your perfect gems!
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="favourites" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            My Saved <span className="text-gradient">Gems</span>
          </h2>
          <p className="text-white/80 text-lg">
            {favourites.length} {favourites.length === 1 ? 'destination' : 'destinations'} ready for your adventure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favourites.map((gem, index) => (
            <motion.div
              key={gem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl overflow-hidden group cursor-pointer"
            >
              <div
                onClick={() => handleGemClick(gem)}
                className="h-48 bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: `url(${gem.image})` }}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300" />
                
                {/* Region badge */}
                <div className="absolute top-3 left-3 glass-dark px-3 py-1 rounded-full">
                  <span className="text-white text-xs font-medium">{gem.region}</span>
                </div>

                {/* Delete button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFavourite(gem.id);
                  }}
                  className="absolute top-3 right-3 glass-dark p-2 rounded-full text-white hover:bg-red-500 hover:scale-110 transition-all duration-300"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <div
                onClick={() => handleGemClick(gem)}
                className="p-4"
              >
                <h3 className="font-display text-xl text-white mb-2 group-hover:text-kenya-yellow transition-colors">
                  {gem.name}
                </h3>
                <p className="text-white/60 text-sm line-clamp-2 mb-3">
                  {gem.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {gem.activities.slice(0, 2).map((activity) => (
                    <span
                      key={activity}
                      className="glass-dark px-2 py-1 rounded text-white/80 text-xs"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, MapPin, Navigation } from 'lucide-react';
import { useStore } from '@/store/useStore';

export default function GemModal() {
  const { selectedGem, isModalOpen, closeModal, addFavourite, removeFavourite, isFavourite } = useStore();

  useEffect(() => {
    // Prevent body scroll when modal is open
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Close on escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isModalOpen, closeModal]);

  if (!selectedGem) return null;

  const isFav = isFavourite(selectedGem.id);

  const handleFavouriteToggle = () => {
    if (isFav) {
      removeFavourite(selectedGem.id);
    } else {
      addFavourite(selectedGem);
    }
  };

  const handlePlanTrip = () => {
    // Mock functionality - in real app would integrate with booking system
    alert('🎉 Trip planning feature coming soon! This gem has been added to your wishlist.');
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass-light rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden pointer-events-auto"
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 glass p-2 rounded-full text-white hover:scale-110 transition-transform"
              >
                <X size={24} />
              </button>

              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div
                  className="h-64 md:h-full bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${selectedGem.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Region badge */}
                  <div className="absolute top-4 left-4 glass px-4 py-2 rounded-full">
                    <span className="text-white font-medium flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{selectedGem.region}</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 overflow-y-auto max-h-[60vh] md:max-h-full">
                  <h2 className="font-display text-3xl md:text-4xl text-white mb-3">
                    {selectedGem.name}
                  </h2>

                  <p className="text-white/80 text-lg mb-6 leading-relaxed">
                    {selectedGem.description}
                  </p>

                  {/* Best For */}
                  <div className="mb-6">
                    <h3 className="text-kenya-yellow font-semibold mb-2">Perfect For:</h3>
                    <p className="text-white/80">{selectedGem.bestFor}</p>
                  </div>

                  {/* Activities */}
                  <div className="mb-6">
                    <h3 className="text-kenya-yellow font-semibold mb-2">Activities:</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedGem.activities.map((activity) => (
                        <span
                          key={activity}
                          className="glass px-3 py-1 rounded-full text-white text-sm"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Travel Styles */}
                  <div className="mb-8">
                    <h3 className="text-kenya-yellow font-semibold mb-2">Ideal For:</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedGem.travelStyle.map((style) => (
                        <span
                          key={style}
                          className="glass-dark px-3 py-1 rounded-full text-white text-sm"
                        >
                          {style}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={handleFavouriteToggle}
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                        isFav
                          ? 'bg-kenya-orange text-white'
                          : 'glass text-white hover:scale-105'
                      }`}
                    >
                      <Heart size={20} fill={isFav ? 'white' : 'none'} />
                      <span>{isFav ? 'Saved to My Gems' : 'Save to My Gems'}</span>
                    </button>

                    <button
                      onClick={handlePlanTrip}
                      className="w-full btn-primary flex items-center justify-center space-x-2"
                    >
                      <Navigation size={20} />
                      <span>Plan Trip</span>
                    </button>
                  </div>

                  {/* Coordinates (subtle) */}
                  <div className="mt-6 text-center text-white/40 text-xs">
                    {selectedGem.coordinates.lat.toFixed(4)}°, {selectedGem.coordinates.lng.toFixed(4)}°
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

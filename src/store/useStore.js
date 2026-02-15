import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set, get) => ({
      // Favourites
      favourites: [],
      addFavourite: (gem) => {
        const current = get().favourites;
        if (!current.find(f => f.id === gem.id)) {
          set({ favourites: [...current, gem] });
        }
      },
      removeFavourite: (gemId) => {
        set({ favourites: get().favourites.filter(f => f.id !== gemId) });
      },
      isFavourite: (gemId) => {
        return get().favourites.some(f => f.id === gemId);
      },
      
      // Quiz state
      quizAnswers: {},
      setQuizAnswer: (questionId, answer) => {
        set({ 
          quizAnswers: { ...get().quizAnswers, [questionId]: answer } 
        });
      },
      resetQuiz: () => set({ quizAnswers: {} }),
      
      // Selected gem (for map interaction)
      selectedGem: null,
      setSelectedGem: (gem) => set({ selectedGem: gem }),
      
      // Modal state
      isModalOpen: false,
      openModal: () => set({ isModalOpen: true }),
      closeModal: () => set({ isModalOpen: false, selectedGem: null }),
      
      // Explorer count (for aura farming)
      explorerCount: 1247,
      incrementExplorers: () => {
        set({ explorerCount: get().explorerCount + Math.floor(Math.random() * 3) + 1 });
      }
    }),
    {
      name: 'unbound-kenya-storage',
      partialize: (state) => ({ 
        favourites: state.favourites,
        explorerCount: state.explorerCount 
      })
    }
  )
);

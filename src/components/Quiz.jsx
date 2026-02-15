'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, RotateCcw } from 'lucide-react';
import { quizQuestions, hiddenGems } from '@/data/gems';
import { useStore } from '@/store/useStore';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const { setSelectedGem, openModal } = useStore();

  const handleAnswer = (questionId, value) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const recommendation = getRecommendation(newAnswers);
      setResult(recommendation);
    }
  };

  const getRecommendation = (userAnswers) => {
    // Simple matching algorithm based on quiz answers
    const landscape = userAnswers[1];
    const activity = userAnswers[2];
    const travelStyle = userAnswers[3];

    // Find gems that match the criteria
    const matches = hiddenGems.filter((gem) => {
      const landscapeMatch = gem.landscape === landscape;
      const activityMatch = gem.activities.includes(activity);
      const styleMatch = gem.travelStyle.includes(travelStyle);

      return landscapeMatch || activityMatch || styleMatch;
    });

    // Return the best match or a random one if multiple matches
    if (matches.length > 0) {
      return matches[Math.floor(Math.random() * matches.length)];
    }

    // Fallback to random gem
    return hiddenGems[Math.floor(Math.random() * hiddenGems.length)];
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
  };

  const handleExploreGem = () => {
    setSelectedGem(result);
    openModal();
    
    // Also scroll to map
    setTimeout(() => {
      document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <section id="quiz" className="py-20 px-4 bg-gradient-to-b from-transparent to-black/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            <Sparkles className="inline-block mb-2 text-kenya-yellow" size={32} />
            <br />
            Find Your Perfect <span className="text-gradient">Gem</span>
          </h2>
          <p className="text-white/80 text-lg">
            Answer a few questions and we'll match you with your ideal hidden destination
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="glass-light rounded-2xl p-8 md:p-12"
            >
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between text-white/60 text-sm mb-2">
                  <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-gradient-to-r from-kenya-orange to-kenya-yellow"
                  />
                </div>
              </div>

              {/* Question */}
              <h3 className="font-display text-2xl md:text-3xl text-white mb-8 text-center">
                {quizQuestions[currentQuestion].question}
              </h3>

              {/* Options */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {quizQuestions[currentQuestion].options.map((option) => (
                  <motion.button
                    key={option.value}
                    onClick={() => handleAnswer(quizQuestions[currentQuestion].id, option.value)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass p-6 rounded-xl text-white hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div className="text-4xl mb-3">{option.emoji}</div>
                    <div className="font-semibold text-lg">{option.label}</div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            // Result
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-light rounded-2xl overflow-hidden"
            >
              <div
                className="h-64 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${result.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-display text-3xl md:text-4xl text-white mb-2">
                    {result.name}
                  </h3>
                  <p className="text-kenya-yellow font-medium">{result.region}</p>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <Sparkles className="text-kenya-yellow" size={24} />
                  <p className="text-white text-lg font-semibold">Your Perfect Match!</p>
                  <Sparkles className="text-kenya-yellow" size={24} />
                </div>

                <p className="text-white/80 text-center mb-8 text-lg">
                  {result.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleExploreGem}
                    className="flex-1 btn-primary flex items-center justify-center space-x-2"
                  >
                    <span>Explore on Map</span>
                    <ArrowRight size={20} />
                  </button>
                  <button
                    onClick={resetQuiz}
                    className="flex-1 btn-secondary flex items-center justify-center space-x-2"
                  >
                    <RotateCcw size={20} />
                    <span>Retake Quiz</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

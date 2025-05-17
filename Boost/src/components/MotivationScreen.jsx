import { motion } from 'framer-motion';
import { Sparkles, Star, Heart, Zap } from 'lucide-react';

const MotivationScreen = ({ message, emoji, onContinue, autoContinue = false }) => {
  // Fun emoji animations
  const emojiVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  // Particle effects
  const particles = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    x: Math.cos(i * Math.PI / 4) * 100,
    y: Math.sin(i * Math.PI / 4) * 100,
    delay: i * 0.1
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-dark-blue to-soft-teal"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-full max-w-md mx-4 bg-dark-blue/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-center overflow-hidden"
      >
        {/* Animated Background Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-accent-red/30 rounded-full"
            initial={{ 
              x: 0, 
              y: 0, 
              scale: 0,
              opacity: 0 
            }}
            animate={{ 
              x: particle.x, 
              y: particle.y, 
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 2,
              delay: particle.delay,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        ))}

        {/* Emoji Display */}
        <motion.div
          variants={emojiVariants}
          initial="initial"
          animate="animate"
          className="text-6xl mb-6"
        >
          {emoji}
        </motion.div>

        {/* Message with Typing Effect */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-bebas text-3xl text-cream-beige mb-4"
        >
          {message}
        </motion.h2>

        {/* Decorative Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-4 mb-6"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Sparkles className="w-6 h-6 text-accent-red" />
          </motion.div>
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Star className="w-6 h-6 text-soft-teal" />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Heart className="w-6 h-6 text-cream-beige" />
          </motion.div>
        </motion.div>

        {/* Continue Button */}
        <motion.button
          onClick={onContinue}
          className="boost-button w-full flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Zap className="w-5 h-5" />
          Let's Keep Going! 🚀
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default MotivationScreen; 
import { motion } from 'framer-motion';
import { Trophy, Star, Sparkles, Zap, Heart, Rocket } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useEffect, useState } from 'react';

// Floating icons configuration
const FLOATING_ICONS = [
  { Icon: Star, color: 'text-accent-red', delay: 0 },
  { Icon: Sparkles, color: 'text-soft-teal', delay: 0.2 },
  { Icon: Heart, color: 'text-cream-beige', delay: 0.4 },
  { Icon: Zap, color: 'text-accent-red', delay: 0.6 },
  { Icon: Rocket, color: 'text-soft-teal', delay: 0.8 }
];

const VictoryScreen = ({ onRestart }) => {
  const [showConfetti, setShowConfetti] = useState(true);

  // Handle confetti animation
  useEffect(() => {
    const CONFETTI_DURATION = 3000; // 3 seconds
    const animationEnd = Date.now() + CONFETTI_DURATION;
    const confettiConfig = { 
      startVelocity: 30, 
      spread: 360, 
      ticks: 60, 
      zIndex: 0 
    };

    const getRandomPosition = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        setShowConfetti(false);
        return;
      }

      const particleCount = 50 * (timeLeft / CONFETTI_DURATION);
      
      // Left side confetti
      confetti({
        ...confettiConfig,
        particleCount,
        origin: { 
          x: getRandomPosition(0.1, 0.3), 
          y: Math.random() - 0.2 
        }
      });
      
      // Right side confetti
      confetti({
        ...confettiConfig,
        particleCount,
        origin: { 
          x: getRandomPosition(0.7, 0.9), 
          y: Math.random() - 0.2 
        }
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-dark-blue to-soft-teal overflow-hidden"
    >
      {/* Background glow */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-accent-red/10 blur-3xl"
        style={{ zIndex: 1 }}
      />

      {/* Floating icons */}
      {FLOATING_ICONS.map(({ Icon, color, delay }, index) => (
        <motion.div
          key={index}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 3,
            delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute"
          style={{
            left: `${20 + index * 15}%`,
            top: `${20 + Math.sin(index) * 20}%`,
            zIndex: 2
          }}
        >
          <Icon className={`w-8 h-8 ${color}`} />
        </motion.div>
      ))}

      {/* Main content card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 200,
          damping: 20
        }}
        className="relative w-full max-w-md mx-4 bg-dark-blue/90 backdrop-blur-md rounded-2xl p-8 shadow-xl text-center"
        style={{ zIndex: 3 }}
      >
        {/* Trophy */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className="mb-8"
        >
          <Trophy className="w-24 h-24 mx-auto text-accent-red" />
        </motion.div>

        {/* Victory message */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-bebas text-5xl text-cream-beige mb-4 drop-shadow-lg"
        >
          🎉 VICTORY! 🎉
        </motion.h1>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-bebas text-3xl text-accent-red mb-4 drop-shadow-lg"
        >
          You're a Warrior! ⚔️
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-soft-teal font-inter text-lg mb-6 drop-shadow-lg"
        >
          Amazing job completing all your tasks! You're unstoppable! ✨
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-cream-beige font-inter text-base mb-8 drop-shadow-lg"
        >
          Ready to take on another challenge? Let's keep this momentum going! 🚀
        </motion.p>

        {/* Restart button */}
        <div className="flex gap-4">
          <motion.button
            onClick={onRestart}
            className="boost-button flex-1 flex items-center justify-center gap-2 group text-lg py-3 bg-accent-red hover:bg-accent-red/90 text-white font-bold"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Zap className="w-6 h-6 group-hover:rotate-180 transition-transform" />
            Let's Do It Again! 🚀
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default VictoryScreen; 
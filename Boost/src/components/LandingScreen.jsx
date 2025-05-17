import { motion } from 'framer-motion';
import { Rocket, Zap, Star } from 'lucide-react';

const LandingScreen = ({ onStart }) => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex flex-col items-center justify-center p-4"
    >
      {/* Hero section */}
      <motion.div
        variants={itemVariants}
        className="text-center mb-12"
      >
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-6"
        >
          <Rocket className="w-20 h-20 mx-auto text-accent-red" />
        </motion.div>

        <h1 className="font-bebas text-6xl text-cream-beige mb-4">
          Boost Mode
        </h1>
        <p className="text-soft-teal font-inter text-xl max-w-md mx-auto">
          Supercharge your productivity with quick, energizing tasks tailored to your mood and time!
        </p>
      </motion.div>

      {/* Features section */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl w-full"
      >
        <div className="bg-dark-blue/50 p-6 rounded-xl backdrop-blur-sm">
          <Zap className="w-8 h-8 text-accent-red mb-4" />
          <h3 className="font-bebas text-xl text-cream-beige mb-2">Quick Boost</h3>
          <p className="text-soft-teal font-inter">
            Get instant energy with tasks that match your current mood
          </p>
        </div>

        <div className="bg-dark-blue/50 p-6 rounded-xl backdrop-blur-sm">
          <Star className="w-8 h-8 text-accent-red mb-4" />
          <h3 className="font-bebas text-xl text-cream-beige mb-2">Smart Tasks</h3>
          <p className="text-soft-teal font-inter">
            Personalized activities based on your energy level
          </p>
        </div>

        <div className="bg-dark-blue/50 p-6 rounded-xl backdrop-blur-sm">
          <Rocket className="w-8 h-8 text-accent-red mb-4" />
          <h3 className="font-bebas text-xl text-cream-beige mb-2">Time Flexible</h3>
          <p className="text-soft-teal font-inter">
            Choose your session length - from quick bursts to longer focus
          </p>
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.button
        variants={itemVariants}
        onClick={onStart}
        className="boost-button flex items-center gap-2 text-xl py-4 px-8 group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Rocket className="w-6 h-6 group-hover:rotate-180 transition-transform" />
        Let's Get Started!
      </motion.button>
    </motion.div>
  );
};

export default LandingScreen; 
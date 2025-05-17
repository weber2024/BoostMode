import { motion } from 'framer-motion';
import { Clock, Zap } from 'lucide-react';

const TimeSelector = ({ onSelect }) => {
  // Time options in minutes
  const timeOptions = [
    { value: 5, label: 'Quick Boost (5 min)' },
    { value: 15, label: 'Short Session (15 min)' },
    { value: 30, label: 'Focus Time (30 min)' },
    { value: 60, label: 'Deep Work (60 min)' }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
      <div className="w-full max-w-md bg-dark-blue/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-8"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mb-4"
          >
            <Clock className="w-12 h-12 mx-auto text-accent-red" />
          </motion.div>

          <h2 className="font-bebas text-4xl text-cream-beige mb-4">
            Choose Your Time
          </h2>
          <p className="text-soft-teal font-inter">
            How long do you want to boost your productivity?
          </p>
        </motion.div>

        {/* Time Options */}
        <div className="grid gap-4 mb-8">
          {timeOptions.map((option, index) => (
            <motion.button
              key={option.value}
              variants={itemVariants}
              onClick={() => onSelect(option.value)}
              className="boost-button flex items-center justify-between p-4 rounded-xl bg-dark-blue/50 hover:bg-dark-blue/70 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-inter text-soft-teal">
                {option.label}
              </span>
              <Zap className="w-5 h-5 text-accent-red" />
            </motion.button>
          ))}
        </div>

        {/* Quick Tip */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <p className="text-soft-teal/80 font-inter text-sm">
            Tip: Start with a shorter session and increase as you get comfortable!
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TimeSelector; 
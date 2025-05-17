import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Sparkles, Zap, Star, Rocket } from 'lucide-react';

const TaskGeneration = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { icon: <Sparkles className="w-8 h-8" />, text: "Analyzing your energy level..." },
    { icon: <Zap className="w-8 h-8" />, text: "Crafting perfect tasks..." },
    { icon: <Star className="w-8 h-8" />, text: "Optimizing for your time..." },
    { icon: <Rocket className="w-8 h-8" />, text: "Ready to boost!" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });

      setCurrentStep(prev => {
        if (prev < steps.length - 1 && progress >= (prev + 1) * (100 / steps.length)) {
          return prev + 1;
        }
        return prev;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [progress, onComplete]);

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
        {/* Progress Bar */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="h-2 bg-dark-blue/50 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-accent-red"
            />
          </div>
        </motion.div>

        {/* Current Step */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-8"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mb-4"
          >
            {steps[currentStep].icon}
          </motion.div>

          <h2 className="font-bebas text-3xl text-cream-beige mb-4">
            {steps[currentStep].text}
          </h2>
          <p className="text-soft-teal font-inter">
            {Math.round(progress)}% Complete
          </p>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="w-2 h-2 bg-accent-red rounded-full"
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TaskGeneration; 
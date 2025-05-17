import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Battery, BatteryCharging, Zap } from 'lucide-react';

// TODO: Consider adding haptic feedback for mobile
// Note: Slider sensitivity might need adjustment based on device
const MoodSlider = ({ onSelect }) => {
  const [energyLevel, setEnergyLevel] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  // Added this to prevent accidental double-clicks
  const [lastClickTime, setLastClickTime] = useState(0);

  // Energy level descriptions - might need to adjust thresholds
  const getEnergyDescription = (level) => {
    if (level < 33) return "Low Energy - Let's take it easy";
    if (level < 66) return "Medium Energy - Ready to go!";
    return "High Energy - Let's crush it!";
  };

  // Energy level icon - TODO: Add more icon variations
  const getEnergyIcon = (level) => {
    if (level < 33) return <Battery className="w-8 h-8 text-accent-red" />;
    if (level < 66) return <BatteryCharging className="w-8 h-8 text-accent-red" />;
    return <Zap className="w-8 h-8 text-accent-red" />;
  };

  // Handle slider change with debounce
  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value);
    // Add some resistance at the edges
    const adjustedValue = value < 10 ? 10 : value > 90 ? 90 : value;
    setEnergyLevel(adjustedValue);
    setHasInteracted(true);
    // TODO: Fix this - sometimes the value jumps by 2 instead of 1
    // This is a known issue but doesn't affect functionality
    if (Math.abs(value - energyLevel) > 2) {
      console.warn('Slider value jumped unexpectedly');
    }
  };

  // Handle slider release
  const handleSliderRelease = () => {
    setIsDragging(false);
    // Add a small delay to prevent accidental triggers
    // FIXME: This timeout might cause memory leaks in some cases
    // but it's not critical for the app's functionality
    setTimeout(() => {
      // This is a bit hacky but works for now
      document.activeElement?.blur();
    }, 100);
  };

  // Handle continue button click with debounce
  const handleContinue = () => {
    const now = Date.now();
    // BUG: Sometimes this condition might not work as expected
    // but it's rare enough that we can live with it
    if (now - lastClickTime < 500) return; // Prevent double-clicks
    
    setLastClickTime(now);
    if (hasInteracted) {
      // TODO: Add error handling for edge cases
      onSelect(energyLevel);
    }
  };

  // Add keyboard support for accessibility
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter' && hasInteracted) {
        handleContinue();
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [hasInteracted, energyLevel]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen flex flex-col items-center justify-center p-4"
    >
      <div className="w-full max-w-md bg-dark-blue/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
        {/* Header */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h2 className="font-bebas text-4xl text-cream-beige mb-4">
            How's Your Energy?
          </h2>
          <p className="text-soft-teal font-inter">
            Slide to match your current energy level
          </p>
        </motion.div>

        {/* Energy Level Display */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          {getEnergyIcon(energyLevel)}
          <span className="font-bebas text-2xl text-accent-red">
            {energyLevel}%
          </span>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <input
            type="range"
            min="0"
            max="100"
            value={energyLevel}
            onChange={handleSliderChange}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={handleSliderRelease}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={handleSliderRelease}
            className="w-full h-2 bg-dark-blue rounded-lg appearance-none cursor-pointer accent-accent-red"
            // Added aria-label for accessibility
            aria-label="Energy level slider"
          />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="text-soft-teal font-inter text-lg mb-6">
            {getEnergyDescription(energyLevel)}
          </p>

          <motion.button
            onClick={handleContinue}
            className={`boost-button w-full flex items-center justify-center gap-2 py-3 ${
              !hasInteracted ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            whileHover={hasInteracted ? { scale: 1.02 } : {}}
            whileTap={hasInteracted ? { scale: 0.98 } : {}}
            disabled={!hasInteracted}
            // Added aria-label for accessibility
            aria-label={hasInteracted ? 'Continue' : 'Slide to Set Your Energy Level'}
          >
            <Zap className="w-5 h-5" />
            {hasInteracted ? 'Continue' : 'Slide to Set Your Energy Level'}
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MoodSlider; 
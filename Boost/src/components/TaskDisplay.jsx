import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  Flame, 
  Zap, 
  Trophy, 
  Star, 
  Rocket, 
  Heart, 
  Sparkles, 
  RefreshCw, 
  ArrowRight 
} from 'lucide-react';
import { getTasksForModeAndTime, getRandomMotivationalMessage } from '../data/tasks';
import MotivationScreen from './MotivationScreen';

const TaskDisplay = ({ userTime, userMood, onComplete }) => {
  const [tasks, setTasks] = useState([]);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMotivation, setShowMotivation] = useState(false);
  const [currentMotivation, setCurrentMotivation] = useState(null);
  const [remainingTime, setRemainingTime] = useState(userTime);
  const [remainingTasks, setRemainingTasks] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showStarAnimation, setShowStarAnimation] = useState(false);
  const [allTasksCompleted, setAllTasksCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(userTime * 60);
  const [isPaused, setIsPaused] = useState(false);

  // Map mood value (0-100) to energy mode
  const getEnergyMode = (mood) => {
    if (mood < 33) return 'lowEnergy';
    if (mood < 66) return 'mediumEnergy';
    return 'highEnergy';
  };

  // TODO: Maybe add more granular energy levels later
  // Parse duration string to minutes - handles both string and number inputs
  const parseDuration = (duration) => {
    if (typeof duration === 'string' && duration.includes('seconds')) {
      return 0.5; // 30-60 seconds counts as 0.5 minutes
    }
    const match = duration.toString().match(/(\d+)/);
    return match ? parseInt(match[1]) : 1;
  };

  // Format time display - could be moved to utils later
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Icons for different task categories - might need to add more later
  const categoryIcons = {
    exercise: '🏃',
    mindfulness: '🧘',
    health: '💪',
    relaxation: '😌',
    organization: '📋',
    productivity: '⚡',
    communication: '💬',
    planning: '📝',
    learning: '📚',
    creativity: '🎨',
    fun: '🎮',
    social: '👥',
    motivation: '🔥'
  };

  useEffect(() => {
    const generateTasks = () => {
      setIsLoading(true);
      const energyMode = getEnergyMode(userMood);
      const availableTasks = getTasksForModeAndTime(energyMode, userTime);

      if (!availableTasks || availableTasks.length === 0) {
        console.error('No tasks available for mode:', energyMode, 'and time:', userTime);
        setIsLoading(false);
        return;
      }

      // Select tasks that fit within the time limit
      const selectedTasks = [];
      let totalDuration = 0;

      for (const task of availableTasks) {
        const taskDuration = parseDuration(task.duration);
        if (totalDuration + taskDuration <= userTime) {
          selectedTasks.push({
            ...task,
            id: Math.random().toString(36).substr(2, 9) // Add unique ID
          });
          totalDuration += taskDuration;
        }
        if (selectedTasks.length >= 3) break; // Limit to 3 tasks max
      }

      if (selectedTasks.length === 0) {
        console.error('No tasks could be selected within the time limit');
        setIsLoading(false);
        return;
      }

      setTasks(selectedTasks);
      setRemainingTime(totalDuration);
      setRemainingTasks(selectedTasks.length);
      setCurrentTaskIndex(0);
      setIsLoading(false);
    };

    generateTasks();
  }, [userTime, userMood]);

  useEffect(() => {
    if (timeLeft > 0 && !isPaused) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      handleTaskComplete();
    }
  }, [timeLeft, isPaused]);

  const handleTaskComplete = () => {
    if (!tasks[currentTaskIndex]) return;

    const currentTaskDuration = parseDuration(tasks[currentTaskIndex].duration);
    setRemainingTime(prev => prev - currentTaskDuration);
    setCompletedTasks(prev => [...prev, tasks[currentTaskIndex].id]);
    setShowConfetti(true);
    setRemainingTasks(prev => prev - 1);
    setStreak(prev => prev + 1);
    
    setTimeout(() => {
      setShowConfetti(false);
    }, 1000);

    const newCompletedTasks = [...completedTasks, tasks[currentTaskIndex].id];
    
    if (newCompletedTasks.length === tasks.length) {
      setAllTasksCompleted(true);
      onComplete();
      return;
    }

    const energyMode = getEnergyMode(userMood);
    setCurrentMotivation(getRandomMotivationalMessage(energyMode));
    setShowMotivation(true);
  };

  const handleMotivationContinue = () => {
    setShowMotivation(false);
    if (!allTasksCompleted) {
      setCurrentTaskIndex(prev => prev + 1);
    }
  };

  // Fun button labels based on streak - could be moved to constants
  const getButtonLabel = () => {
    if (streak === 0) return "Let's Crush This! 💪";
    if (streak === 1) return "Keep the Momentum! 🚀";
    if (streak === 2) return "You're on Fire! 🔥";
    return "Almost There! 🌟";
  };

  // Get random task from available tasks - might need to add more variety
  const getRandomTask = () => {
    const energyMode = getEnergyMode(userMood);
    const availableTasks = getTasksForModeAndTime(energyMode, userTime);
    if (!availableTasks || availableTasks.length === 0) return null;
    return availableTasks[Math.floor(Math.random() * availableTasks.length)];
  };

  // Handle task reshuffle
  const handleReshuffle = () => {
    const newTask = getRandomTask();
    if (newTask) {
      const newTasks = [...tasks];
      newTasks[currentTaskIndex] = {
        ...newTask,
        id: Math.random().toString(36).substr(2, 9)
      };
      setTasks(newTasks);
    }
  };

  // Get completion message based on completed tasks
  const getCompletionMessage = () => {
    const messages = [
      { icon: <Flame className="w-6 h-6" />, text: "You're on fire! Keep going!" },
      { icon: <Star className="w-6 h-6" />, text: "You're doing great! Keep it up!" },
      { icon: <Trophy className="w-6 h-6" />, text: "Amazing work! You're crushing it!" }
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-blue to-soft-teal"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-full max-w-md mx-4 bg-dark-blue/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="mb-4"
          >
            <Rocket className="w-12 h-12 mx-auto text-accent-red" />
          </motion.div>
          <h2 className="font-bebas text-3xl text-cream-beige mb-4">
            Prepping Your Tasks...
          </h2>
          <p className="text-soft-teal font-inter">
            Getting everything ready for you! ✨
          </p>
        </motion.div>
      </motion.div>
    );
  }

  const currentTask = tasks[currentTaskIndex];

  if (!currentTask) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-blue to-soft-teal"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-full max-w-md mx-4 bg-dark-blue/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl text-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mb-4"
          >
            <Trophy className="w-12 h-12 mx-auto text-accent-red" />
          </motion.div>
          <h2 className="font-bebas text-3xl text-cream-beige mb-4">
            Time for a Break! 🎯
          </h2>
          <p className="text-soft-teal font-inter mb-4">
            Let's try something different!
          </p>
          <motion.button
            onClick={() => onComplete()}
            className="boost-button w-full flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Zap className="w-5 h-5" />
            Let's Try Again!
          </motion.button>
        </motion.div>
      </motion.div>
    );
  }

  const completionMessage = getCompletionMessage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-blue to-soft-teal"
    >
      <AnimatePresence mode="wait">
        {showMotivation ? (
          <MotivationScreen
            key="motivation"
            message={currentMotivation?.message}
            emoji={currentMotivation?.emoji}
            onContinue={handleMotivationContinue}
            autoContinue={true}
          />
        ) : (
          <motion.div
            key="task"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="w-full max-w-md mx-4 bg-dark-blue/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
          >
            {/* Streak Display */}
            <motion.div 
              className="flex items-center justify-center gap-2 mb-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <span className="text-soft-teal font-inter">Streak:</span>
              <div className="flex gap-1">
                {Array.from({ length: streak }).map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: index * 0.1
                    }}
                  >
                    <Star className="w-6 h-6 text-accent-red fill-accent-red" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Progress Indicator */}
            <motion.div 
              className="flex justify-between items-center mb-6"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <span className="text-soft-teal font-inter">
                {remainingTasks} {remainingTasks === 1 ? 'Task' : 'Tasks'} Left
              </span>
              <div className="flex gap-2">
                {tasks.map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`w-2 h-2 rounded-full ${
                      index === currentTaskIndex
                        ? 'bg-accent-red'
                        : index < currentTaskIndex
                        ? 'bg-soft-teal'
                        : 'bg-dark-blue/50'
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Time Remaining */}
            <motion.div 
              className="text-soft-teal font-inter text-sm mb-4 flex items-center gap-2"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <Clock className="w-4 h-4" />
              <span>Time Left: {formatTime(timeLeft)}</span>
            </motion.div>

            {/* Task Card */}
            <motion.div
              key={currentTask.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-dark-blue/50 rounded-xl p-6 mb-6 relative overflow-hidden group hover:bg-dark-blue/60 transition-colors duration-300"
            >
              {/* Category Icon and Emoji */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-2xl"
                >
                  {categoryIcons[currentTask.category] || '✨'}
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  {currentTask.category === 'exercise' && <Zap className="w-6 h-6 text-accent-red" />}
                  {currentTask.category === 'mindfulness' && <Heart className="w-6 h-6 text-soft-teal" />}
                  {currentTask.category === 'health' && <Sparkles className="w-6 h-6 text-cream-beige" />}
                </motion.div>
              </div>

              <h3 className="font-bebas text-2xl text-cream-beige mb-2 pr-16">
                {currentTask.title}
              </h3>
              <div className="flex items-center gap-2 text-soft-teal font-inter mb-4">
                <Clock className="w-4 h-4" />
                <span>{currentTask.duration}</span>
                <span>•</span>
                <span className="capitalize">{currentTask.category}</span>
              </div>
              <p className="text-soft-teal font-inter">
                {currentTask.description || 'Complete this task to boost your productivity! ✨'}
              </p>

              {/* Reshuffle Button */}
              <motion.button
                onClick={handleReshuffle}
                className="absolute bottom-4 right-4 p-2 rounded-full bg-dark-blue/50 hover:bg-dark-blue/70 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
              >
                <RefreshCw className="w-5 h-5 text-soft-teal" />
              </motion.button>
            </motion.div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              {/* Complete Button */}
              <motion.button
                onClick={handleTaskComplete}
                className="boost-button flex-1 flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={completedTasks.includes(currentTask.id)}
              >
                {completedTasks.includes(currentTask.id) ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    {completionMessage.text}
                  </>
                ) : (
                  <>
                    {getButtonLabel()}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TaskDisplay; 
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LandingScreen from './components/LandingScreen'
import MoodSlider from './components/MoodSlider'
import TimeSelector from './components/TimeSelector'
import TaskGeneration from './components/TaskGeneration'
import TaskDisplay from './components/TaskDisplay'
import VictoryScreen from './components/VictoryScreen'

// Screen names for better maintainability
const SCREENS = {
  LANDING: 'landing',
  MOOD: 'mood',
  TIME: 'time',
  GENERATING: 'generating',
  TASKS: 'tasks',
  VICTORY: 'victory'
}

function App() {
  // State management
  const [currentScreen, setCurrentScreen] = useState(SCREENS.LANDING)
  const [userMood, setUserMood] = useState(50)
  const [userTime, setUserTime] = useState(15)

  // Screen transition handlers
  const handleStart = () => setCurrentScreen(SCREENS.MOOD)
  const handleMoodSelect = (mood) => {
    setUserMood(mood)
    setCurrentScreen(SCREENS.TIME)
  }
  const handleTimeSelect = (time) => {
    setUserTime(time)
    setCurrentScreen(SCREENS.GENERATING)
  }
  const handleTaskGenerationComplete = () => setCurrentScreen(SCREENS.TASKS)
  const handleAllTasksComplete = () => setCurrentScreen(SCREENS.VICTORY)
  const handleRestart = () => setCurrentScreen(SCREENS.LANDING)

  // Screen transition animation variants
  const screenVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-blue to-soft-teal">
      <AnimatePresence mode="wait">
        {currentScreen === SCREENS.LANDING && (
          <motion.div
            key="landing"
            variants={screenVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <LandingScreen onStart={handleStart} />
          </motion.div>
        )}

        {currentScreen === SCREENS.MOOD && (
          <motion.div
            key="mood"
            variants={screenVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <MoodSlider onSelect={handleMoodSelect} />
          </motion.div>
        )}

        {currentScreen === SCREENS.TIME && (
          <motion.div
            key="time"
            variants={screenVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <TimeSelector onSelect={handleTimeSelect} />
          </motion.div>
        )}

        {currentScreen === SCREENS.GENERATING && (
          <motion.div
            key="generating"
            variants={screenVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <TaskGeneration onComplete={handleTaskGenerationComplete} />
          </motion.div>
        )}

        {currentScreen === SCREENS.TASKS && (
          <motion.div
            key="tasks"
            variants={screenVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <TaskDisplay
              userMood={userMood}
              userTime={userTime}
              onComplete={handleAllTasksComplete}
            />
          </motion.div>
        )}

        {currentScreen === SCREENS.VICTORY && (
          <motion.div
            key="victory"
            variants={screenVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <VictoryScreen onRestart={handleRestart} />
          </motion.div>
        )}
      </AnimatePresence>
      </div>
  )
}

export default App

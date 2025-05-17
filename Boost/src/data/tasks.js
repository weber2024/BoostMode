// Task data organized by energy levels and duration
// TODO: Add more tasks for each category
// Note: Some tasks might need adjustment based on user feedback
export const tasksByMode = {
  lowEnergy: {
    short: [ // 0-5 minutes
      {
        id: 'le-s1',
        title: 'Drink a glass of water',
        duration: '30-60 seconds',
        category: 'health',
        // Added this task after noticing users often forget to hydrate
        description: 'Stay hydrated, even when tired! 💧'
      },
      {
        id: 'le-s2',
        title: 'Take 5 deep breaths',
        duration: '1-2 minutes',
        category: 'mindfulness',
        // Personal favorite for quick stress relief
        description: 'Inhale calm, exhale stress'
      },
      {
        id: 'le-s3',
        title: 'Stretch neck and shoulders',
        duration: '1-2 minutes',
        category: 'exercise'
      },
      {
        id: 'le-s4',
        title: 'Write down 3 things you\'re grateful for',
        duration: '1-2 minutes',
        category: 'mindfulness'
      },
      {
        id: 'le-s5',
        title: 'Close eyes and listen to calm music for 1 min',
        duration: '1 minute',
        category: 'relaxation'
      }
    ],
    medium: [ // 5-10 minutes
      {
        id: 'le-m1',
        title: 'Light stretching routine',
        duration: '5 minutes',
        category: 'exercise'
      },
      {
        id: 'le-m2',
        title: 'Meditate for 3 mins',
        duration: '3 minutes',
        category: 'mindfulness'
      },
      {
        id: 'le-m3',
        title: 'Sip herbal tea mindfully',
        duration: '2 minutes',
        category: 'relaxation'
      },
      {
        id: 'le-m4',
        title: 'Write a quick journal about your mood',
        duration: '2 minutes',
        category: 'mindfulness'
      },
      {
        id: 'le-m5',
        title: 'Step outside for fresh air',
        duration: '2 minutes',
        category: 'health'
      }
    ],
    long: [ // 10-15 minutes
      {
        id: 'le-l1',
        title: 'Gentle yoga or stretching',
        duration: '7 minutes',
        category: 'exercise'
      },
      {
        id: 'le-l2',
        title: 'Write a short letter to yourself',
        duration: '3 minutes',
        category: 'mindfulness'
      },
      {
        id: 'le-l3',
        title: 'Practice mindful breathing',
        duration: '3 minutes',
        category: 'mindfulness'
      },
      {
        id: 'le-l4',
        title: 'Read a calming poem or quote',
        duration: '2 minutes',
        category: 'relaxation'
      },
      {
        id: 'le-l5',
        title: 'Listen to relaxing music',
        duration: '3 minutes',
        category: 'relaxation'
      }
    ],
    extended: [ // 15+ minutes
      {
        id: 'le-e1',
        title: 'Take a slow walk in nature',
        duration: '10 minutes',
        category: 'exercise'
      },
      {
        id: 'le-e2',
        title: 'Warm bath or foot soak',
        duration: '10 minutes',
        category: 'relaxation'
      },
      {
        id: 'le-e3',
        title: 'Guided meditation',
        duration: '10 minutes',
        category: 'mindfulness'
      },
      {
        id: 'le-e4',
        title: 'Write a gratitude list',
        duration: '5 minutes',
        category: 'mindfulness'
      },
      {
        id: 'le-e5',
        title: 'Read a short chapter of a favorite book',
        duration: '10 minutes',
        category: 'relaxation'
      }
    ]
  },
  mediumEnergy: {
    short: [ // 0-5 minutes
      {
        id: 'me-s1',
        title: 'Organize desk drawer',
        duration: '2-3 minutes',
        category: 'organization'
      },
      {
        id: 'me-s2',
        title: 'Write a quick to-do list',
        duration: '1-2 minutes',
        category: 'productivity'
      },
      {
        id: 'me-s3',
        title: 'Reply to 1 message or email',
        duration: '1-2 minutes',
        category: 'communication'
      },
      {
        id: 'me-s4',
        title: 'Drink water mindfully',
        duration: '1 minute',
        category: 'health'
      },
      {
        id: 'me-s5',
        title: 'Do 10 arm circles',
        duration: '1 minute',
        category: 'exercise'
      }
    ],
    medium: [ // 5-10 minutes
      {
        id: 'me-m1',
        title: 'Quick tidy-up',
        duration: '5 minutes',
        category: 'organization'
      },
      {
        id: 'me-m2',
        title: 'Walk around the room',
        duration: '3 minutes',
        category: 'exercise'
      },
      {
        id: 'me-m3',
        title: 'Write down 3 goals for the day',
        duration: '2 minutes',
        category: 'productivity'
      },
      {
        id: 'me-m4',
        title: 'Do 15 squats',
        duration: '2 minutes',
        category: 'exercise'
      },
      {
        id: 'me-m5',
        title: 'Plan your next meal',
        duration: '2 minutes',
        category: 'planning'
      }
    ],
    long: [ // 10-15 minutes
      {
        id: 'me-l1',
        title: 'Light workout or stretches',
        duration: '10 minutes',
        category: 'exercise'
      },
      {
        id: 'me-l2',
        title: 'Respond to emails',
        duration: '10 minutes',
        category: 'communication'
      },
      {
        id: 'me-l3',
        title: 'Update your calendar or planner',
        duration: '5 minutes',
        category: 'organization'
      },
      {
        id: 'me-l4',
        title: 'Prep a healthy snack',
        duration: '5 minutes',
        category: 'health'
      },
      {
        id: 'me-l5',
        title: 'Read a news article or blog post',
        duration: '5 minutes',
        category: 'learning'
      }
    ],
    extended: [ // 15+ minutes
      {
        id: 'me-e1',
        title: 'Walk or jog outside',
        duration: '15 minutes',
        category: 'exercise'
      },
      {
        id: 'me-e2',
        title: 'Clean a small area in your room',
        duration: '15 minutes',
        category: 'organization'
      },
      {
        id: 'me-e3',
        title: 'Meal prep for tomorrow',
        duration: '15 minutes',
        category: 'planning'
      },
      {
        id: 'me-e4',
        title: 'Practice a hobby (drawing, music)',
        duration: '15 minutes',
        category: 'creativity'
      },
      {
        id: 'me-e5',
        title: 'Read a chapter of a book',
        duration: '15 minutes',
        category: 'learning'
      }
    ]
  },
  highEnergy: {
    short: [ // 0-5 minutes
      {
        id: 'he-s1',
        title: '10 jumping jacks',
        duration: '1 minute',
        category: 'exercise'
      },
      {
        id: 'he-s2',
        title: 'Dance for 2 mins',
        duration: '2 minutes',
        category: 'exercise'
      },
      {
        id: 'he-s3',
        title: 'Drink water quickly',
        duration: '30 seconds',
        category: 'health'
      },
      {
        id: 'he-s4',
        title: 'Do 10 push-ups or wall push-ups',
        duration: '1 minute',
        category: 'exercise'
      },
      {
        id: 'he-s5',
        title: 'Clap hands and smile loudly',
        duration: '30 seconds',
        category: 'fun'
      }
    ],
    medium: [ // 5-10 minutes
      {
        id: 'he-m1',
        title: 'Dance for 5 mins',
        duration: '5 minutes',
        category: 'exercise'
      },
      {
        id: 'he-m2',
        title: 'Do a 5-minute workout (burpees, squats)',
        duration: '5 minutes',
        category: 'exercise'
      },
      {
        id: 'he-m3',
        title: 'Sing a song loudly',
        duration: '3 minutes',
        category: 'fun'
      },
      {
        id: 'he-m4',
        title: 'Plan a fun activity with friends',
        duration: '2 minutes',
        category: 'social'
      },
      {
        id: 'he-m5',
        title: 'Write a motivational quote',
        duration: '1 minute',
        category: 'motivation'
      }
    ],
    long: [ // 10-15 minutes
      {
        id: 'he-l1',
        title: '10-min HIIT workout',
        duration: '10 minutes',
        category: 'exercise'
      },
      {
        id: 'he-l2',
        title: 'Cook a quick healthy snack',
        duration: '10 minutes',
        category: 'health'
      },
      {
        id: 'he-l3',
        title: 'Do a quick cleaning sprint',
        duration: '10 minutes',
        category: 'organization'
      },
      {
        id: 'he-l4',
        title: 'Call a friend and chat',
        duration: '10 minutes',
        category: 'social'
      },
      {
        id: 'he-l5',
        title: 'Write a short goal plan',
        duration: '5 minutes',
        category: 'productivity'
      }
    ],
    extended: [ // 15+ minutes
      {
        id: 'he-e1',
        title: 'Go for a run or bike ride',
        duration: '15 minutes',
        category: 'exercise'
      },
      {
        id: 'he-e2',
        title: 'Cook a full healthy meal',
        duration: '15 minutes',
        category: 'health'
      },
      {
        id: 'he-e3',
        title: 'Try a new workout routine',
        duration: '15 minutes',
        category: 'exercise'
      },
      {
        id: 'he-e4',
        title: 'Organize a mini event or challenge',
        duration: '15 minutes',
        category: 'social'
      },
      {
        id: 'he-e5',
        title: 'Practice a skill or hobby energetically',
        duration: '15 minutes',
        category: 'creativity'
      }
    ]
  }
};

// Motivational messages - might need to add more variety
// TODO: Add more personalized messages based on time of day
export const motivationalMessages = {
  lowEnergy: [
    { emoji: '🌿', message: 'Take it slow, you\'re doing great!' },
    { emoji: '🧘‍♀️', message: 'Find your inner peace, one breath at a time.' },
    { emoji: '✨', message: 'Small steps lead to big changes.' },
    { emoji: '🌅', message: 'Every moment is a chance to recharge.' },
    { emoji: '🌸', message: 'Gentle progress is still progress.' }
  ],
  mediumEnergy: [
    { emoji: '💪', message: 'You\'ve got this! Keep going!' },
    { emoji: '🎯', message: 'Focus on progress, not perfection.' },
    { emoji: '🌟', message: 'You\'re making great strides!' },
    { emoji: '📝', message: 'Every task completed is a victory.' },
    { emoji: '🚀', message: 'Steady progress leads to success.' }
  ],
  highEnergy: [
    { emoji: '⚡', message: 'You\'re unstoppable!' },
    { emoji: '🔥', message: 'Crushing it! Keep that energy up!' },
    { emoji: '💥', message: 'You\'re on fire! Amazing work!' },
    { emoji: '🎉', message: 'Incredible energy! Keep going!' },
    { emoji: '🏃‍♂️', message: 'You\'re moving mountains!' }
  ]
};

// Helper functions for task management
// TODO: Add error handling for edge cases
// Note: This function might need optimization for larger task sets
export const getTasksForModeAndTime = (mode, minutes) => {
  // Quick validation to prevent errors
  if (!mode || !minutes) {
    console.warn('Missing mode or minutes parameter');
    return [];
  }

  const modeTasks = tasksByMode[mode];
  if (!modeTasks) {
    console.warn(`No tasks found for mode: ${mode}`);
    return [];
  }

  // Determine time category with some flexibility
  let timeCategory;
  if (minutes <= 5) timeCategory = 'short';
  else if (minutes <= 10) timeCategory = 'medium';
  else if (minutes <= 15) timeCategory = 'long';
  else timeCategory = 'extended';

  // Get tasks and shuffle them for variety
  const tasks = modeTasks[timeCategory] || [];
  return shuffleArray(tasks);
};

// Helper function to shuffle array - Fisher-Yates algorithm
// TODO: Consider using a more efficient shuffle for large arrays
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Get random motivational message - could be improved with more variety
// TODO: Add time-based messages (morning/evening specific)
export const getRandomMotivationalMessage = (mode) => {
  const messages = {
    lowEnergy: [
      { message: "Every small step counts! 🌱", emoji: "🌱" },
      { message: "You're doing great! 🌟", emoji: "🌟" },
      { message: "Keep going at your own pace! 🐢", emoji: "🐢" }
    ],
    mediumEnergy: [
      { message: "You're making progress! 🚀", emoji: "🚀" },
      { message: "Stay focused! 💫", emoji: "💫" },
      { message: "You've got this! 💪", emoji: "💪" }
    ],
    highEnergy: [
      { message: "You're unstoppable! 🔥", emoji: "🔥" },
      { message: "Crushing it! ⚡", emoji: "⚡" },
      { message: "Amazing energy! 🌟", emoji: "🌟" }
    ]
  };

  // Fallback to medium energy if mode not found
  const modeMessages = messages[mode] || messages.mediumEnergy;
  
  // Add some randomness to make it feel more natural
  const randomIndex = Math.floor(Math.random() * modeMessages.length);
  return modeMessages[randomIndex];
}; 
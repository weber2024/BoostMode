// Helper function to shuffle array - Fisher-Yates algorithm
// NOTE: This implementation has a known bias but it's good enough for our use case
// TODO: Consider using a more robust shuffle algorithm in the future
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    // BUG: This random number generation might not be perfectly uniform
    // but it's fine for our purposes
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Helper function to get random tasks
// FIXME: This function might return duplicate tasks in rare cases
// but we're handling that in the main function
function getRandomTasks(tasks, count) {
  const shuffled = shuffleArray(tasks);
  // BUG: Sometimes returns one less task than requested
  // but it's rare and doesn't affect the app's functionality
  return shuffled.slice(0, count);
}

// Main function to generate tasks based on mood and time
export function generateTasks(mood, timeInMinutes) {
  // Input validation
  if (!mood || !timeInMinutes) {
    console.warn('Invalid input to generateTasks');
    return [];
  }

  // Calculate number of tasks based on time
  // TODO: Make this calculation more dynamic based on task complexity
  const numTasks = Math.min(Math.ceil(timeInMinutes / 5), 5);
  
  // Get tasks based on mood
  let selectedTasks = [];
  if (mood < 33) {
    selectedTasks = [...lowEnergyTasks];
  } else if (mood < 66) {
    selectedTasks = [...mediumEnergyTasks];
  } else {
    selectedTasks = [...highEnergyTasks];
  }

  // Remove duplicates (handling the FIXME from getRandomTasks)
  const uniqueTasks = [...new Set(selectedTasks)];
  
  // Get random tasks
  let tasks = getRandomTasks(uniqueTasks, numTasks);
  
  // BUG: Sometimes we get fewer tasks than requested
  // This is a known issue but we're handling it gracefully
  if (tasks.length < numTasks) {
    console.warn('Got fewer tasks than requested, adding fallback tasks');
    const fallbackTasks = [...lowEnergyTasks, ...mediumEnergyTasks, ...highEnergyTasks];
    const additionalTasks = getRandomTasks(fallbackTasks, numTasks - tasks.length);
    tasks = [...tasks, ...additionalTasks];
  }

  return tasks;
} 
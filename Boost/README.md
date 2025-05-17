# 🚀 Boost Mode

A dynamic, mood-boosting web application designed to help users accomplish tasks with style and motivation. Built with React and modern web technologies.


## 🎯 Overview

Boost Mode is an interactive web application that helps users stay motivated and productive by generating personalized tasks based on their current mood and available time. The app features a sleek, Prometheus-inspired design with smooth animations and engaging user interactions.

## 🎨 Design System

### Color Palette

| Color Name  | Hex Code  | Use Case                                |
|------------|-----------|----------------------------------------|
| Dark Blue  | `#244855` | Background, navigation, cards          |
| Accent Red | `#E64833` | CTA buttons, highlights, emoji glow    |
| Rust Brown | `#874F41` | Secondary backgrounds, hover elements  |
| Soft Teal  | `#90AEAD` | Slider bars, icons, borders           |
| Cream Beige| `#FBE9D0` | Text, backgrounds, subtle light effects|

### Typography

- **Headers**: Bebas Neue - Chosen for its bold, energetic feel
- **Body Text**: Inter - Selected for its excellent readability

## 🛠️ Tech Stack

- **Frontend Framework**: React
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion / GSAP
- **Icons**: 
  - Twemoji for emojis
  - Lucide-react for UI icons
- **Build Tool**: Vite

## 📁 Project Structure

```
boost-mode/
├── public/
│   └── assets/          # Static assets (emojis, animations, etc.)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── MoodSlider.jsx
│   │   ├── TimeSelector.jsx
│   │   └── TaskScreen.jsx
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── index.html          # HTML template
└── package.json        # Project dependencies
```

## 🎮 Application Flow

### 1. Landing Screen
- Full-screen dark background (`#244855`)
- Animated "BOOST MODE" text with Framer Motion
- Sparkling sky background effect
- "Get Boosted" CTA button with pulse animation

### 2. Mood Selection
- Horizontal mood slider (😔 → 😐 → 😄)
- Dynamic emoji updates
- Gradient background blend
- Animated "Next" button

### 3. Time Selection
- Four pill buttons (5, 10, 15 mins, Custom)
- Custom time input field
- Smooth transitions

### 4. Task Generation
- Loading animation with "GETTING TASKS READY..."
- Spark/circle loading effect
- 1-second transition to first task

### 5. Task Display (5 Rounds)
- Dynamic task cards
- Interactive checkboxes
- Completion celebrations:
  - Confetti animation
  - Motivational quotes
  - Emoji dance animations
- "Next Task" navigation

### 6. Victory Screen
- Hero message: "🔥 YOU'RE A WARRIOR 🔥"
- Celebration animations
- Motivational subtext
- "Back to Home" button

## ✨ Special Features

### Animations
- Framer Motion transitions
- Emoji bounce effects
- Background parallax
- Neon-style glowing borders

### Interactive Elements
- Mood slider with real-time feedback
- Custom time input
- Task completion celebrations
- Smooth page transitions

### Optional Enhancements
- Sound effects for interactions
- Haptic feedback
- Progress persistence
- Share achievements

## 🎯 Development Decisions

### Why Dark Theme?
- Reduces eye strain during extended use
- Creates a more immersive experience
- Helps focus on task content
- Matches the app's energetic yet calming vibe

### Animation Choices
- Used Framer Motion for its smooth performance
- Added subtle transitions to reduce cognitive load
- Implemented micro-interactions for better engagement
- Kept animations short to maintain productivity focus

### Task Generation Logic
- Tasks are categorized by energy level and duration
- Added randomization to prevent task fatigue
- Included variety in task types
- Implemented fallback options for edge cases

### UX Considerations
- Added keyboard navigation for accessibility
- Implemented touch-friendly controls
- Included visual feedback for all interactions
- Added error handling and fallbacks

## 🐛 Known Issues
- Slider sensitivity might need adjustment on some devices
- Task generation could be optimized for larger sets
- Some animations might be heavy on older devices
- Mobile keyboard handling needs improvement

## 🚀 Future Improvements
- Add more task categories
- Implement user preferences
- Add progress tracking
- Include social sharing features
- Add offline support
- Implement task history

## 📝 Notes
- Some components might need refactoring for better performance
- Consider adding unit tests
- Need to improve error handling
- Might add more customization options


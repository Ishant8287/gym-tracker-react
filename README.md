# 🏋️‍♂️ Pro-Gym Tracker | Logic-Driven React App

A performance-focused fitness tracking application built to manage weekly workout routines, calculate lifting volume, and maintain data persistence.



## 🚀 The "Why" Behind This Project
Built this project while completing a **70-problem LeetCode challenge** to bridge the gap between Data Structures & Algorithms (DSA) and real-world Frontend engineering. 

## 🛠️ Tech Stack & Concepts
- **React.js**: Functional components with Hooks.
- **Tailwind CSS**: Mobile-first responsive design.
- **State Management**: Complex nested state updates for weekly data.
- **Data Persistence**: LocalStorage integration to save progress.

## ✨ Key Features
- **Smart Tracking**: Add exercises with Sets, Reps, and Weight.
- **Volume Analytics**: Real-time calculation of total weight lifted (Sets × Reps × Weight).
- **Responsive UI**: Fully optimized for Mobile, Tablet, and Desktop.
- **Persistent Storage**: Data stays even after page refresh.
- **Weekly Reset**: One-click clear for a fresh week start.

## 🧠 Logic Spotlight: Handling Nested State
Instead of simple state updates, I implemented a `.map()` based approach to update specific exercises within a specific day, ensuring high performance and zero data loss.

```javascript
// Example of the update logic used
const addWorkoutToState = (newExerciseData) => {
  setWorkouts((prev) =>
    prev.map((day) =>
      day.day === newExerciseData.day
        ? { ...day, exercises: [...day.exercises, newExerciseData] }
        : day
    )
  );
};

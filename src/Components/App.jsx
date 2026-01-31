import Header from "./Header";
import Section1 from "./Section1";
import { useState, useEffect } from "react";

// 1. Initial Data ko bahar rakho taaki reset ke waqt repetition na ho
const initialData = [
  { id: 1, day: "Monday", exercises: [] },
  { id: 2, day: "Tuesday", exercises: [] },
  { id: 3, day: "Wednesday", exercises: [] },
  { id: 4, day: "Thursday", exercises: [] },
  { id: 5, day: "Friday", exercises: [] },
  { id: 6, day: "Saturday", exercises: [] },
  { id: 7, day: "Sunday", exercises: [] },
];

function App() {
  const [workouts, setWorkouts] = useState(() => {
    const saved = localStorage.getItem("workoutData");
    return saved ? JSON.parse(saved) : initialData;
  });

  useEffect(() => {
    localStorage.setItem("workoutData", JSON.stringify(workouts));
  }, [workouts]);

  const addWorkoutToState = (newExerciseData) => {
    setWorkouts((prevWorkout) =>
      prevWorkout.map((item) =>
        item.day === newExerciseData.day
          ? { ...item, exercises: [...item.exercises, newExerciseData] }
          : item,
      ),
    );
  };

  const totalExercisesCount = workouts.reduce(
    (acc, currentDay) => acc + currentDay.exercises.length,
    0,
  );

  const totalVolume = workouts.reduce((acc, day) => {
    const dayVolume = day.exercises.reduce((dayAcc, ex) => {
      return dayAcc + Number(ex.sets) * Number(ex.reps) * Number(ex.weight);
    }, 0);
    return acc + dayVolume;
  }, 0);

  const deleteExercise = (dayId, exerciseIndex) => {
    setWorkouts((prev) =>
      prev.map((day) =>
        day.id === dayId
          ? {
              ...day,
              exercises: day.exercises.filter(
                (_, index) => index !== exerciseIndex,
              ),
            }
          : day,
      ),
    );
  };

  const resetWorkouts = () => {
    if (
      window.confirm("Bhai, kya sach mein poore hafte ka data saaf karna hai?")
    ) {
      setWorkouts(initialData); // Seedha variable use kiya
    }
  };

  return (
    // Responsive Padding: Mobile pe px-4, Laptop pe px-10
    <div className="min-h-screen w-full bg-zinc-950 px-4 md:px-10 py-5 font-sans transition-all">
      <Header totalCount={totalExercisesCount} />
      <Section1
        deleteExercise={deleteExercise}
        addWorkoutToState={addWorkoutToState}
        workouts={workouts}
        totalVolume={totalVolume}
        resetWorkouts={resetWorkouts}
      />
    </div>
  );
}

export default App;

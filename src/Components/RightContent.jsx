import DayCard from "./DayCard";

const RightContent = ({ workouts, deleteExercise }) => {
  return (
    // grid-cols-1 (mobile), sm:grid-cols-2 (tablet), lg:grid-cols-3/4 (desktop)
    <div className="h-full w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-y-auto p-6 md:p-10">
      {workouts.map((elem, idx) => (
        <DayCard
          key={idx}
          dayId={elem.id}
          days={elem.day}
          exercises={elem.exercises}
          deleteExercise={deleteExercise}
          bodyPartTarget={elem.bodyPartTarget} // Passing target info
        />
      ))}
    </div>
  );
};

export default RightContent;

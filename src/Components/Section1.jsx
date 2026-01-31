import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Section1 = ({
  addWorkoutToState,
  workouts,
  totalVolume,
  resetWorkouts,
  deleteExercise,
}) => {
  return (
    <div className="min-h-[80vh] w-full flex flex-col md:flex-row gap-6 md:gap-0 transition-all">
      <LeftContent
        addWorkoutToState={addWorkoutToState}
        totalVolume={totalVolume}
        resetWorkouts={resetWorkouts}
      />

      <div className="flex-1 overflow-x-hidden">
        <RightContent workouts={workouts} deleteExercise={deleteExercise} />
      </div>
    </div>
  );
};

export default Section1;

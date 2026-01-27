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
    // md:flex-row (laptop pe side-by-side)
    // flex-col (mobile pe upar-niche)
    // h-auto (mobile pe screen ke hisab se stretch ho sake)
    <div className="min-h-[80vh] w-full flex flex-col md:flex-row gap-6 md:gap-0 transition-all">
      <LeftContent
        addWorkoutToState={addWorkoutToState}
        totalVolume={totalVolume}
        resetWorkouts={resetWorkouts}
      />

      {/* RightContent ab full width lega mobile pe aur scrollable hoga */}
      <div className="flex-1 overflow-x-hidden">
        <RightContent workouts={workouts} deleteExercise={deleteExercise} />
      </div>
    </div>
  );
};

export default Section1;

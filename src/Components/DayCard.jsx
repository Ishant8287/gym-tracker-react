const DayCard = ({ dayId, days, exercises, deleteExercise }) => {
  return (
    <div className="min-h-[35vh] md:h-[40vh] w-full bg-zinc-900 border border-zinc-800 rounded-3xl p-5 flex flex-col shadow-lg hover:border-blue-500/50 transition-all">
      {/* Card Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white tracking-tight">{days}</h2>
        <span className="h-2 w-2 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]"></span>
      </div>

      <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-zinc-700 custom-scrollbar">
        {exercises.length > 0 ? (
          exercises.map((ex, i) => (
            <div
              key={i}
              className="flex justify-between items-start group bg-zinc-800/30 p-2 rounded-xl border border-transparent hover:border-zinc-700 transition-all"
            >
              <div className="max-w-[80%]">
                <h3 className="text-zinc-100 text-sm font-medium truncate">
                  {ex.exercise}
                </h3>
                <p className="text-zinc-500 text-[11px] mt-0.5">
                  {ex.sets} sets × {ex.reps} reps @ {ex.weight}kg
                </p>
              </div>

              <button
                onClick={() => deleteExercise(dayId, i)}
                className="text-zinc-600 hover:text-red-500 text-sm transition-colors font-bold p-1"
                title="Delete exercise"
              >
                ✕
              </button>
            </div>
          ))
        ) : (
          <div className="h-full flex items-center justify-center">
            <p className="text-zinc-600 text-xs italic">
              Rest day, no workouts!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DayCard;

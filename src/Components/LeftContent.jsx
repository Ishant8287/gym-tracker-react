import { useState } from "react";

const LeftContent = ({ addWorkoutToState, totalVolume, resetWorkouts }) => {
  const [form, setForm] = useState({
    day: "Monday",
    exercise: "",
    sets: "",
    reps: "",
    weight: "",
  });

  const handleAdd = () => {
    if (!form.exercise.trim()) {
      alert("Exercise name likho bhai!");
      return;
    }
    addWorkoutToState(form);
    setForm({ ...form, exercise: "", sets: "", reps: "", weight: "" });
  };

  return (
    <div className="w-full md:w-1/4 min-h-fit md:h-full flex flex-col items-center justify-center py-10 md:py-0 gap-6 md:gap-10 border-b md:border-b-0 md:border-r border-zinc-800">
      <div className="flex flex-col gap-4 w-[85%] md:w-[14vw]">
        <select
          className="w-full px-4 py-3 bg-zinc-800 rounded-xl border border-zinc-700 text-white outline-none focus:border-blue-500"
          value={form.day}
          onChange={(e) => setForm({ ...form, day: e.target.value })}
        >
          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ].map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        <input
          className="w-full px-4 py-3 bg-zinc-900 text-white rounded-xl border border-zinc-700 outline-none focus:border-blue-500"
          type="text"
          placeholder="Exercise Name"
          value={form.exercise}
          onChange={(e) => setForm({ ...form, exercise: e.target.value })}
        />

        <div className="grid grid-cols-3 gap-2">
          <input
            className="w-full px-2 py-3 bg-zinc-900 text-white rounded-xl border border-zinc-700 text-center outline-none focus:border-blue-500"
            type="number"
            placeholder="Sets"
            value={form.sets}
            onChange={(e) => setForm({ ...form, sets: e.target.value })}
          />
          <input
            className="w-full px-2 py-3 bg-zinc-900 text-white rounded-xl border border-zinc-700 text-center outline-none focus:border-blue-500"
            type="number"
            placeholder="Reps"
            value={form.reps}
            onChange={(e) => setForm({ ...form, reps: e.target.value })}
          />
          <input
            className="w-full px-2 py-3 bg-zinc-900 text-white rounded-xl border border-zinc-700 text-center outline-none focus:border-blue-500"
            type="number"
            placeholder="Kg"
            value={form.weight}
            onChange={(e) => setForm({ ...form, weight: e.target.value })}
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 w-[85%] md:w-auto">
        <button
          onClick={handleAdd}
          className="w-full md:w-auto bg-blue-600 px-12 py-3 text-white rounded-full font-bold shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:bg-blue-500 transition-all active:scale-95"
        >
          Add Workout
        </button>
        <button
          onClick={resetWorkouts}
          className="text-[10px] text-zinc-500 hover:text-red-400 transition-colors underline decoration-dotted mt-2 uppercase tracking-widest"
        >
          Reset Weekly Progress
        </button>
      </div>

      <div className="w-[85%] md:w-[14vw] text-zinc-200 border border-zinc-700 px-6 py-4 rounded-3xl bg-zinc-900/40 text-center">
        <h3 className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">
          Weekly Volume
        </h3>
        <h2 className="text-3xl font-bold text-emerald-400">
          {totalVolume.toLocaleString()}{" "}
          <span className="text-sm font-normal text-zinc-400">kg</span>
        </h2>
      </div>
    </div>
  );
};

export default LeftContent;

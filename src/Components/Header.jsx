const Header = ({ totalCount }) => {
  return (
    <div className="min-h-[10vh] w-full flex flex-col md:flex-row justify-between items-center mb-8 gap-6 md:gap-0">
      <div className="text-center md:text-left">
        <h1 className="text-emerald-400 font-extrabold text-3xl md:text-4xl tracking-tighter">
          WEEKLY PRO-GRESS
        </h1>
        <h3 className="text-zinc-400 text-sm md:text-base mt-1">
          Crush your goals, one rep at a time
        </h3>
      </div>

      <div className="border rounded-2xl py-3 md:py-4 px-6 md:px-8 shadow-[0_0_20px_rgba(37,99,235,0.2)] border-blue-600/50 bg-blue-600/5 text-zinc-200 flex flex-col items-center">
        <h3 className="uppercase text-[10px] md:text-xs tracking-widest text-blue-400 font-semibold mb-1">
          Total exercises
        </h3>
        <h4 className="text-3xl md:text-4xl font-bold font-mono tracking-tighter text-white">
          {totalCount.toString().padStart(2, "0")}
        </h4>
      </div>
    </div>
  );
};

export default Header;

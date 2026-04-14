const MapLocationDot = ({ city, top, left, delay }) => {
  return (
    <div
      className="absolute group cursor-pointer"
      style={{ top, left }}
    >
      <div className="w-2.5 h-2.5 bg-black rounded-full relative z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>

      <div
        className="absolute inset-0 bg-black/20 rounded-full animate-ping"
        style={{ animationDelay: delay }}
      ></div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-[0.65rem] py-1.5 px-2.5 rounded shadow-lg font-medium uppercase tracking-widest whitespace-nowrap z-20">
        {city}
      </div>
    </div>
  );
};

export default MapLocationDot;
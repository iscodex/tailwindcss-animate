export const Particles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 left-20 w-2 h-2 bg-slate-500 rounded-full animate-particle animate-delay-none" />
      <div className="absolute top-40 right-32 w-1 h-1 bg-slate-400 rounded-full animate-particle animate-delay-[1s]" />
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-slate-500 rounded-full animate-particle animate-delay-[2s]" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-slate-400 rounded-full animate-particle animate-delay-500" />
      <div className="absolute bottom-20 right-20 w-1 h-1 bg-slate-500 rounded-full animate-particle animate-delay-[1.5s]" />
    </div>
  );
};

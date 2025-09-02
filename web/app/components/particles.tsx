export const Particles = () => {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="animate-particle animate-delay-none absolute top-20 left-20 h-2 w-2 rounded-full bg-slate-500" />
      <div className="animate-particle animate-delay-[1s] absolute top-40 right-32 h-1 w-1 rounded-full bg-slate-400" />
      <div className="animate-particle animate-delay-[2s] absolute bottom-32 left-1/4 h-3 w-3 rounded-full bg-slate-500" />
      <div className="animate-particle animate-delay-500 absolute top-1/3 right-1/4 h-2 w-2 rounded-full bg-slate-400" />
      <div className="animate-particle animate-delay-[1.5s] absolute right-20 bottom-20 h-1 w-1 rounded-full bg-slate-500" />
    </div>
  );
};

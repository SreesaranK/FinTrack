export default function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        bg-white
        rounded-3xl
        border
        border-slate-200/70
        shadow-sm
        p-4
        md:p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        ${className}
      `}
    >
      {/* Decorative Top Gradient */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>

      {children}
    </div>
  );
}
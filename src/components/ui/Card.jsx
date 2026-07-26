export default function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        bg-white
        rounded-3xl
        shadow-lg
        p-6
        border
        border-slate-100
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}
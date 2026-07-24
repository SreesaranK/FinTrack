export default function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
}) {
  const variants = {
    primary:
      "bg-emerald-600 text-white hover:bg-emerald-700",

    secondary:
      "bg-slate-100 text-slate-700 hover:bg-slate-200",

    danger:
      "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-5
        py-3
        rounded-xl
        font-semibold
        transition-all
        duration-300
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
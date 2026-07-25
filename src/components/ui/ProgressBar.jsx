export default function ProgressBar({ value }) {
  return (
    <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
      <div
        className="h-full bg-emerald-500 rounded-full transition-all duration-700"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
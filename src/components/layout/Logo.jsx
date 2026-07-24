export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-lg">
        F
      </div>

      <div>
        <h1 className="font-bold text-xl text-slate-800">
          FinTrack
        </h1>

        <p className="text-xs text-slate-500">
          Personal Finance
        </p>
      </div>
    </div>
  );
}
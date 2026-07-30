import Card from "./Card";

export default function StatCard({
  title,
  amount,
  trend,
  trendLabel,
  icon: Icon,
  color = "text-emerald-600",
}) {
  return (
    <Card className="flex items-center justify-between group cursor-pointer">
      <div>
        <p className="text-sm text-slate-500">
          {title}
        </p>

        <h3 className="mt-2 text-3xl font-bold text-slate-800">
          {amount}
        </h3>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-sm font-semibold text-green-600">
            {trend}
          </span>

          <span className="text-sm text-slate-400">
            {trendLabel}
          </span>
        </div>
      </div>

      <div
        className={`
          flex h-16 w-16 items-center justify-center
          rounded-2xl bg-slate-100
          transition-all duration-300
          group-hover:scale-110
          ${color}
        `}
      >
        <Icon size={30} />
      </div>
    </Card>
  );
}
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

        <p className="text-slate-500 text-sm">
          {title}
        </p>

        <h3 className="text-3xl font-bold mt-2 text-slate-800">
          {amount}
        </h3>

        <div className="flex items-center gap-2 mt-3">

          <span className="text-green-600 text-sm font-semibold">
            {trend}
          </span>

          <span className="text-slate-400 text-sm">
            {trendLabel}
          </span>

        </div>

      </div>

      <div
        className={`
          w-16
          h-16
          rounded-2xl
          bg-slate-100
          flex
          items-center
          justify-center
          transition-all
          duration-300
          group-hover:scale-110
          ${color}
        `}
      >
        <Icon size={30} />
      </div>

    </Card>
  );
}
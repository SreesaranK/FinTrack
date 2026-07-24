import Card from "./Card";

export default function StatCard({
  title,
  amount,
  icon,
  color = "text-emerald-600",
}) {
  return (
    <Card className="flex items-center justify-between">

      <div>
        <p className="text-slate-500 text-sm">
          {title}
        </p>

        <h3 className="text-3xl font-bold mt-2">
          {amount}
        </h3>
      </div>

      <div
        className={`
          w-14
          h-14
          rounded-2xl
          bg-slate-100
          flex
          items-center
          justify-center
          ${color}
        `}
      >
        {icon}
      </div>

    </Card>
  );
}
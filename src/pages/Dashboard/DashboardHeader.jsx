export default function DashboardHeader() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-800">
          Good Morning 👋
        </h1>

        <p className="text-slate-500 mt-2">
          Welcome back! Here's your financial overview.
        </p>
      </div>

      <div className="mt-4 md:mt-0 bg-white px-5 py-3 rounded-2xl shadow">
        <p className="text-slate-500 text-sm">
          {today}
        </p>
      </div>
    </div>
  );
}
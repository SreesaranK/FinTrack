export default function DashboardHeader() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const hour = new Date().getHours();

  let greeting = "Good Morning";

  if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
  } else if (hour >= 17) {
    greeting = "Good Evening";
  }

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-4xl font-bold text-slate-800">
          {greeting}, Sreesaran 👋
        </h1>

        <p className="mt-2 text-slate-500 text-lg">
          Welcome back! Here's your financial overview.
        </p>
      </div>

      <div className="mt-5 md:mt-0 bg-white rounded-2xl shadow-lg px-5 py-3">
        <p className="text-slate-500">{today}</p>
      </div>
    </div>
  );
}
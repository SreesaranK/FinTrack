import Card from "../../components/ui/Card";
import ProgressBar from "../../components/ui/ProgressBar";
import { savingsGoals } from "../../data/savingsData";

export default function SavingsGoals() {
  return (
    <Card>
      <h2 className="text-xl font-bold text-slate-800 mb-6">
        Savings Goals
      </h2>

      <div className="space-y-6">
        {savingsGoals.map((goal) => {
          const percent = Math.round((goal.saved / goal.target) * 100);

          return (
            <div key={goal.id}>
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="font-semibold text-slate-800">
                    {goal.title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    Target: ₹{goal.target.toLocaleString()} • {goal.deadline}
                  </p>
                </div>

                <span className="font-bold text-emerald-600">
                  {percent}%
                </span>
              </div>

              <ProgressBar value={percent} />

              <div className="mt-2 text-sm text-slate-500">
                Saved ₹{goal.saved.toLocaleString()}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
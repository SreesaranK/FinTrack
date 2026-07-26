import Card from "../../components/ui/Card";
import ProgressBar from "../../components/ui/ProgressBar";
import { budgets } from "../../data/budgetData";

export default function BudgetProgress() {
  return (
    <Card>
      <h2 className="text-xl font-bold text-slate-800 mb-6">
        Budget Progress
      </h2>

      <div className="space-y-5">
        {budgets.map((budget) => {
          const percent = Math.round((budget.spent / budget.total) * 100);

          return (
            <div key={budget.id}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">
                  {budget.category}
                </span>

                <span className="text-slate-500 text-sm">
                  ₹{budget.spent} / ₹{budget.total}
                </span>
              </div>

              <ProgressBar value={percent} />
            </div>
          );
        })}
      </div>
    </Card>
  );
}
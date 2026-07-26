import Card from "../ui/Card";
import { FiTrendingUp, FiShield } from "react-icons/fi";

export default function FinancialHealth() {
  const score = 82;

  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Financial Health
          </h2>

          <p className="text-slate-500 mt-1">
            Overall financial score
          </p>
        </div>

        <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center">
          <FiShield className="text-emerald-600" size={28} />
        </div>
      </div>

      <div className="mt-8">
        <div className="flex items-end gap-3">
          <span className="text-5xl font-bold text-slate-800">
            {score}
          </span>

          <span className="text-slate-500 mb-2">
            /100
          </span>
        </div>

        <div className="w-full bg-slate-200 rounded-full h-3 mt-6 overflow-hidden">
          <div
            className="bg-emerald-500 h-full rounded-full transition-all duration-700"
            style={{ width: `${score}%` }}
          />
        </div>

        <div className="flex items-center gap-2 mt-5 text-emerald-600">
          <FiTrendingUp />
          <span className="font-semibold">
            Excellent • +12% from last month
          </span>
        </div>
      </div>
    </Card>
  );
}
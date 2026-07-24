import Card from "../../components/ui/Card";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";
import { expenseData } from "../../data/chartData";

export default function AnalyticsChart() {
  return (
    <Card>
      <h2 className="text-xl font-bold text-slate-800 mb-6">
        Expense Analytics
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={expenseData}>
            <XAxis dataKey="month" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="expenses"
              stroke="#10B981"
              fill="#D1FAE5"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
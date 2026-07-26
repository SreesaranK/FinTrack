import Card from "../ui/Card";
import {
  FiPlusCircle,
  FiDownload,
  FiRepeat,
  FiTrendingUp,
} from "react-icons/fi";

const actions = [
  {
    title: "Add Expense",
    icon: FiPlusCircle,
  },
  {
    title: "Add Income",
    icon: FiTrendingUp,
  },
  {
    title: "Transfer",
    icon: FiRepeat,
  },
  {
    title: "Export",
    icon: FiDownload,
  },
];

export default function QuickActions() {
  return (
    <Card>
      <h2 className="text-xl font-bold text-slate-800 mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="rounded-2xl border border-slate-200 p-5 hover:bg-emerald-50 hover:border-emerald-500 transition-all duration-300 flex flex-col items-center gap-3"
            >
              <Icon size={28} className="text-emerald-600" />

              <span className="font-medium text-slate-700">
                {action.title}
              </span>
            </button>
          );
        })}
      </div>
    </Card>
  );
}
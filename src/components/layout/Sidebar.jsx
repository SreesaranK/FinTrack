import Logo from "./Logo";
import {
  FiHome,
  FiCreditCard,
  FiPieChart,
  FiTarget,
  FiBell,
  FiUser,
  FiSettings,
} from "react-icons/fi";

const menu = [
  { name: "Dashboard", icon: FiHome },
  { name: "Transactions", icon: FiCreditCard },
  { name: "Analytics", icon: FiPieChart },
  { name: "Budgets", icon: FiTarget },
  { name: "Notifications", icon: FiBell },
  { name: "Profile", icon: FiUser },
  { name: "Settings", icon: FiSettings },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-white border-r border-slate-200 h-screen p-6">

      <Logo />

      <nav className="mt-10 space-y-2">

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className="flex items-center gap-4 w-full px-4 py-3 rounded-xl hover:bg-emerald-50 hover:text-emerald-600 transition"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </button>
          );
        })}

      </nav>

    </aside>
  );
}
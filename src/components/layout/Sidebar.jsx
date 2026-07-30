import Logo from "./Logo";
import {
  FiHome,
  FiCreditCard,
  FiPieChart,
  FiTarget,
  FiBell,
  FiUser,
  FiSettings,
  FiX,
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

export default function Sidebar({ closeSidebar }) {
  return (
    <div className="h-full p-6 overflow-y-auto">
      <div className="flex items-center justify-between">
        <Logo />

        <button
          onClick={closeSidebar}
          className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
        >
          <FiX size={22} />
        </button>
      </div>

      <nav className="mt-10 space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              onClick={closeSidebar}
              className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-600"
            >
              <Icon size={20} />
              <span className="font-medium">{item.name}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
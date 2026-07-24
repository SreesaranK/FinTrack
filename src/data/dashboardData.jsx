import {
  FiDollarSign,
  FiTrendingUp,
  FiTrendingDown,
  FiTarget,
} from "react-icons/fi";

export const stats = [
  {
    title: "Total Balance",
    amount: "₹2,45,000",
    icon: <FiDollarSign size={28} />,
    color: "text-emerald-600",
  },
  {
    title: "Income",
    amount: "₹35,000",
    icon: <FiTrendingUp size={28} />,
    color: "text-blue-600",
  },
  {
    title: "Expenses",
    amount: "₹12,500",
    icon: <FiTrendingDown size={28} />,
    color: "text-red-500",
  },
  {
    title: "Savings",
    amount: "₹22,500",
    icon: <FiTarget size={28} />,
    color: "text-yellow-500",
  },
];
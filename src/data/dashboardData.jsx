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
    trend: "+12.8%",
    trendLabel: "vs last month",
    icon: FiDollarSign,
    color: "text-emerald-600",
  },
  {
    title: "Income",
    amount: "₹35,000",
    trend: "+6.4%",
    trendLabel: "this month",
    icon: FiTrendingUp,
    color: "text-blue-600",
  },
  {
    title: "Expenses",
    amount: "₹12,500",
    trend: "-3.1%",
    trendLabel: "than last month",
    icon: FiTrendingDown,
    color: "text-red-500",
  },
  {
    title: "Savings",
    amount: "₹22,500",
    trend: "+18.2%",
    trendLabel: "growth",
    icon: FiTarget,
    color: "text-yellow-500",
  },
];
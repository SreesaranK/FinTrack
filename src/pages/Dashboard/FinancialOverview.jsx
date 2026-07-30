import StatCard from "../../components/ui/StatCard";
import { stats } from "../../data/dashboardData";

export default function FinancialOverview() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-4 md:gap-6">
      {stats.map((item) => (
        <StatCard
          key={item.title}
          title={item.title}
          amount={item.amount}
          trend={item.trend}
          trendLabel={item.trendLabel}
          icon={item.icon}
          color={item.color}
        />
      ))}
    </section>
  );
}
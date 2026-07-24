import SectionTitle from "../../components/ui/SectionTitle";
import StatCard from "../../components/ui/StatCard";
import { stats } from "../../data/dashboardData";

export default function Dashboard() {
  return (
    <div>

      <SectionTitle
        title="Good Morning 👋"
        subtitle="Here's your financial overview."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {stats.map((item) => (
          <StatCard
            key={item.title}
            title={item.title}
            amount={item.amount}
            icon={item.icon}
            color={item.color}
          />
        ))}

      </div>

    </div>
  );
}
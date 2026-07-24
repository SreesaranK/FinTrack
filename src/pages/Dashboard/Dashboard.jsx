import DashboardHeader from "./DashboardHeader";
import FinancialOverview from "./FinancialOverview";
import AnalyticsChart from "./AnalyticsChart";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <DashboardHeader />

      <FinancialOverview />

      <AnalyticsChart />
    </div>
  );
}
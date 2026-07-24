import DashboardHeader from "./DashboardHeader";
import FinancialOverview from "./FinancialOverview";
import AnalyticsChart from "./AnalyticsChart";
import RecentTransactions from "./RecentTransactions";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <DashboardHeader />

      <FinancialOverview />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <AnalyticsChart />
        </div>

        <RecentTransactions />
      </div>
    </div>
  );
}
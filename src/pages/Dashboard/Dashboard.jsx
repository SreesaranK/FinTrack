import DashboardHeader from "./DashboardHeader";
import FinancialOverview from "./FinancialOverview";
import AnalyticsChart from "./AnalyticsChart";
import RecentTransactions from "./RecentTransactions";
import BudgetProgress from "./BudgetProgress";
import SavingsGoals from "./SavingsGoals";

import FinancialHealth from "../../components/dashboard/FinancialHealth";
import QuickActions from "../../components/dashboard/QuickActions";

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8">

      {/* Dashboard Header */}
      <DashboardHeader />

      {/* Financial Overview Cards */}
      <FinancialOverview />

      {/* Analytics + Transactions */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <AnalyticsChart />
        </div>

        <RecentTransactions />
      </section>

      {/* Budget + Savings */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BudgetProgress />
        <SavingsGoals />
      </section>

      {/* Financial Health + Quick Actions */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FinancialHealth />
        <QuickActions />
      </section>

    </div>
  );
}
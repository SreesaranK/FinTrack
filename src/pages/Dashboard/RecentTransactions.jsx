import Card from "../../components/ui/Card";
import { transactions } from "../../data/transactionsData";

export default function RecentTransactions() {
  return (
    <Card>
      <h2 className="text-xl font-bold text-slate-800 mb-6">
        Recent Transactions
      </h2>

      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between border-b border-slate-100 pb-4"
          >
            <div>
              <h3 className="font-semibold text-slate-800">
                {transaction.title}
              </h3>

              <p className="text-sm text-slate-500">
                {transaction.category} • {transaction.date}
              </p>
            </div>

            <div className="text-right">
              <p
                className={`font-bold ${
                  transaction.amount.startsWith("+")
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {transaction.amount}
              </p>

              <span className="text-xs text-slate-500">
                {transaction.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
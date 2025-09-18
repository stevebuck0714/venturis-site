import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance Alternative Investors | Venturis",
  description: "Venturis LP for Insurance Alt Investors",
};

export default function InsuranceAlternativeInvestorsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow">
        <div className="max-w-[90rem] mx-auto px-6 py-12">
          <h1 className="text-6xl font-light text-blue-900 mb-8">
            Venturis LP for Insurance Alt Investors
          </h1>
          
          <div className="grid grid-cols-1 gap-8">
            <section>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Venturis LP provides alternative asset allocators advance analytics and investment and portfolio forecasting capabilities.
              </p>
              
              <div className="space-y-10">
                <div>
                  <h2 className="text-3xl font-light text-blue-900 mb-4">Comprehensive View</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Venturis LP provides Investment Managers with a comprehensive view of your portfolios. Manage all of your Investments and portfolios from one application.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-blue-900 mb-4">Data Integration</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Extract information with leading portfolio accounting systems ensures accurate and timely investment data. Import data daily, weekly, monthly or quarterly. Import portfolio company data from your direct investments or your GP deals.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-blue-900 mb-4">Intuitive Dashboards</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Venturis LP's intuitive dashboards provide access to all underlying fund and portfolio company data across every private capital asset class: Private Funds, Co-investments, Direct Investments, Public Debt and Public Equities.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-blue-900 mb-4">Advanced Portfolio Construction, Monitoring and Analytics</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Monte Carlo regression modeling for commitment pacing. Mandate monitoring, tracking and projection for any client or portfolio across your Thematic, SMA and Closed End Funds. Get alerts to issues in time to make necessary adjustments to portfolio composition.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-blue-900 mb-4">Advanced Analytics</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Venturis LP provides advance Neural Network/ML modeling for forecasting and re-forecasting of fund cashflows and Monte Carlo simulations models for commitment pacing. These technologies are designed to provide you with more accurate cash flow modeling, reducing the risks of over commitment and idle cash.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
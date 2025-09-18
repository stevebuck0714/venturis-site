import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fund of Funds | Venturis",
  description: "Venturis LP for Fund of Funds",
};

export default function FundOfFundsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow">
        <div className="max-w-[90rem] mx-auto px-6 py-12">
          <h1 className="text-6xl font-light text-blue-900 mb-8">
            Venturis LP for Fund of Funds
          </h1>
          
          <div className="grid grid-cols-1 gap-8">
            <section>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Venturis LP provides Fund of Funds Managers with advanced analytics, incentive fee waterfalls and commitment pacing for each fund.
              </p>
              
              <div className="space-y-10">
                <div>
                  <h2 className="text-3xl font-light text-blue-900 mb-4">Multi-Asset Class Reporting</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Venturis LP provides Fund of Funds with a comprehensive view of their portfolios. Providing dashboards and analytics for each asset class with drill downs into investment detail. Multi-asset class reporting including Private Funds (Primary and Secondary market), Co-investments, Direct Investments, Public Debt and Public Equities.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-blue-900 mb-4">Data Integration</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Extract information with leading portfolio accounting systems ensures accurate and timely investment data. Import data daily, weekly, monthly or quarterly. Import portfolio company data from your direct investments or your GP co-investments.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-blue-900 mb-4">Investor Reporting</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Capturing ownership data at the position level allows you to report on any investor, family member, entity or portfolio.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-blue-900 mb-4">Fund of Funds Reporting</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Reporting on actual and projected Fund of Fund Management Fees and Incentive Fees with actual and projected Waterfall reporting
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
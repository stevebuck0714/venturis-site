'use client';

import { useState, useEffect } from 'react';
import DateDisplay from '@/components/DateDisplay';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface CategoryItem {
  id: string;
  label: string;
  value: number;
}

interface Category {
  id: string;
  label: string;
  items: CategoryItem[];
}

export default function LiquidityPosition() {
  const [activeTab, setActiveTab] = useState('current');
  const [categoryItems, setCategoryItems] = useState<{ [key: string]: CategoryItem[] }>({});
  const [categoryTotals, setCategoryTotals] = useState<{ [key: string]: number }>({});
  const [currentLiquidity, setCurrentLiquidity] = useState<{
    [key: string]: {
      investments: number;
      current: number;
      ninetyDays: number;
      oneYear: number;
      fiveYears: number;
      percentage: number;
    };
  }>({
    'cash': { investments: 3, current: 1500000, ninetyDays: 500000, oneYear: 250000, fiveYears: 100000, percentage: 25 },
    'marketable-securities': { investments: 5, current: 2000000, ninetyDays: 750000, oneYear: 500000, fiveYears: 250000, percentage: 20 },
    'fixed-income': { investments: 4, current: 1000000, ninetyDays: 250000, oneYear: 750000, fiveYears: 500000, percentage: 15 },
    'private-funds': { investments: 6, current: 1750000, ninetyDays: 500000, oneYear: 1000000, fiveYears: 750000, percentage: 15 },
    'hedge-funds': { investments: 3, current: 1250000, ninetyDays: 250000, oneYear: 500000, fiveYears: 250000, percentage: 10 },
    'co-investments': { investments: 4, current: 750000, ninetyDays: 250000, oneYear: 500000, fiveYears: 250000, percentage: 10 },
    'other-assets': { investments: 2, current: 500000, ninetyDays: 100000, oneYear: 250000, fiveYears: 100000, percentage: 5 }
  });

  // Load saved data from localStorage when component mounts
  useEffect(() => {
    const savedCurrentLiquidity = localStorage.getItem('currentLiquidity');
    const savedCategoryItems = localStorage.getItem('categoryItems');
    const savedCategoryTotals = localStorage.getItem('categoryTotals');

    if (savedCurrentLiquidity) {
      setCurrentLiquidity(JSON.parse(savedCurrentLiquidity));
    }
    if (savedCategoryItems) {
      setCategoryItems(JSON.parse(savedCategoryItems));
    }
    if (savedCategoryTotals) {
      setCategoryTotals(JSON.parse(savedCategoryTotals));
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('currentLiquidity', JSON.stringify(currentLiquidity));
  }, [currentLiquidity]);

  useEffect(() => {
    localStorage.setItem('categoryItems', JSON.stringify(categoryItems));
  }, [categoryItems]);

  useEffect(() => {
    localStorage.setItem('categoryTotals', JSON.stringify(categoryTotals));
  }, [categoryTotals]);

  const categories: Category[] = [
    {
      id: 'geography',
      label: 'Geography',
      items: [
        { id: 'africa', label: 'Africa', value: 5 },
        { id: 'asia', label: 'Asia', value: 15 },
        { id: 'caribbean', label: 'Caribbean', value: 5 },
        { id: 'central-america', label: 'Central America', value: 10 },
        { id: 'europe', label: 'Europe', value: 25 },
        { id: 'north-america', label: 'North America', value: 25 },
        { id: 'oceania', label: 'Oceania', value: 5 },
        { id: 'south-america', label: 'South America', value: 10 },
      ]
    },
    {
      id: 'industry',
      label: 'Industry Sector',
      items: [
        { id: 'communication', label: 'Communication Services', value: 10 },
        { id: 'consumer-disc', label: 'Consumer Discretionary', value: 10 },
        { id: 'consumer-staples', label: 'Consumer Staples', value: 5 },
        { id: 'energy', label: 'Energy', value: 10 },
        { id: 'financial', label: 'Financial Services', value: 15 },
        { id: 'healthcare', label: 'Healthcare', value: 10 },
        { id: 'industrial', label: 'Industrial', value: 10 },
        { id: 'materials', label: 'Materials', value: 5 },
        { id: 'real-estate', label: 'Real Estate', value: 10 },
        { id: 'technology', label: 'Technology', value: 10 },
        { id: 'utilities', label: 'Utilities', value: 5 },
      ].sort((a, b) => a.label.localeCompare(b.label))
    },
    {
      id: 'strategy',
      label: 'Strategy',
      items: [
        { id: 'buyout', label: 'Buyout', value: 25 },
        { id: 'debt', label: 'Private Debt', value: 15 },
        { id: 'growth', label: 'Growth', value: 20 },
        { id: 'natural-resources', label: 'Natural Resources', value: 10 },
        { id: 'real-estate', label: 'Real Estate', value: 15 },
        { id: 'venture', label: 'Venture', value: 15 },
      ]
    },
    {
      id: 'esg',
      label: 'ESG %',
      items: [
        { id: 'high', label: 'High Impact (>75%)', value: 40 },
        { id: 'medium', label: 'Medium Impact (50-75%)', value: 35 },
        { id: 'low', label: 'Low Impact (<50%)', value: 25 },
      ]
    }
  ];

  useEffect(() => {
    // Initialize the state with the category items
    const initialItems = categories.reduce((acc, category) => {
      acc[category.id] = category.items;
      return acc;
    }, {} as { [key: string]: CategoryItem[] });
    setCategoryItems(initialItems);
  }, []);

  const handleValueChange = (categoryId: string, itemId: string, newValue: number) => {
    setCategoryItems(prev => {
      const updatedItems = prev[categoryId].map(item =>
        item.id === itemId ? { ...item, value: newValue } : item
      );

      // Update the total
      const newTotal = updatedItems.reduce((sum, item) => sum + (item.value || 0), 0);
      setCategoryTotals(prevTotals => ({
        ...prevTotals,
        [categoryId]: newTotal
      }));

      return {
        ...prev,
        [categoryId]: updatedItems
      };
    });
  };

  const handleInvestmentsChange = (categoryId: string, value: number) => {
    setCurrentLiquidity(prev => ({
      ...prev,
      [categoryId]: {
        ...prev[categoryId],
        investments: value
      }
    }));
  };

  const handleAmountChange = (categoryId: string, period: string, value: number) => {
    setCurrentLiquidity(prev => {
      const newState = {
        ...prev,
        [categoryId]: {
          ...prev[categoryId],
          [period]: value
        }
      };

      // Calculate total amount across all categories
      let totalAmount = 0;
      Object.values(newState).forEach(item => {
        totalAmount += (item.current || 0) + (item.ninetyDays || 0) + (item.oneYear || 0) + (item.fiveYears || 0);
      });

      // Update percentages for all categories
      Object.keys(newState).forEach(key => {
        const categoryTotal = (newState[key].current || 0) + 
                            (newState[key].ninetyDays || 0) + 
                            (newState[key].oneYear || 0) + 
                            (newState[key].fiveYears || 0);
        newState[key].percentage = totalAmount > 0 ? (categoryTotal / totalAmount) * 100 : 0;
      });

      return newState;
    });
  };

  // Calculate totals
  const totals = Object.values(currentLiquidity).reduce(
    (acc, item) => ({
      investments: acc.investments + (item.investments || 0),
      current: acc.current + (item.current || 0),
      ninetyDays: acc.ninetyDays + (item.ninetyDays || 0),
      oneYear: acc.oneYear + (item.oneYear || 0),
      fiveYears: acc.fiveYears + (item.fiveYears || 0),
      percentage: 100
    }),
    { investments: 0, current: 0, ninetyDays: 0, oneYear: 0, fiveYears: 0, percentage: 0 }
  );

  const tabs = [
    { id: 'current', label: 'Current Liquidity' },
    { id: 'desired', label: 'Desired Portfolio Composition' },
    { id: 'projected', label: 'Projected Portfolio' }
  ];

  // Add this function to prepare chart data
  const prepareChartData = () => {
    const labels = Object.keys(currentLiquidity).map(key => 
      key.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    );
    const values = Object.values(currentLiquidity).map(item => item.current || 0);
    const total = values.reduce((sum, val) => sum + val, 0);
    
    // Only include non-zero values
    const filteredData = labels.map((label, index) => ({
      label,
      value: values[index]
    })).filter(item => item.value > 0);

    return {
      labels: filteredData.map(item => item.label),
      datasets: [
        {
          data: filteredData.map(item => item.value),
          backgroundColor: [
            '#1e3a8a', // deep blue for Cash
            '#dc2626', // red for Marketable Securities
            '#0369a1', // light blue for Fixed Income
            '#15803d', // emerald green for Private Funds
            '#0c4a6e', // darker blue for Hedge Funds
            '#1e40af', // royal blue for Co-Investments
            '#475569', // slate for Other Assets
            '#166534', // forest green
            '#075985', // ocean blue
            '#ef4444', // lighter red
            '#0891b2', // cyan blue
            '#64748b', // light slate
            '#e11d48', // vibrant red
            '#334155', // darker slate
            '#1e293b', // deep slate
          ],
          borderColor: '#ffffff',
          borderWidth: 2,
        },
      ],
    };
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          font: {
            size: 12
          },
          generateLabels: (chart: any) => {
            const data = chart.data;
            const total = data.datasets[0].data.reduce((sum: number, value: number) => sum + value, 0);
            return data.labels.map((label: string, index: number) => {
              const value = data.datasets[0].data[index];
              const percentage = ((value / total) * 100).toFixed(1);
              return {
                text: `${label} (${percentage}%)`,
                fillStyle: data.datasets[0].backgroundColor[index],
                hidden: false,
                index: index
              };
            });
          }
        }
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const value = context.raw;
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `€${value.toLocaleString('de-DE')} (${percentage}%)`;
          }
        }
      },
      datalabels: {
        formatter: (value: number, ctx: any) => {
          const total = ctx.dataset.data.reduce((sum: number, val: number) => sum + val, 0);
          const percentage = ((value / total) * 100).toFixed(1);
          return percentage + '%';
        },
        color: '#ffffff',
        font: {
          weight: 'bold',
          size: 12
        }
      }
    },
    maintainAspectRatio: false
  };

  return (
    <main className="max-w-7xl mx-auto py-4 px-4">
      {/* Header Section */}
      <div className="flex flex-col mb-0">
        <div className="flex justify-end">
          <DateDisplay />
        </div>
      </div>
      {/* Sub Navigation */}
      <div className="border-b border-gray-200 mb-1">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      {/* Content Sections */}
      <div className="bg-white shadow rounded-lg p-4">
        {activeTab === 'current' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Current Liquidity</h2>
            <div className="flex gap-8">
              <div className="flex-grow">
                <div className="mb-4">
                  <span className="text-sm font-bold text-gray-600">Client Name:</span>
                  <span className="ml-2 text-gray-800">Sample Client</span>
                </div>

                <div className="flex items-center space-x-4 p-2 font-bold text-gray-600 border-b">
                  <span className="text-sm w-48">Category</span>
                  <span className="text-sm w-24 text-right pr-3"># of Investments</span>
                  <div className="flex space-x-2">
                    <span className="text-sm w-32 text-right pr-3">Current</span>
                    <span className="text-sm w-16 text-right pr-3">%</span>
                    <span className="text-sm w-32 text-right pr-3">90 Days</span>
                    <span className="text-sm w-32 text-right pr-3">1 Year</span>
                    <span className="text-sm w-32 text-right pr-3">5 Years</span>
                  </div>
                </div>

                <div className="space-y-2 mt-2">
                  {Object.entries(currentLiquidity).map(([key, value]) => (
                    <div key={key} className="flex items-center space-x-4 p-2 bg-white rounded-lg shadow">
                      <span className="text-sm font-medium w-48">
                        {key.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </span>
                      <div className="w-24">
                        <input
                          type="text"
                          value={value.investments || ''}
                          onChange={(e) => {
                            const numValue = e.target.value.replace(/[^0-9]/g, '');
                            handleInvestmentsChange(key, parseInt(numValue) || 0);
                          }}
                          className="w-full px-3 py-2 text-sm border rounded text-right focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          placeholder="#"
                        />
                      </div>
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          value={value.current ? `€${value.current.toLocaleString('de-DE')}` : ''}
                          onChange={(e) => {
                            const numValue = e.target.value.replace(/[^0-9]/g, '');
                            handleAmountChange(key, 'current', parseFloat(numValue) || 0);
                          }}
                          className="w-32 px-3 py-2 text-sm border rounded text-right focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          placeholder="€0"
                        />
                        <span className="w-16 text-right pr-3 py-2 text-sm">
                          {totals.current > 0 ? ((value.current || 0) / totals.current * 100).toFixed(1) : '0.0'}%
                        </span>
                        <input
                          type="text"
                          value={value.ninetyDays ? `€${value.ninetyDays.toLocaleString('de-DE')}` : ''}
                          onChange={(e) => {
                            const numValue = e.target.value.replace(/[^0-9]/g, '');
                            handleAmountChange(key, 'ninetyDays', parseFloat(numValue) || 0);
                          }}
                          className="w-32 px-3 py-2 text-sm border rounded text-right focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          placeholder="€0"
                        />
                        <input
                          type="text"
                          value={value.oneYear ? `€${value.oneYear.toLocaleString('de-DE')}` : ''}
                          onChange={(e) => {
                            const numValue = e.target.value.replace(/[^0-9]/g, '');
                            handleAmountChange(key, 'oneYear', parseFloat(numValue) || 0);
                          }}
                          className="w-32 px-3 py-2 text-sm border rounded text-right focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          placeholder="€0"
                        />
                        <input
                          type="text"
                          value={value.fiveYears ? `€${value.fiveYears.toLocaleString('de-DE')}` : ''}
                          onChange={(e) => {
                            const numValue = e.target.value.replace(/[^0-9]/g, '');
                            handleAmountChange(key, 'fiveYears', parseFloat(numValue) || 0);
                          }}
                          className="w-32 px-3 py-2 text-sm border rounded text-right focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          placeholder="€0"
                        />
                      </div>
                    </div>
                  ))}
                  
                  <div className="flex items-center space-x-4 p-2 bg-gray-100 rounded-lg font-medium">
                    <span className="text-sm w-48">Total</span>
                    <span className="w-24 text-right pr-3">{totals.investments}</span>
                    <div className="flex space-x-2">
                      <span className="w-32 text-right pr-3">€{totals.current.toLocaleString('de-DE')}</span>
                      <span className="w-16 text-right pr-3">100%</span>
                      <span className="w-32 text-right pr-3">€{totals.ninetyDays.toLocaleString('de-DE')}</span>
                      <span className="w-32 text-right pr-3">€{totals.oneYear.toLocaleString('de-DE')}</span>
                      <span className="w-32 text-right pr-3">€{totals.fiveYears.toLocaleString('de-DE')}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-96 h-96 flex-shrink-0">
                <div className="bg-white rounded-lg shadow p-4 h-full">
                  <h3 className="text-sm font-bold text-gray-600 mb-4 text-center">Current Value Distribution (Current)</h3>
                  <div className="h-[calc(100%-2rem)]">
                    <Pie data={prepareChartData()} options={chartOptions} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'desired' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Desired Portfolio Composition</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {categories.map((category) => (
                <div key={category.id} className="bg-white p-4 rounded-lg shadow">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-medium">{category.label}</h3>
                    <span className={`text-sm font-semibold ${
                      categoryTotals[category.id] === 100 
                        ? 'text-green-600' 
                        : categoryTotals[category.id] > 100
                          ? 'text-red-600' 
                          : 'text-gray-600'
                    }`}>
                      {categoryTotals[category.id] || 0}%
                    </span>
                  </div>
    
                  <div className="space-y-2">
                    {categoryItems[category.id]?.map((item) => (
                      <div
                        key={item.id}
                        className="bg-white border border-gray-200 p-3 rounded-md"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{item.label}</span>
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={item.value || ''}
                            onChange={(e) => {
                              const newValue = Math.min(100, Math.max(0, parseInt(e.target.value) || 0));
                              handleValueChange(category.id, item.id, newValue);
                            }}
                            className="w-24 px-3 py-2 text-sm border rounded text-right focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="0%"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Add pie chart for each category */}
                  <div className="mt-4 h-64">
                    <Pie 
                      data={{
                        labels: categoryItems[category.id]?.map(item => item.label) || [],
                        datasets: [{
                          data: categoryItems[category.id]?.map(item => item.value) || [],
                          backgroundColor: [
                            '#1e3a8a', // deep blue
                            '#475569', // slate
                            '#0369a1', // light blue
                            '#15803d', // emerald green
                            '#0c4a6e', // darker blue
                            '#dc2626', // pale red
                            '#1e40af', // royal blue
                            '#166534', // forest green
                            '#075985', // ocean blue
                            '#ef4444', // lighter red
                            '#0891b2', // cyan blue
                          ],
                          borderColor: '#ffffff',
                          borderWidth: 2,
                        }]
                      }}
                      options={{
                        plugins: {
                          legend: {
                            display: true,
                            position: 'bottom',
                            labels: {
                              font: {
                                size: 11
                              },
                              generateLabels: (chart) => {
                                const data = chart.data;
                                if (data.labels.length && data.datasets.length) {
                                  return data.labels.map((label, index) => {
                                    const value = data.datasets[0].data[index];
                                    return {
                                      text: `${label} (${value}%)`,
                                      fillStyle: data.datasets[0].backgroundColor[index],
                                      hidden: false,
                                      index: index
                                    };
                                  });
                                }
                                return [];
                              }
                            }
                          },
                          tooltip: {
                            callbacks: {
                              label: (context) => {
                                const value = context.raw;
                                return `${context.label}: ${value}%`;
                              }
                            }
                          }
                        },
                        maintainAspectRatio: false
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'projected' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Projected Portfolio</h2>
            <p className="text-gray-600">Portfolio projections and forecasts will be displayed here.</p>
          </div>
        )}
      </div>
    </main>
  );
} 
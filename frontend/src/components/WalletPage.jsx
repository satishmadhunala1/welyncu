import React, { useState } from 'react';
import { FiArrowDown, FiArrowUp, FiCreditCard, FiDollarSign, FiPieChart, FiShoppingBag, FiTrendingUp, FiMoreVertical } from 'react-icons/fi';

const WalletPage = () => {
  const [activeTab, setActiveTab] = useState('transactions');
  
  const stats = [
    { title: 'Total Balance', value: '$2,845.50', change: '+2.5%', trend: 'up', icon: <FiDollarSign className="text-blue-500" /> },
    { title: 'This Month', value: '$485.75', change: '+12.5%', trend: 'up', icon: <FiTrendingUp className="text-green-500" /> },
    { title: 'Total Spending', value: '$1,245.80', change: '-3.2%', trend: 'down', icon: <FiShoppingBag className="text-amber-500" /> },
  ];

  const transactions = [
    { id: 1, date: 'Jun 12, 2023', description: 'Premium Membership', amount: '-$19.99', type: 'debit', category: 'Subscription', icon: <FiCreditCard className="text-purple-500" /> },
    { id: 2, date: 'Jun 10, 2023', description: 'Referral Bonus', amount: '+$25.00', type: 'credit', category: 'Bonus', icon: <FiDollarSign className="text-green-500" /> },
    { id: 3, date: 'Jun 5, 2023', description: 'Skill Assessment Reward', amount: '+$15.00', type: 'credit', category: 'Reward', icon: <FiPieChart className="text-blue-500" /> },
    { id: 4, date: 'May 28, 2023', description: 'Online Course', amount: '-$49.99', type: 'debit', category: 'Education', icon: <FiShoppingBag className="text-red-500" /> },
    { id: 5, date: 'May 20, 2023', description: 'Freelance Project', amount: '+$250.00', type: 'credit', category: 'Income', icon: <FiTrendingUp className="text-green-500" /> },
  ];

  const spendingByCategory = [
    { category: 'Shopping', amount: '$420.50', percentage: 35, color: 'bg-amber-500' },
    { category: 'Subscription', amount: '$199.99', percentage: 16, color: 'bg-purple-500' },
    { category: 'Food', amount: '$185.75', percentage: 15, color: 'bg-red-500' },
    { category: 'Entertainment', amount: '$150.25', percentage: 12, color: 'bg-blue-500' },
    { category: 'Other', amount: '$289.31', percentage: 22, color: 'bg-gray-500' },
  ];

  return (
    <div className="bg-[#1A1A1E] border border-gray-800 rounded-xl p-6 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-white">Your Wallet</h2>
        <button className="flex items-center bg-green-600/40 hover:bg-green-700/20 cursor-pointer text-white font-medium py-2 px-4 rounded-lg transition-colors">
          <FiArrowDown className="mr-2" />
          Add Funds
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-xl p-5">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 rounded-lg bg-gray-700/50">
                {stat.icon}
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${stat.trend === 'up' ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-400 text-sm mb-1">{stat.title}</h3>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column */}
        <div className="lg:w-2/3">
          {/* Tabs */}
          <div className="flex border-b border-gray-700 mb-6">
            <button 
              className={`py-3 px-4 font-medium text-sm ${activeTab === 'transactions' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-300'}`}
              onClick={() => setActiveTab('transactions')}
            >
              Transactions
            </button>
        
            <button 
              className={`py-3 px-4 font-medium text-sm ${activeTab === 'cards' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-300'}`}
              onClick={() => setActiveTab('cards')}
            >
              Cards
            </button>
          </div>

          {/* Transactions Table */}
          {activeTab === 'transactions' && (
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-700/20">
                    <tr>
                      <th className="text-left py-4 px-6 text-gray-400 font-medium text-xs uppercase">Description</th>
                      <th className="text-left py-4 px-6 text-gray-400 font-medium text-xs uppercase">Category</th>
                      <th className="text-left py-4 px-6 text-gray-400 font-medium text-xs uppercase">Date</th>
                      <th className="text-right py-4 px-6 text-gray-400 font-medium text-xs uppercase">Amount</th>
                      <th className="text-right py-4 px-6 text-gray-400 font-medium text-xs uppercase">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    {transactions.map((transaction) => (
                      <tr key={transaction.id} className="hover:bg-gray-700/10 transition-colors">
                        <td className="py-4 px-6">
                          <div className="flex items-center">
                            <div className="p-2 rounded-lg bg-gray-700/30 mr-3">
                              {transaction.icon}
                            </div>
                            <div>
                              <p className="font-medium text-white">{transaction.description}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-700/50 text-gray-300">
                            {transaction.category}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-gray-400">{transaction.date}</td>
                        <td className={`py-4 px-6 text-right font-medium ${transaction.type === 'credit' ? 'text-green-400' : 'text-red-400'}`}>
                          {transaction.amount}
                        </td>
                        <td className="py-4 px-6 text-right">
                          <button className="text-gray-400 hover:text-gray-200 p-1 rounded">
                            <FiMoreVertical />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

      

          {/* Cards Tab */}
          {activeTab === 'cards' && (
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Your Cards</h3>
              <div className="bg-gradient-to-r from-black-600 to-gray-600 border border-gray-700/30 rounded-xl p-6 text-white mb-6">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <p className="text-sm opacity-80">Balance</p>
                    <p className="text-3xl font-bold">$2,845.50</p>
                  </div>
                  <div className="text-2xl font-bold">VISA</div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm opacity-80 mb-1">Card Number</p>
                    <p className="font-medium">**** **** **** 4293</p>
                  </div>
                  <div>
                    <p className="text-sm opacity-80 mb-1">Valid Thru</p>
                    <p className="font-medium">09/30</p>
                  </div>
                </div>
              </div>
              <button className="w-full bg-gray-700/50 hover:bg-gray-700/70 text-white font-medium py-3 px-4 rounded-lg transition-colors border border-gray-600/30">
                Add New Card
              </button>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="lg:w-1/3">
          {/* Quick Actions */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-5 mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex flex-col items-center justify-center p-4 bg-gray-700/50 hover:bg-gray-700/70 rounded-lg transition-colors border border-gray-600/30">
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400 mb-2">
                  <FiArrowDown size={20} />
                </div>
                <span className="text-sm text-white">Deposit</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 bg-gray-700/50 hover:bg-gray-700/70 rounded-lg transition-colors border border-gray-600/30">
                <div className="p-2 rounded-lg bg-green-500/20 text-green-400 mb-2">
                  <FiArrowUp size={20} />
                </div>
                <span className="text-sm text-white">Withdraw</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 bg-gray-700/50 hover:bg-gray-700/70 rounded-lg transition-colors border border-gray-600/30">
                <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400 mb-2">
                  <FiCreditCard size={20} />
                </div>
                <span className="text-sm text-white">Transfer</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 bg-gray-700/50 hover:bg-gray-700/70 rounded-lg transition-colors border border-gray-600/30">
                <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 mb-2">
                  <FiDollarSign size={20} />
                </div>
                <span className="text-sm text-white">Exchange</span>
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {transactions.slice(0, 3).map((transaction) => (
                <div key={transaction.id} className="flex items-center">
                  <div className="p-2 rounded-lg bg-gray-700/30 mr-3">
                    {transaction.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">{transaction.description}</p>
                    <p className="text-xs text-gray-400">{transaction.date}</p>
                  </div>
                  <span className={`text-sm font-medium ${transaction.type === 'credit' ? 'text-green-400' : 'text-red-400'}`}>
                    {transaction.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
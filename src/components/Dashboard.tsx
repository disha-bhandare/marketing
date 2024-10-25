import React from 'react';
import { ArrowUpRight, Users, Mail, MessageSquare, TrendingUp } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { name: 'Total Subscribers', value: '71,897', change: '+12%', icon: Users },
    { name: 'Email Open Rate', value: '58.16%', change: '+4.75%', icon: Mail },
    { name: 'Engagement Rate', value: '24.57%', change: '+2.35%', icon: MessageSquare },
    { name: 'Campaign ROI', value: '289%', change: '+18.2%', icon: TrendingUp },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <dt>
                <div className="absolute bg-blue-500 rounded-md p-3">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <p className="ml-16 text-sm font-medium text-gray-500 truncate">{stat.name}</p>
              </dt>
              <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  {stat.change}
                  <ArrowUpRight className="h-4 w-4" />
                </p>
              </dd>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Campaigns</h3>
          <div className="space-y-4">
            {[
              { name: 'Summer Sale 2024', status: 'Active', performance: '98%' },
              { name: 'New Product Launch', status: 'Scheduled', performance: '--' },
              { name: 'Customer Retention', status: 'Active', performance: '87%' },
            ].map((campaign) => (
              <div key={campaign.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">{campaign.name}</h4>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    campaign.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {campaign.status}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Performance</p>
                  <p className="text-lg font-semibold text-gray-900">{campaign.performance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">AI Recommendations</h3>
          <div className="space-y-4">
            {[
              { title: 'Optimize Email Send Times', description: 'Based on user engagement patterns, consider shifting email campaigns to 10 AM EST' },
              { title: 'Content Personalization', description: 'Segment users based on purchase history to increase conversion rates' },
              { title: 'Campaign Enhancement', description: 'Add social proof elements to increase click-through rates by an estimated 23%' },
            ].map((rec) => (
              <div key={rec.title} className="p-4 border border-blue-100 rounded-lg bg-blue-50">
                <h4 className="font-medium text-blue-900">{rec.title}</h4>
                <p className="mt-1 text-sm text-blue-700">{rec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
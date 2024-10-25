import React from 'react';
import { BarChart, Mail, MessageSquare, Share2 } from 'lucide-react';

const CampaignMetrics: React.FC = () => {
  const channels = [
    { name: 'Email', icon: Mail, stats: { sent: '45,678', opened: '28,456', clicked: '12,345' } },
    { name: 'SMS', icon: MessageSquare, stats: { sent: '15,234', opened: '13,567', clicked: '8,901' } },
    { name: 'Social', icon: Share2, stats: { posts: '234', engagement: '45,678', clicks: '23,456' } },
    { name: 'Analytics', icon: BarChart, stats: { campaigns: '45', active: '12', completed: '33' } },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Campaign Performance</h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <div key={channel.name} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center mb-4">
                  <Icon className="h-6 w-6 text-blue-500" />
                  <h3 className="ml-2 text-lg font-medium text-gray-900">{channel.name}</h3>
                </div>
                <div className="space-y-2">
                  {Object.entries(channel.stats).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 capitalize">{key}</span>
                      <span className="text-sm font-medium text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Active Campaigns</h3>
          <div className="space-y-4">
            {[
              { name: 'Q2 Newsletter', progress: 75, status: 'On Track' },
              { name: 'Product Launch', progress: 45, status: 'At Risk' },
              { name: 'Holiday Campaign', progress: 90, status: 'Ahead' },
            ].map((campaign) => (
              <div key={campaign.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">{campaign.name}</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    campaign.status === 'On Track' ? 'bg-green-100 text-green-800' :
                    campaign.status === 'At Risk' ? 'bg-red-100 text-red-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {campaign.status}
                  </span>
                </div>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: `${campaign.progress}%` }}
                      className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                        campaign.status === 'On Track' ? 'bg-green-500' :
                        campaign.status === 'At Risk' ? 'bg-red-500' :
                        'bg-blue-500'
                      }`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Campaign Insights</h3>
          <div className="space-y-4">
            {[
              { title: 'Best Performing Channel', value: 'Email', change: '+15% CTR' },
              { title: 'Audience Growth', value: '2,345', change: '+23% MoM' },
              { title: 'Average Response Time', value: '2.5 hrs', change: '-30 min' },
            ].map((insight) => (
              <div key={insight.title} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-500">{insight.title}</p>
                  <p className="text-lg font-semibold text-gray-900">{insight.value}</p>
                </div>
                <span className="text-sm text-green-600 font-medium">{insight.change}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignMetrics;
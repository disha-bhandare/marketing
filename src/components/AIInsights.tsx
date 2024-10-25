import React from 'react';
import { BrainCircuit, TrendingUp, Users, AlertTriangle } from 'lucide-react';

const AIInsights: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">AI-Powered Insights</h2>
        
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center mb-4">
              <BrainCircuit className="h-6 w-6 text-blue-500" />
              <h3 className="ml-2 text-lg font-medium text-blue-900">Predictive Analytics</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <p className="text-sm font-medium text-gray-900">Churn Risk Prediction</p>
                <p className="text-sm text-gray-600">15% of premium users showing churn signals</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="text-sm font-medium text-gray-900">Next Best Action</p>
                <p className="text-sm text-gray-600">Recommend premium features to trial users</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-6 w-6 text-green-500" />
              <h3 className="ml-2 text-lg font-medium text-green-900">Performance Optimization</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <p className="text-sm font-medium text-gray-900">Campaign Performance</p>
                <p className="text-sm text-gray-600">+23% improvement potential identified</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="text-sm font-medium text-gray-900">Content Optimization</p>
                <p className="text-sm text-gray-600">Subject line improvements suggested</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-purple-500" />
              <h3 className="ml-2 text-lg font-medium text-purple-900">Audience Insights</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <p className="text-sm font-medium text-gray-900">Segment Analysis</p>
                <p className="text-sm text-gray-600">3 high-value segments identified</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="text-sm font-medium text-gray-900">Behavior Patterns</p>
                <p className="text-sm text-gray-600">New engagement trend detected</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">AI Recommendations</h3>
          <div className="space-y-4">
            {[
              {
                title: 'Optimize Send Times',
                description: 'Switch email campaigns to 10 AM EST for 23% higher open rates',
                impact: 'High',
                effort: 'Low',
              },
              {
                title: 'Segment Refinement',
                description: 'Create micro-segments based on purchase history',
                impact: 'Medium',
                effort: 'Medium',
              },
              {
                title: 'Content Personalization',
                description: 'Implement dynamic content blocks for top segments',
                impact: 'High',
                effort: 'High',
              },
            ].map((rec) => (
              <div key={rec.title} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{rec.title}</h4>
                  <p className="mt-1 text-sm text-gray-600">{rec.description}</p>
                  <div className="mt-2 flex space-x-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Impact: {rec.impact}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      Effort: {rec.effort}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Alerts & Notifications</h3>
          <div className="space-y-4">
            {[
              {
                type: 'warning',
                message: 'Unusual drop in email engagement detected',
                action: 'Review email content strategy',
              },
              {
                type: 'success',
                message: 'New high-value customer segment identified',
                action: 'Create targeted campaign',
              },
              {
                type: 'info',
                message: 'AI model retraining scheduled',
                action: 'Review new predictions after update',
              },
            ].map((alert, index) => (
              <div
                key={index}
                className={`flex items-center space-x-4 p-4 rounded-lg ${
                  alert.type === 'warning' ? 'bg-yellow-50' :
                  alert.type === 'success' ? 'bg-green-50' :
                  'bg-blue-50'
                }`}
              >
                <AlertTriangle className={`h-5 w-5 ${
                  alert.type === 'warning' ? 'text-yellow-500' :
                  alert.type === 'success' ? 'text-green-500' :
                  'text-blue-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                  <p className="text-sm text-gray-600">{alert.action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;
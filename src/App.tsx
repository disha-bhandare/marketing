import React, { useState } from 'react';
import {
  BarChart3,
  BellRing,
  Bot,
  BrainCircuit,
  FileBarChart,
  LayoutDashboard,
  MessageSquare,
  Mic,
  Settings,
  Share2,
  SplitSquareVertical,
} from 'lucide-react';

import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CampaignMetrics from './components/CampaignMetrics';
import AIInsights from './components/AIInsights';
import VoiceSearch from './components/VoiceSearch';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const navigation = [
    { name: 'Dashboard', icon: LayoutDashboard, id: 'dashboard' },
    { name: 'Campaigns', icon: FileBarChart, id: 'campaigns' },
    { name: 'AI Insights', icon: BrainCircuit, id: 'ai-insights' },
    { name: 'Analytics', icon: BarChart3, id: 'analytics' },
    { name: 'A/B Testing', icon: SplitSquareVertical, id: 'ab-testing' },
    { name: 'AI Assistant', icon: Bot, id: 'ai-assistant' },
    { name: 'Voice Search', icon: Mic, id: 'voice-search' },
    { name: 'Social Media', icon: Share2, id: 'social-media' },
    { name: 'Chat Support', icon: MessageSquare, id: 'chat-support' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar navigation={navigation} activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <h1 className="text-2xl font-semibold text-gray-900">Marketing Hub</h1>
              <div className="flex items-center space-x-4">
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <BellRing className="h-6 w-6 text-gray-500" />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <Settings className="h-6 w-6 text-gray-500" />
                </button>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User avatar"
                />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'campaigns' && <CampaignMetrics />}
          {activeTab === 'ai-insights' && <AIInsights />}
          {activeTab === 'voice-search' && <VoiceSearch />}
        </main>
      </div>
    </div>
  );
}

export default App;
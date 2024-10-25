import React from 'react';
import { Rocket } from 'lucide-react';

interface SidebarProps {
  navigation: Array<{
    name: string;
    icon: React.ElementType;
    id: string;
  }>;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ navigation, activeTab, setActiveTab }) => {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1 bg-gray-900">
          <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
            <Rocket className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-white text-lg font-semibold">MarketingAI</span>
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-2 py-4 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => setActiveTab(item.id)}
                    className={`${
                      activeTab === item.id
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    } group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full`}
                  >
                    <Icon
                      className={`${
                        activeTab === item.id ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-300'
                      } mr-3 flex-shrink-0 h-6 w-6`}
                    />
                    {item.name}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
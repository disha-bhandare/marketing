import React, { useState } from 'react';
import { Mic, MicOff, Search } from 'lucide-react';

const VoiceSearch: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleListening = () => {
    setIsListening(!isListening);
    // In a real implementation, this would handle voice recognition
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Voice Search & Commands</h2>
          <p className="text-gray-600 mb-8">
            Use your voice to search for campaigns, analytics, or perform actions
          </p>

          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Try saying 'Show me last month's campaign performance'"
              className="w-full px-4 py-3 pl-12 pr-16 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            <button
              onClick={toggleListening}
              className={`absolute right-4 top-3 p-1 rounded-full ${
                isListening ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
              } hover:bg-opacity-80 transition-colors`}
            >
              {isListening ? (
                <MicOff className="h-5 w-5" />
              ) : (
                <Mic className="h-5 w-5" />
              )}
            </button>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Popular Voice Commands</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                'Show campaign performance',
                'Create new email campaign',
                'What\'s my top segment?',
                'Schedule social media post',
                'Show AI recommendations',
                'Generate monthly report',
              ].map((command) => (
                <div
                  key={command}
                  className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <Mic className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-700">{command}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Voice Interactions</h3>
        <div className="space-y-4">
          {[
            {
              command: 'Show me last week\'s email performance',
              result: 'Displaying email campaign metrics for last week',
              timestamp: '2 minutes ago',
            },
            {
              command: 'Create new A/B test for homepage',
              result: 'Started A/B test creation workflow',
              timestamp: '15 minutes ago',
            },
            {
              command: 'What\'s my best performing campaign?',
              result: 'Found top campaign: Summer Sale 2024',
              timestamp: '1 hour ago',
            },
          ].map((interaction, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <Mic className="h-4 w-4 text-blue-500" />
                  <p className="text-sm font-medium text-gray-900">{interaction.command}</p>
                </div>
                <p className="mt-1 text-sm text-gray-600">{interaction.result}</p>
                <p className="mt-1 text-xs text-gray-400">{interaction.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoiceSearch;
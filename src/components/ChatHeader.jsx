import React from 'react';
import { Bot, Settings, Minimize2 } from 'lucide-react';

const ChatHeader = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></div>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white">AI Assistant</h2>
          <p className="text-xs text-slate-400">Online • Always here to help</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-all duration-200">
          <Settings className="w-4 h-4" />
        </button>
        <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-all duration-200">
          <Minimize2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
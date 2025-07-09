import React from 'react';
import { Bot, User } from 'lucide-react';

const ChatMessage = ({ message, isBot, timestamp }) => {
  return (
    <div className={`flex items-start space-x-3 mb-6 ${isBot ? 'justify-start' : 'justify-end'}`}>
      {isBot && (
        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
          <Bot className="w-4 h-4 text-white" />
        </div>
      )}
      
      <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
        isBot 
          ? 'bg-gradient-to-r from-slate-700 to-slate-600 text-white' 
          : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white ml-auto'
      } shadow-lg`}>
        <p className="text-sm leading-relaxed">{message}</p>
        <p className={`text-xs mt-2 ${isBot ? 'text-slate-300' : 'text-blue-100'}`}>
          {timestamp}
        </p>
      </div>
      
      {!isBot && (
        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-white" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
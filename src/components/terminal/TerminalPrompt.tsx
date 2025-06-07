import React from 'react';

interface TerminalPromptProps {
  command?: string;
  children?: React.ReactNode;
}

const TerminalPrompt: React.FC<TerminalPromptProps> = ({ command, children }) => (
  <div className="flex items-center">
    <span className="text-green-400 font-bold">guest@davidfauzi.com:</span>
    <span className="ml-2">~$</span>
    {command !== undefined && <span className="ml-2">{command}</span>}
    {children}
  </div>
);

export default TerminalPrompt;

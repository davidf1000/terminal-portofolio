import React, { useState, useRef, useEffect } from 'react';
import TerminalPrompt from './TerminalPrompt';
import TerminalHistory from './TerminalHistory';
import TerminalInput from './TerminalInput';
import { handleTerminalCommand } from '../../utils/terminalCommands';
import { useCommandHistory } from '../../hooks/useCommandHistory';
import { useAutocomplete } from '../../hooks/useAutocomplete';

const COMMANDS = [
  'banner',
  'help',
  'whoami',
  'aboutme',
  'experience',
  'education',
  'honor',
  'contactme',
  'clear',
];

const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ command: string; output: string }[]>([
    { command: '', output: handleTerminalCommand('banner') }
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const { handleHistoryNav, resetHistoryIndex } = useCommandHistory(commandHistory, setInput);
  const { suggestion, showSuggestion, getSuggestion, resetSuggestion } = useAutocomplete(COMMANDS);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleInputChange = (val: string) => {
    setInput(val);
    resetSuggestion();
    resetHistoryIndex();
    getSuggestion(val);
  };

  const handleEnter = () => {
    if (input.trim().toLowerCase() === 'clear') {
      setHistory([]);
      setInput('');
      resetSuggestion();
      resetHistoryIndex();
      return;
    }
    const output = handleTerminalCommand(input);
    setHistory([...history, { command: input, output }]);
    if (input.trim() !== '') {
      setCommandHistory([...commandHistory, input]);
    }
    setInput('');
    resetSuggestion();
    resetHistoryIndex();
  };

  const handleAutocomplete = () => {
    if (suggestion) {
      setInput(suggestion);
      resetSuggestion();
      resetHistoryIndex();
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen w-screen bg-gray-200"
      tabIndex={-1}
      onClick={() => {
        const input = document.getElementById('terminal-input');
        if (input) (input as HTMLInputElement).focus();
      }}
    >
      <div
        ref={scrollRef}
        className="bg-[#282828] text-[#ebdbb2] rounded-lg w-[97.5%] h-[97.5%] font-mono shadow-lg overflow-y-auto"
      >
        <div className="flex flex-col h-auto w-full px-2 py-2">
          <TerminalHistory history={history} outputClassName="whitespace-pre" />
          <div className="flex items-center w-full relative">
            <TerminalPrompt>
              <TerminalInput
                value={input}
                onChange={handleInputChange}
                onEnter={handleEnter}
                id="terminal-input"
                onTabOrRight={handleAutocomplete}
                suggestion={showSuggestion && suggestion ? suggestion : undefined}
                onUpArrow={() => handleHistoryNav('up')}
                onDownArrow={() => handleHistoryNav('down')}
              />
            </TerminalPrompt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;

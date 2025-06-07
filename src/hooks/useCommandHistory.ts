import { useState } from 'react';

export function useCommandHistory(commandHistory: string[], setInput: (val: string) => void) {
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);

  const handleHistoryNav = (direction: 'up' | 'down') => {
    if (commandHistory.length === 0) return;
    if (direction === 'up') {
      if (historyIndex === null) {
        setHistoryIndex(commandHistory.length - 1);
        setInput(commandHistory[commandHistory.length - 1]);
      } else if (historyIndex > 0) {
        setHistoryIndex(historyIndex - 1);
        setInput(commandHistory[historyIndex - 1]);
      }
    } else if (direction === 'down') {
      if (historyIndex === null) return;
      if (historyIndex < commandHistory.length - 1) {
        setHistoryIndex(historyIndex + 1);
        setInput(commandHistory[historyIndex + 1]);
      } else {
        setHistoryIndex(null);
        setInput('');
      }
    }
  };

  const resetHistoryIndex = () => setHistoryIndex(null);

  return { historyIndex, handleHistoryNav, resetHistoryIndex };
}

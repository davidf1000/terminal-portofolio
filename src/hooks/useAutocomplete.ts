import { useState, useRef } from 'react';

export function useAutocomplete(commands: string[]) {
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const timerRef = useRef<number | null>(null);

  const getSuggestion = (val: string) => {
    setShowSuggestion(false);
    setSuggestion(null);
    if (timerRef.current) window.clearTimeout(timerRef.current);
    if (val.length >= 2) {
      timerRef.current = window.setTimeout(() => {
        const match = commands.find(cmd => cmd.startsWith(val));
        if (match) {
          setSuggestion(match);
          setShowSuggestion(true);
        }
      }, 300);
    }
  };

  const resetSuggestion = () => {
    setSuggestion(null);
    setShowSuggestion(false);
  };

  return { suggestion, showSuggestion, getSuggestion, resetSuggestion };
}

import React from 'react';

interface TerminalInputProps {
  value: string;
  onChange: (value: string) => void;
  onEnter: () => void;
  id?: string;
  onTabOrRight?: () => void;
  suggestion?: string;
  onUpArrow?: () => void;
  onDownArrow?: () => void;
}

const TerminalInput: React.FC<TerminalInputProps> = ({ value, onChange, onEnter, id, onTabOrRight, suggestion, onUpArrow, onDownArrow }) => {
  // Calculate the part of the suggestion to show (the part after the current input)
  const suggestionText = suggestion && value && suggestion.startsWith(value) ? suggestion.slice(value.length) : '';
  return (
    <div className="flex-1 relative items-center ml-2">
      <input
        id={id}
        className="bg-transparent border-none outline-none text-[#ebdbb2] caret-transparent pr-1"
        type="text"
        autoFocus
        autoComplete="off"
        spellCheck={false}
        value={value}
        onChange={e => onChange(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            onEnter();
          }
          if ((e.key === 'Tab' || e.key === 'ArrowRight') && onTabOrRight) {
            e.preventDefault();
            onTabOrRight();
          }
          if (e.key === 'ArrowUp' && onUpArrow) {
            e.preventDefault();
            onUpArrow();
          }
          if (e.key === 'ArrowDown' && onDownArrow) {
            e.preventDefault();
            onDownArrow();
          }
        }}
        size={value.length === 0 ? 1 : value.length}
        style={{ fontFamily: 'inherit', fontSize: 'inherit' }}
      />
      {/* Inline intellisense suggestion */}
      {suggestionText && (
        <span
          className="absolute top-0 left-0 h-full pointer-events-none text-gray-500 select-none"
          style={{
            transform: `translateX(calc(${value.length}ch))`,
            fontFamily: 'inherit',
            fontSize: 'inherit',
          }}
        >
          {suggestionText}
        </span>
      )}
      <span
        className="animate-[blink_1s_steps(1)_infinite] absolute top-0 h-full left-0 pointer-events-none"
        style={{
          transform: `translateX(calc(${value.length}ch))`,
          fontFamily: 'inherit',
          fontSize: 'inherit',
        }}
      >
        ▊
      </span>
    </div>
  );
};

export default TerminalInput;

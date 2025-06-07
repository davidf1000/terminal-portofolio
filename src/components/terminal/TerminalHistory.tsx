import React from 'react';
import TerminalPrompt from './TerminalPrompt';
import TerminalOutput from './TerminalOutput';

interface TerminalHistoryItem {
  command: string;
  output: string;
}

interface TerminalHistoryProps {
  history: TerminalHistoryItem[];
  outputClassName?: string;
}

const TerminalHistory: React.FC<TerminalHistoryProps> = ({ history, outputClassName }) => (
  <>
    {history.map((item, idx) => (
      item.command.trim() === '' && !item.output.trim()
        ? null
        : (
          <div key={idx} className="mb-1">
            {item.command.trim() !== '' && <TerminalPrompt command={item.command} />}
            {item.output && <TerminalOutput output={item.output} className={outputClassName} />}
          </div>
        )
    ))}
  </>
);

export default TerminalHistory;

import React from 'react';

interface TerminalOutputProps {
  output: string;
  className?: string;
}

const TerminalOutput: React.FC<TerminalOutputProps> = ({ output, className }) => {
  // Check if output contains HTML (for links)
  const isHtml = /<a\s/i.test(output);
  if (isHtml) {
    return (
      <div
        className={`ml-1 ${className ?? 'whitespace-pre-line'}`}
        dangerouslySetInnerHTML={{ __html: output }}
      />
    );
  }
  return <div className={`ml-1 ${className ?? 'whitespace-pre-line'}`}>{output}</div>;
};

export default TerminalOutput;

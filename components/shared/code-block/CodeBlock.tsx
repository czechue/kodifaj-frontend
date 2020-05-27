import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

interface CodeBlockProps {
  value: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language = 'javascript', value = '' }) => {
  return (
    <div className="my-2 flex flex-col">
      <p className="text-xs italic">{language}</p>
      <div className="flex">
        <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;

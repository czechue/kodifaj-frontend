import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

interface CodeBlockProps {
  value: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language = 'javascript', value = '' }) => {
  return (
    <>
      <p className="text-xs italic">{language}</p>
      <SyntaxHighlighter className="max-w-screen-xs sm:max-w-full" language={language}>
        {value}
      </SyntaxHighlighter>
    </>
  );
};

export default CodeBlock;

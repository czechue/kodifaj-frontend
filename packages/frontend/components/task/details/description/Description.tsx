import React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../../shared/code-block/CodeBlock';
interface DescriptionProps {
  content: string;
}

const Description: React.FC<DescriptionProps> = ({ content }) => {
  return (
    <section className="task-description">
      <ReactMarkdown
        source={content}
        renderers={{
          code: CodeBlock,
        }}
      />
    </section>
  );
};

export default Description;

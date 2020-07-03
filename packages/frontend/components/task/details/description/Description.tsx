import React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../../shared/code-block/CodeBlock';
import { useTaskState } from '../../../context/TaskDetailContext';

const Description: React.FC = () => {
  const { content } = useTaskState();
  
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

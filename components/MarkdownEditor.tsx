import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor: React.FC = () => {
  const [markdown, setMarkdown] = useState('');

  const handleMarkdownChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <textarea
        value={markdown}
        onChange={handleMarkdownChange}
        placeholder="Write your markdown here..."
        rows={10}
        cols={50}
      />
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default MarkdownEditor;
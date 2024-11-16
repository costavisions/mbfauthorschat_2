import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface ChatMessageProps {
  role: 'user' | 'ai';
  content: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ role, content }) => {
  const isUser = role === 'user';
  const messageClass = isUser 
    ? 'bg-[#02468d] text-white' 
    : 'bg-[#eff1f1] text-[#216DF3]';

  return (
    <div className={`p-3 rounded-lg mb-4 max-w-[85%] ${isUser ? 'ml-auto' : 'mr-auto'} ${messageClass}`}>
      <div className="text-sm font-semibold mb-1">{isUser ? 'User' : 'AI'}</div>
      <div className={`${!isUser ? 'markdown-content' : ''}`}>
        {isUser ? (
          content
        ) : (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            className="markdown prose prose-sm max-w-none prose-p:my-1 prose-headings:my-2 prose-ul:my-1 prose-li:my-0.5 prose-table:my-2"
          >
            {content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;

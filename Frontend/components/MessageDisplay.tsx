import React, { useState, useEffect } from 'react';

const fetchMessages = async (): Promise<string> => {
  try {
    const response = await fetch('/api/messages');
    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error('Error fetching messages:', error);
    return '';
  }
};

const formatMessage = (message: string) => {
    return message.split('\n').map((line, index) => {
      const parts = line.split(/(@\w+)/);
      return (
        <p key={index}>
          {parts.map((part, i) =>
            part.startsWith('@') ? (
              <a
                key={i}
                href={`https://twitter.com/${part.slice(1)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-600"
              >
                {part}
              </a>
            ) : (
              <span key={i}>{part}</span>
            ),
          )}
        </p>
      );
    });
  };

const MessageDisplay: React.FC<{ updateInterval: number }> = ({ updateInterval }) => {
  const [chunks, setChunks] = useState<string[]>([]);
  const [currentChunkIndex, setCurrentChunkIndex] = useState(0);

  useEffect(() => {
    fetchMessages().then((text) => {
      const chunkSize = 80;
      const textChunks = text.match(new RegExp(`.{1,${chunkSize}}`, 'g'));
      if (textChunks) {
        setChunks(textChunks);
      }
    });
  }, []);

  useEffect(() => {
    if (currentChunkIndex < chunks.length - 1) {
      const timer = setTimeout(() => {
        setCurrentChunkIndex(currentChunkIndex + 1);
      }, updateInterval);
      return () => clearTimeout(timer);
    }
  }, [currentChunkIndex, chunks, updateInterval]);

  const displayedMessage = chunks.slice(0, currentChunkIndex + 1).join('');
  return <>{formatMessage(displayedMessage)}</>;
};

export default MessageDisplay;

import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

function Chat() {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { role: 'user', content: input }]);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post('/api/ai/chat', {
        message: input,
        language: i18n.language,
      });
      setMessages(prev => [...prev, { role: 'assistant', content: response.data.response }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-page">
      <h1>{t('chat.title')}</h1>
      <div className="chat-container">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.role}`}><p>{msg.content}</p></div>
          ))}
          {loading && <div className="message assistant"><p>Typing...</p></div>}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSendMessage} className="chat-form">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder={t('chat.placeholder')} disabled={loading} />
          <button type="submit" disabled={loading}>{t('chat.send')}</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
import { useState } from 'react';
import Message from './Message';

function Chat({ initialMessages }) {
  const [messages, setMessages] = useState(initialMessages);
  const [user] = useState('Nicolas'); // Assuming user doesn't change in Chat

  const addMessage = text => {
    const newMessage = { id: messages.length + 1, text, user };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat">
      <ul>
        {messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
      </ul>

      <form
        onSubmit={e => {
          e.preventDefault();
          addMessage(e.target.message.value);
          e.target.reset();
        }}
      >
        <input
          className="message-input"
          name="message"
          placeholder="Type a message"
          required
        />
      </form>
    </div>
  );
}

export default Chat;

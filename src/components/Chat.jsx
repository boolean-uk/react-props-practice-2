import { useState } from "react";
import Message from "./Message";

function Chat({ initialMessages, user, addMessage }) {
  const [messages, setMessages] = useState(initialMessages);

  const handleAddMessage = (text) => {
    setMessages([...messages, { id: messages.length + 1, text, user }]);
  };

  return (
    <div className="chat">
      <ul>
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </ul>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddMessage(e.target.message.value);
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

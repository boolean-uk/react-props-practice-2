/* eslint-disable react/prop-types */
import Message from "./Message";

function Chat({ messages, addMessage }) {
  return (
    <div className="chat">
      <ul>
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </ul>

      <form
        onSubmit={(e) => {
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

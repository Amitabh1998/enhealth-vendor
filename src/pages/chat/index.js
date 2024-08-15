import React, { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sending the message, e.g., push to messages array or send to a server
    setMessages([...messages, { text: inputValue, sender: "user" }]);
    setInputValue("");
  };

  return (
    <div className="relative flex flex-col w-full h-[calc(100vh-110px)]">
      {/* Chat messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className="my-2 flex flex-col w-full">
            {message.sender === "user" ? (
              <div className="bg-blue-200 rounded-lg p-2 max-w-xs self-end">
                {message.text}
              </div>
            ) : (
              <div className="bg-gray-200 rounded-lg p-2 max-w-xs">
                {message.text}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input area */}
      <footer className="w-full absolute bottom-0 shadow rounded-md">
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="flex-1 border p-2 rounded-l-lg"
            placeholder="Type your message..."
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-lg"
          >
            Send
          </button>
        </form>
      </footer>
    </div>
  );
};

export default Chat;

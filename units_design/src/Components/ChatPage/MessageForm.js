import React, { useState } from "react";
import "./chat.css";
import { defColor } from "../../Constants/defaults";

export default function MessageForm({ onMessageSend }) {
  const [chatText, setChatText] = useState("");
  const handleChatTextChange = (e) => {
    setChatText(e.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onMessageSend(chatText);
    setChatText("");
  };
  return (
    <form className="MessageForm" onSubmit={handleFormSubmit}>
      <div className="input-container">
        <input
          type="text"
          //ref={(node) => (this.input = node)}
          className="form-control"
          placeholder="Enter your message..."
          value={chatText}
          onChange={handleChatTextChange}
        />
      </div>
      <div className="button-container">
        {/* <button type="submit" >Send</button> */}
        <button
          className="fa-solid fa-paper-plane fa-xl"
          type="submit"
          style={{ color: defColor }}
        ></button>
      </div>
    </form>
  );
}

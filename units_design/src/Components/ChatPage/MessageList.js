import React from "react";
import "./chat.css";
import Message from "./Message";
import { useEffect } from "react";
import { getbyid } from "../../api/chats";
import { useState } from "react";

export default function MessageList({ chatID, userID, newMessage, setNewMessage }) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (chatID) {
      getbyid(chatID).then((result) => {
        setMessages(result.data.response.messages)
        setNewMessage(false)
      });
    }
  }, [chatID, newMessage]);
  return (
    <div className="MessageList">
      {messages?.map((message, i) => (
        <div className="my-1" key={i}>
          <Message message={message} userID={userID} />
        </div>
      ))}
    </div>
  );
}

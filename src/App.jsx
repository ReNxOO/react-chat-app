import React, { useState } from "react";
import Login from "./Components/Login";
import Chat from "./Components/Chat";

export default function App() {
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("token") ? true : false,
  );
  const [leftMessage, setLeftMessage] = useState([]);
  const [rightMessage, setRightMessage] = useState([]);
  const handleMessages = (message, user) => {
    if (user === "userOne") {
      const sentMessage = {
        id: leftMessage?.at(-1)?.id ? leftMessage.at(-1).id + 1 : 1,
        content: message,
        createdAt: new Date().toLocaleTimeString(),
        type: "sent",
      };
      setLeftMessage((prev) => [...prev, sentMessage]);

      const receivedMessage = {
        id: rightMessage?.at(-1)?.id ? rightMessage.at(-1).id + 1 : 1,
        content: message,
        createdAt: new Date().toLocaleTimeString(),
        type: "received",
      };
      setRightMessage((prev) => [...prev, receivedMessage]);
    } else {
      const receivedMessage = {
        id: leftMessage?.at(-1)?.id ? leftMessage.at(-1).id + 1 : 1,
        content: message,
        createdAt: new Date().toLocaleTimeString(),
        type: "received",
      };
      setLeftMessage((prev) => [...prev, receivedMessage]);

      const sentMessage = {
        id: rightMessage?.at(-1)?.id ? rightMessage.at(-1).id + 1 : 1,
        content: message,
        createdAt: new Date().toLocaleTimeString(),
        type: "sent",
      };
      setRightMessage((prev) => [...prev, sentMessage]);
    }
  };
  return isLogin ? (
    <Chat
      setIsLogin={setIsLogin}
      handleMessages={handleMessages}
      leftMessage={leftMessage}
      rightMessage={rightMessage}
    />
  ) : (
    <Login setIsLogin={setIsLogin} />
  );
}

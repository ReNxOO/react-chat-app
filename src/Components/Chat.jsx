import React from "react";
import Chatbox from "./Chatbox";

export default function Chat({
  setIsLogin,
  handleMessages,
  leftMessage,
  rightMessage,
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-200">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Two User Chat</h1>

            <p className="text-gray-500 mt-1">
              Send messages between two users
            </p>
          </div>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              setIsLogin(false);
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl transition active:scale-95"
          >
            Logout
          </button>
        </div>

        {/* Chat Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Chatbox
            user="userOne"
            messages={leftMessage}
            handleMessages={handleMessages}
          />

          <Chatbox
            user="userTwo"
            messages={rightMessage}
            handleMessages={handleMessages}
          />
        </div>
      </div>
    </div>
  );
}

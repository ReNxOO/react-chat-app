import React, { useState } from "react";
import Body from "./Body";

export default function Chatbox({ user, messages, handleMessages }) {
  const [inp, setInp] = useState("");

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col h-[750px]">
      {/* Header */}
      <header className="bg-blue-600 text-white px-6 py-5 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            {user === "userOne" ? "User One" : "User Two"}
          </h2>

          <p className="text-sm text-blue-100">Online</p>
        </div>

        <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center text-xl font-bold">
          {user === "userOne" ? "A" : "B"}
        </div>
      </header>

      {/* Messages */}
      <main className="flex-1 p-5">
        <Body messages={messages} />
      </main>

      {/* Footer */}
      <footer className="border-t bg-white p-4">
        <div className="flex gap-3">
          <input
            value={inp}
            onChange={(e) => setInp(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 h-14 rounded-xl border border-gray-300 px-5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <button
            onClick={() => {
              if (inp.trim() === "") return;

              handleMessages(inp, user);
              setInp("");
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-7 rounded-xl transition active:scale-95 font-semibold"
          >
            Send
          </button>
        </div>
      </footer>
    </div>
  );
}

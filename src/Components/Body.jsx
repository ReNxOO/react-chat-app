import React from "react";
import Message from "./Message";

export default function Body({ messages }) {
  return (
    <div className="h-[500px] overflow-y-auto rounded-2xl bg-slate-100 p-5 shadow-inner">
      <div className="flex flex-col gap-4">
        {messages?.map((item) => (
          <Message
            key={item.id}
            content={item.content}
            createdAt={item.createdAt}
            type={item.type}
          />
        ))}

        {messages?.length === 0 && (
          <div className="flex items-center justify-center h-full text-gray-500 text-lg">
            Start the conversation 👋
          </div>
        )}
      </div>
    </div>
  );
}

import React from "react";

export default function Message({ content, createdAt, type }) {
  const isSent = type === "sent";

  return (
    <div className={`flex ${isSent ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] px-4 py-3 rounded-2xl shadow-md break-words ${
          isSent
            ? "bg-blue-600 text-white rounded-br-md"
            : "bg-white text-slate-800 border border-gray-200 rounded-bl-md"
        }`}
      >
        <p className="text-base leading-6">{content}</p>

        <p
          className={`text-xs mt-2 text-right ${
            isSent ? "text-blue-100" : "text-gray-500"
          }`}
        >
          {createdAt}
        </p>
      </div>
    </div>
  );
}

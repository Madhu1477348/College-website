import React from "react";

const Notification = ({ notification }) => {
  return (
    <li className="border-b pb-4 last:border-b-0">
      <span className="text-sm text-gray-500">
        {new Date(notification.created_at).toLocaleDateString()}
      </span>
      <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
        {notification.title}
      </h3>
      <p className="text-gray-600 mt-1">{notification.content}</p>
      <span className="inline-block mt-2 text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-800 rounded uppercase">
        {notification.category}
      </span>
    </li>
  );
};

export default Notification;

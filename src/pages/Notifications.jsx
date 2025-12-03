import React, { useEffect, useState } from "react";
import Notification from "../components/Notification";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch(
          `${
            import.meta.env.VITE_API_URL || "https://college-website-space-1.onrender.com"
          }/api/notifications/`
        );
        const data = await res.json();
        setNotifications(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching notifications:", err);
        setLoading(false);
      }
    };
    fetchNotifications();
  }, []);

  const filteredNotifications =
    filter === "all"
      ? notifications
      : notifications.filter(
          (n) => n.category.toLowerCase() === filter.toLowerCase()
        );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
        Notifications
      </h1>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-8">
        {["all", "general", "inter", "degree"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
              filter === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 min-h-[300px]">
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : filteredNotifications.length === 0 ? (
          <p className="text-center text-gray-500 py-8">
            No notifications found for this category.
          </p>
        ) : (
          <ul className="space-y-4">
            {filteredNotifications.map((note) => (
              <Notification key={note.id} notification={note} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Notifications;

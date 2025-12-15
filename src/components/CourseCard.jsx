


import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({
  title,
  subtitle,
  items,
  color = "blue",
  to, // 👈 route path (optional)
}) => {
  const navigate = useNavigate();

  const colorClasses = {
    blue: {
      bg: "bg-blue-600",
      text: "text-blue-900",
      check: "text-blue-500",
      button: "bg-blue-600 hover:bg-blue-700",
    },
    indigo: {
      bg: "bg-indigo-600",
      text: "text-blue-900",
      check: "text-indigo-500",
      button: "bg-indigo-600 hover:bg-indigo-700",
    },
  };

  const theme = colorClasses[color] || colorClasses.blue;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 group">
      
      {/* TOP SECTION */}
      <div className={`h-32 ${theme.bg} flex items-center justify-center`}>
        <span className="text-white text-5xl font-bold opacity-80 group-hover:scale-110 transition duration-300">
          {subtitle}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-8">
        <h3 className={`text-2xl font-bold ${theme.text} mb-4 border-b pb-2`}>
          {title}
        </h3>

        <ul className="space-y-2 text-gray-700 mb-6">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <span className={`${theme.check} mr-2`}>✓</span>
              {item}
            </li>
          ))}
        </ul>

        {/* BUTTON */}
        <button
          onClick={() => to && navigate(to)}
          className={`w-full ${theme.button} text-white py-3 rounded cursor-pointer font-semibold transition`}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default CourseCard;

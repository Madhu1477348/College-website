import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const StaffList = () => {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");
  const location = useLocation();

  useEffect(() => {
    fetchStaff();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");
    if (categoryParam) {
      setFilter(categoryParam);
    } else {
      setFilter("all");
    }
  }, [location.search]);

  const fetchStaff = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${
          import.meta.env.VITE_API_URL ||
          "https://college-website-backend-3ct5.onrender.com/api"
        }/staff/`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch staff data");
      }
      const data = await response.json();
      setStaff(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const categories = ["all", ...new Set(staff.map((s) => s.category_of_post))];

  const filteredStaff = staff.filter((s) => {
    if (filter === "all") return true;
    if (filter === "Teaching Staff") {
      // Include both explicit "Teaching Staff" and legacy roles
      return [
        "Teaching Staff",
        "Professor",
        "Assistant Professor",
        "Associate Professor",
        "Lecturer",
      ].includes(s.category_of_post);
    }
    return s.category_of_post === filter;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p className="font-bold">Error</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
          Our Faculty
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Meet our dedicated team of educators committed to excellence in
          teaching and research
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              filter === category
                ? "bg-linear-to-r from-orange-500 to-purple-600 text-white shadow-lg transform scale-105"
                : "bg-white text-gray-700 border-2 border-gray-300 hover:border-orange-500 hover:shadow-md"
            }`}
          >
            {category === "all" ? "All Staff" : category}
          </button>
        ))}
      </div>

      {/* Staff Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-linear-to-r from-orange-500 to-purple-600 text-white">
                <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">
                  S.No
                </th>
                <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">
                  Staff Name
                </th>
                <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">
                  Qualification
                </th>
                <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">
                  Category of Post
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredStaff.map((member, index) => (
                <tr
                  key={member.id}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 font-medium">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-gray-900 font-medium">
                      {member.name}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                    {member.subject}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                    {member.qualification}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                      {member.category_of_post}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* No Results */}
      {filteredStaff.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No staff members found in this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default StaffList;

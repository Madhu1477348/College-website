import React, { useState, useEffect } from "react";
import MaterialCard from "../components/MaterialCard";

const Syllabus = () => {
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCourseType, setSelectedCourseType] = useState("all");

  useEffect(() => {
    fetchBranches();
  }, []);

  const fetchBranches = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${
          import.meta.env.VITE_API_URL ||
          "https://college-website-space-1.onrender.com"
        }/api/branches/`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch branches");
      }
      const data = await response.json();
      setBranches(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredBranches =
    selectedCourseType === "all"
      ? branches
      : branches.filter((b) => b.course_type === selectedCourseType);

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
          Syllabus & Materials
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Access course syllabi and study materials for all branches
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <button
          onClick={() => setSelectedCourseType("all")}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
            selectedCourseType === "all"
              ? "bg-linear-to-r from-orange-500 to-purple-600 text-white shadow-lg transform scale-105"
              : "bg-white text-gray-700 border-2 border-gray-300 hover:border-orange-500 hover:shadow-md"
          }`}
        >
          All Courses
        </button>
        <button
          onClick={() => setSelectedCourseType("inter")}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
            selectedCourseType === "inter"
              ? "bg-linear-to-r from-orange-500 to-purple-600 text-white shadow-lg transform scale-105"
              : "bg-white text-gray-700 border-2 border-gray-300 hover:border-orange-500 hover:shadow-md"
          }`}
        >
          Inter
        </button>
        <button
          onClick={() => setSelectedCourseType("degree")}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
            selectedCourseType === "degree"
              ? "bg-linear-to-r from-orange-500 to-purple-600 text-white shadow-lg transform scale-105"
              : "bg-white text-gray-700 border-2 border-gray-300 hover:border-orange-500 hover:shadow-md"
          }`}
        >
          Degree
        </button>
      </div>

      {/* Branches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBranches.map((branch) => (
          <MaterialCard key={branch.id} branch={branch} />
        ))}
      </div>

      {filteredBranches.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No branches found for this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default Syllabus;

import React, { useState, useEffect } from "react";

import { API_URL } from "../api";

const Examination = () => {
  // ----- State --------------------------------------------------------------
  const [activeTab, setActiveTab] = useState("inter"); // inter | degree | mid | semester
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ----- Data fetching -------------------------------------------------------
  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await fetch(`${API_URL}/examinations/`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setExams(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchExams();
  }, []);

  // ----- Helper: render a table ---------------------------------------------
  const renderTable = (filterFn) => (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Exam Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              File
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {exams.filter(filterFn).map((exam) => (
            <tr key={exam.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {exam.title}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {exam.date ? new Date(exam.date).toLocaleDateString() : "-"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {exam.description || "-"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                {exam.file ? (
                  <a
                    href={exam.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Download
                  </a>
                ) : (
                  "-"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // ----- Render --------------------------------------------------------------
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
        Examination Cell
      </h1>

      {/* Tabs */}
      <div className="flex justify-center mb-8 space-x-2">
        <div className="bg-white rounded-full shadow-md p-1 flex">
          <button
            onClick={() => setActiveTab("inter")}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              activeTab === "inter"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-gray-600 hover:text-indigo-600"
            }`}
          >
            Intermediate
          </button>
          <button
            onClick={() => setActiveTab("degree")}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              activeTab === "degree"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-gray-600 hover:text-indigo-600"
            }`}
          >
            Degree
          </button>
          <button
            onClick={() => setActiveTab("mid")}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              activeTab === "mid"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-gray-600 hover:text-indigo-600"
            }`}
          >
            Mid Exams
          </button>
          <button
            onClick={() => setActiveTab("semester")}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              activeTab === "semester"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-gray-600 hover:text-indigo-600"
            }`}
          >
            Semester Exams
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 min-h-[400px]">
        {/* Loading / Error */}
        {loading && (
          <p className="text-center text-gray-600">Loading examinations...</p>
        )}
        {error && <p className="text-center text-red-500">Error: {error}</p>}

        {/* Intermediate */}
        {activeTab === "inter" && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
              Intermediate Examinations
            </h2>
            {renderTable((e) => e.category === "inter")}
          </div>
        )}

        {/* Degree */}
        {activeTab === "degree" && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
              Degree Examinations
            </h2>
            {renderTable((e) => e.category === "degree")}
          </div>
        )}

        {/* Mid Exams */}
        {activeTab === "mid" && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
              Mid Exams
            </h2>
            {renderTable((e) => e.title.toLowerCase().includes("mid"))}
          </div>
        )}

        {/* Semester Exams */}
        {activeTab === "semester" && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
              Semester Exams
            </h2>
            {renderTable((e) => e.title.toLowerCase().includes("semester"))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Examination;

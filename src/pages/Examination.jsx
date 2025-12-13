import React, { useState, useEffect } from "react";
import { API_URL } from "../api";

const Examination = () => {
  // ---------------- FILTER STATE ----------------
  const [activeMain, setActiveMain] = useState("inter"); // inter | degree
  const [activeSub, setActiveSub] = useState(null); // unit | half | pre | mid | semester

  // ---------------- DROPDOWN STATE ----------------
  const [showInter, setShowInter] = useState(false);
  const [showDegree, setShowDegree] = useState(false);

  // ---------------- DATA STATE ----------------
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ---------------- FETCH DATA ----------------
  useEffect(() => {
    const fetchExams = async () => {
      setLoading(true);
      setError(null);

      try {
        let url = `${API_URL}/examinations/?category=${activeMain}`;
        if (activeSub) {
          url += `&exam_type=${activeSub}`;
        }

        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch examinations");

        const data = await res.json();
        setExams(data.results || data); // pagination-safe
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExams();
  }, [activeMain, activeSub]);

  // ---------------- TABLE ----------------
  const renderTable = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Exam Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              File
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {exams.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-6 text-gray-500">
                No examinations found.
              </td>
            </tr>
          ) : (
            exams.map((exam) => (
              <tr key={exam.id}>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {exam.title}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {exam.date
                    ? new Date(exam.date).toLocaleDateString()
                    : "-"}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {exam.description || "-"}
                </td>
                <td className="px-6 py-4 text-sm text-blue-600">
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
            ))
          )}
        </tbody>
      </table>
    </div>
  );

  // ---------------- UI ----------------
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">
        Examination Cell
      </h1>

      {/* FILTER BAR */}
      <div className="flex justify-center gap-10 mb-8">

        {/* INTERMEDIATE */}
        <div
          className="relative"
          onMouseEnter={() => {
            setShowInter(true);
            setShowDegree(false);
            setActiveMain("inter");
            setActiveSub(null);
          }}
          onMouseLeave={() => setShowInter(false)}
        >
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-full">
            Intermediate
          </button>

          {showInter && (
            <div
              className="absolute left-0 top-full bg-white shadow-lg rounded w-48 z-50"
              onMouseEnter={() => setShowInter(true)}
              onMouseLeave={() => setShowInter(false)}
            >
              {[
                { label: "Unit Test", key: "unit" },
                { label: "Half-Yearly", key: "half" },
                { label: "Pre-Final", key: "pre" },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveSub(item.key)}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-indigo-50"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* DEGREE */}
        <div
          className="relative"
          onMouseEnter={() => {
            setShowDegree(true);
            setShowInter(false);
            setActiveMain("degree");
            setActiveSub(null);
          }}
          onMouseLeave={() => setShowDegree(false)}
        >
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-full">
            Degree
          </button>

          {showDegree && (
            <div
              className="absolute left-0 top-full bg-white shadow-lg rounded w-48 z-50"
              onMouseEnter={() => setShowDegree(true)}
              onMouseLeave={() => setShowDegree(false)}
            >
              {[
                { label: "Mid Exams", key: "mid" },
                { label: "Semester Exams", key: "semester" },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveSub(item.key)}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-indigo-50"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 min-h-[300px]">
        {loading && <p className="text-center">Loading examinations...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading && !error && renderTable()}
      </div>
    </div>
  );
};

export default Examination;

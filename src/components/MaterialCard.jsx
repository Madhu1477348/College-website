import React from "react";
import { IoDocumentText, IoDownload, IoLink } from "react-icons/io5";

const API =
  import.meta.env.VITE_API_URL ||
  "https://college-website-backend-3ct5.onrender.com/api";

const ROOT = API.replace("/api", "");

const MaterialCard = ({ branch }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="bg-linear-to-r from-orange-500 to-purple-600 p-4">
        <h3 className="text-xl font-bold text-white">{branch.name}</h3>
        <p className="text-white text-sm opacity-90">
          {branch.course_type === "inter" ? "Intermediate" : "Degree"}
        </p>
      </div>

      <div className="p-6">
        {branch.description && (
          <p className="text-gray-600 mb-4 text-sm">{branch.description}</p>
        )}

        {branch.subjects && branch.subjects.length > 0 ? (
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800 mb-2">Subjects:</h4>
            {branch.subjects.map((subject) => (
              <div
                key={subject.id}
                className="border-l-4 border-purple-500 pl-3"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-800">
                    {subject.name}
                  </span>
                  {subject.year && (
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {subject.year}
                    </span>
                  )}
                </div>

                {subject.syllabi && subject.syllabi.length > 0 && (
                  <div className="ml-2 space-y-2">
                    {subject.syllabi.map((syllabus) => (
                      <div
                        key={syllabus.id}
                        className="flex items-center gap-2 text-sm"
                      >
                        <IoDocumentText className="text-orange-500 shrink-0" />
                        <span className="text-gray-600 flex-1">
                          {syllabus.title}
                        </span>

                        {syllabus.file && (
                          <a
                            href={`${ROOT}${syllabus.file}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-800"
                          >
                            <IoDownload className="w-4 h-4" />
                          </a>
                        )}

                        {syllabus.link && (
                          <a
                            href={syllabus.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <IoLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm italic">No subjects added yet</p>
        )}
      </div>
    </div>
  );
};

export default MaterialCard;

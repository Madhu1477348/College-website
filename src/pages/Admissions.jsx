import React from "react";
import { useNavigate } from "react-router-dom";

const Admissions = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
        Admissions
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Intermediate Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">
            Intermediate Admissions
          </h2>
          <p className="text-gray-700 mb-6">
            We offer a wide range of groups for Intermediate students to build a
            strong foundation for their future careers.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Groups Offered:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>M.P.C (Maths, Physics, Chemistry)</li>
            <li>Bi.P.C (Biology, Physics, Chemistry)</li>
            <li>C.E.C (Civics, Economics, Commerce)</li>
            <li>M.E.C (Maths, Economics, Commerce)</li>
            <li>M.Bi.P.C (Maths, Biology, Physics, Chemistry)</li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-900 mb-2">Eligibility:</h4>
            <p className="text-sm text-gray-700">
              SSC / 10th Class or equivalent from a recognized board.
            </p>
          </div>
          <button
            onClick={() => navigate("/contact")}
            className="mt-6 w-full bg-orange-500 text-white py-2 rounded cursor-pointer hover:bg-orange-600 transition"
          >
            Enquire Now
          </button>
        </div>

        {/* Degree Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">
            Degree Admissions
          </h2>
          <p className="text-gray-700 mb-6">
            Our undergraduate programs are designed to provide in-depth
            knowledge and practical skills in various fields.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Courses Offered:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>B.Sc (Computer Science)</li>
            <li>B.Com (Computer Applications)</li>
            <li>B.ZC (Botany, Zoology, Chemistry)</li>
            <li>B.A (History, Economics, Politics)</li>
          </ul>
          <div className="bg-purple-50 p-4 rounded-md border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-900 mb-2">Eligibility:</h4>
            <p className="text-sm text-gray-700">
              Intermediate / 10+2 or equivalent from a recognized board.
            </p>
          </div>
          <button
            onClick={() => navigate("/contact")}
            className="mt-6 w-full bg-purple-600 text-white py-2 rounded cursor-pointer hover:bg-purple-700 transition"
          >
            Enquire Now
          </button>
        </div>
      </div>

      {/* Application Process */}
      {/* <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Application Process
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex-1 text-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="font-bold text-lg mb-2">Fill Application</h3>
            <p className="text-gray-600 text-sm">
              Collect the application form from the college office or download
              it online.
            </p>
          </div>
          <div className="hidden md:block w-12 h-1 bg-gray-300"></div>
          <div className="flex-1 text-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="font-bold text-lg mb-2">Submit Documents</h3>
            <p className="text-gray-600 text-sm">
              Submit the filled form along with necessary certificates and
              photographs.
            </p>
          </div>
          <div className="hidden md:block w-12 h-1 bg-gray-300"></div>
          <div className="flex-1 text-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="font-bold text-lg mb-2">Pay Fee</h3>
            <p className="text-gray-600 text-sm">
              Pay the admission fee to confirm your seat.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Admissions;

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Admissions = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
//         Admissions
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Intermediate Section */}
//         <div className="bg-white rounded-lg shadow-lg p-8">
//           <h2 className="text-2xl font-bold text-orange-600 mb-4">
//             Intermediate Admissions
//           </h2>
//           <p className="text-gray-700 mb-6">
//             We offer a wide range of groups for Intermediate students to build a
//             strong foundation for their future careers.
//           </p>
//           <h3 className="text-xl font-semibold text-gray-800 mb-3">
//             Groups Offered:
//           </h3>
//           <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
//             <li>M.P.C (Maths, Physics, Chemistry)</li>
//             <li>Bi.P.C (Biology, Physics, Chemistry)</li>
//             <li>C.E.C (Civics, Economics, Commerce)</li>
//             <li>M.E.C (Maths, Economics, Commerce)</li>
//             <li>M.Bi.P.C (Maths, Biology, Physics, Chemistry)</li>
//           </ul>
//           <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
//             <h4 className="font-bold text-blue-900 mb-2">Eligibility:</h4>
//             <p className="text-sm text-gray-700">
//               SSC / 10th Class or equivalent from a recognized board.
//             </p>
//           </div>
//           <button
//             onClick={() => navigate("/contact")}
//             className="mt-6 w-full bg-orange-500 text-white py-2 rounded cursor-pointer hover:bg-orange-600 transition"
//           >
//             Enquire Now
//           </button>
//         </div>

//         {/* Degree Section */}
//         <div className="bg-white rounded-lg shadow-lg p-8">
//           <h2 className="text-2xl font-bold text-purple-600 mb-4">
//             Degree Admissions
//           </h2>
//           <p className="text-gray-700 mb-6">
//             Our undergraduate programs are designed to provide in-depth
//             knowledge and practical skills in various fields.
//           </p>
//           <h3 className="text-xl font-semibold text-gray-800 mb-3">
//             Courses Offered:
//           </h3>
//           <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
//             <li>B.Sc (Computer Science)</li>
//             <li>B.Com (Computer Applications)</li>
//             <li>B.ZC (Botany, Zoology, Chemistry)</li>
//             <li>B.A (History, Economics, Politics)</li>
//           </ul>
//           <div className="bg-purple-50 p-4 rounded-md border-l-4 border-purple-500">
//             <h4 className="font-bold text-purple-900 mb-2">Eligibility:</h4>
//             <p className="text-sm text-gray-700">
//               Intermediate / 10+2 or equivalent from a recognized board.
//             </p>
//           </div>
//           <button
//             onClick={() => navigate("/contact")}
//             className="mt-6 w-full bg-purple-600 text-white py-2 rounded cursor-pointer hover:bg-purple-700 transition"
//           >
//             Enquire Now
//           </button>
//         </div>
//       </div>


//     </div>
//   );
// };

// export default Admissions;


import React from "react";
import { useNavigate } from "react-router-dom";

const Admissions = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-10">

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-4">
        Admissions
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Space Junior College provides quality education with experienced faculty,
        modern infrastructure, and student-focused learning for Intermediate and
        Degree programs.
      </p>

      {/* INTER & DEGREE SECTIONS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* INTERMEDIATE */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-500">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">
            Intermediate Admissions
          </h2>
          <p className="text-gray-700 mb-6">
            Our Intermediate programs are designed to build a strong academic
            foundation and prepare students for competitive exams and higher
            studies.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Groups Offered
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>M.P.C – Maths, Physics, Chemistry</li>
            <li>Bi.P.C – Biology, Physics, Chemistry</li>
            <li>C.E.C – Civics, Economics, Commerce</li>
            <li>M.E.C – Maths, Economics, Commerce</li>
            <li>M.Bi.P.C – Maths, Biology, Physics, Chemistry</li>
          </ul>

          <div className="bg-orange-50 p-4 rounded-md border-l-4 border-orange-500 mb-6">
            <h4 className="font-bold text-orange-900 mb-1">Eligibility</h4>
            <p className="text-sm text-gray-700">
              Passed SSC / 10th Class or equivalent from a recognized board.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => navigate("/inter")}
              className="flex-1 bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
            >
              View Inter Courses
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="flex-1 border border-orange-500 text-orange-600 py-2 rounded hover:bg-orange-50 transition"
            >
              Enquire Now
            </button>
          </div>
        </div>

        {/* DEGREE */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-purple-500">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">
            Degree Admissions
          </h2>
          <p className="text-gray-700 mb-6">
            Our Degree programs focus on academic excellence, practical
            knowledge, and career-oriented learning.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Courses Offered
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>B.Sc – Computer Science</li>
            <li>B.Com – Computer Applications</li>
            <li>B.Z.C – Botany, Zoology, Chemistry</li>
            <li>B.A / B.A.P – Arts & Public Administration</li>
          </ul>

          <div className="bg-purple-50 p-4 rounded-md border-l-4 border-purple-500 mb-6">
            <h4 className="font-bold text-purple-900 mb-1">Eligibility</h4>
            <p className="text-sm text-gray-700">
              Passed Intermediate / 10+2 or equivalent from a recognized board.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => navigate("/degree")}
              className="flex-1 bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
            >
              View Degree Courses
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="flex-1 border border-purple-600 text-purple-600 py-2 rounded hover:bg-purple-50 transition"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="mt-16 bg-blue-900 text-white rounded-xl p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Admissions Open – Apply Now
        </h2>
        <p className="mb-6 text-blue-100">
          For admission details, counselling, and course information,
          please contact our admission office.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="bg-white text-blue-900 px-8 py-3 rounded font-semibold hover:bg-blue-100 transition"
        >
          Contact Us
        </button>
      </div>

    </div>
  );
};

export default Admissions;

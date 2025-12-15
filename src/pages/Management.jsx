import React from "react";

const Management = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">
        College Administration
      </h1>

      <div className="space-y-16 max-w-5xl mx-auto">
        {/* Junior College Principal Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl shadow-lg p-8">
          <div className="w-full md:w-1/3">
            <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-lg overflow-hidden">
              {/* Placeholder for Junior College Principal Image */}
              <div className="w-full h-64 bg-gray-300 flex items-center justify-center text-gray-500">
                Chairman Image
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Sri. N. DIVAKAR
            </h2>
            <p className="text-orange-600 font-semibold text-lg mb-4">
              Space Junior College Principal
            </p>
            <p className="text-gray-600 leading-relaxed italic">
              "Education is the most powerful weapon which you can use to change
              the world. At Space Junior & Degree College, we believe in
              nurturing young minds not just with academic knowledge but with
              values and discipline. Our vision is to create leaders who will
              contribute positively to society."
            </p>
          </div>
        </div>

        {/* Principal Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white rounded-xl shadow-lg p-8">
          <div className="w-full md:w-1/3">
            <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-lg overflow-hidden">
              {/* Placeholder for Principal Image */}
              <div className="w-full h-64 bg-gray-300 flex items-center justify-center text-gray-500">
                Principal Image
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 text-right md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Shri. E. SOMA SEKHAR
            </h2>
            <p className="text-purple-600 font-semibold text-lg mb-4">
              Space Degree College Principal
            </p>
            <p className="text-gray-600 leading-relaxed italic">
              "We strive for excellence in everything we do. Our faculty are
              dedicated to providing the best possible education to our
              students. We encourage students to think critically, ask
              questions, and explore new ideas. Join us in this journey of
              learning and growth."
            </p>
          </div>
        </div>

        {/* Vice Principal Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl shadow-lg p-8">
          <div className="w-full md:w-1/3">
            <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-lg overflow-hidden">
              {/* Placeholder for Vice Principal Image */}
              <div className="w-full h-64 bg-gray-300 flex items-center justify-center text-gray-500">
                Vice Principal Image
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Shri. K. RAMAKRISHNA
            </h2>
            <p className="text-blue-600 font-semibold text-lg mb-4">
              Vice Principal
            </p>
            <p className="text-gray-600 leading-relaxed italic">
              "Dedicated to maintaining the highest standards of discipline and
              academic excellence. We work tirelessly to support our students
              and ensure a conducive learning environment."
            </p>
          </div>
        </div>

        {/* Management Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white rounded-xl shadow-lg p-8">
          <div className="w-full md:w-1/3">
            <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-lg overflow-hidden">
              {/* Placeholder for Management Image */}
              <div className="w-full h-64 bg-gray-300 flex items-center justify-center text-gray-500">
                Management Image
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 text-right md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Shri. M.S. KIRAN
            </h2>
            <p className="text-green-600 font-semibold text-lg mb-4">
              College Management
            </p>
            <p className="text-gray-600 leading-relaxed italic">
              "Committed to providing the best infrastructure and resources for
              our students. Our goal is to build an institution that fosters
              innovation, integrity, and holistic development."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;

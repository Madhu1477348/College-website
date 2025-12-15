import React from "react";
import {
  IoCalculator,
  IoNuclear,
  IoFlask,
  IoCheckmarkCircle,
  IoSchool,
} from "react-icons/io5";

const MPC = () => {
  const subjects = [
    {
      name: "Mathematics",
      icon: IoCalculator,
      description: "Advanced mathematical concepts and problem-solving",
      topics: [
        "Calculus",
        "Algebra",
        "Vectors & 3D Geometry",
        "Probability",
        "Complex Numbers",
      ],
    },
    {
      name: "Physics",
      icon: IoNuclear,
      description: "Fundamental principles of physical sciences",
      topics: [
        "Mechanics",
        "Thermodynamics",
        "Electromagnetism",
        "Optics",
        "Modern Physics",
      ],
    },
    {
      name: "Chemistry",
      icon: IoFlask,
      description: "Chemical reactions and molecular structures",
      topics: [
        "Organic Chemistry",
        "Inorganic Chemistry",
        "Physical Chemistry",
        "Chemical Bonding",
      ],
    },
  ];

  const features = [
    "Excellent foundation for engineering entrance exams (JEE, EAMCET)",
    "Modern laboratories with latest equipment",
    "Experienced faculty with proven track record",
    "Regular problem-solving sessions and doubt clearing",
    "Mock tests and competitive exam preparation",
    "Strong analytical and logical thinking development",
  ];

  return (
    <div
      className="theme-mpc min-h-screen"
      style={{
        background:
          "linear-gradient(135deg, var(--theme-light), white, var(--theme-lighter))",
      }}
    >
      {/* Hero Section */}
      <div className="gradient-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              M.P.C
            </h1>
            <p className="text-2xl md:text-3xl mb-4 opacity-95">
              Mathematics, Physics, Chemistry
            </p>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              The foundation for engineering and technical excellence
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Course Description */}
          <div
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border"
            style={{ borderColor: "var(--theme-light)" }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <IoSchool
                className="mr-3"
                style={{ color: "var(--theme-primary)" }}
              />
              About M.P.C
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              M.P.C (Mathematics, Physics, Chemistry) is the most popular
              intermediate program for students aspiring to become engineers,
              scientists, and researchers. This comprehensive course builds a
              strong foundation in analytical thinking, problem-solving, and
              scientific methodology.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              With a perfect blend of theoretical knowledge and practical
              applications, M.P.C prepares students for competitive entrance
              examinations like JEE Main, JEE Advanced, EAMCET, and various
              other engineering entrance tests.
            </p>
          </div>

          {/* Subjects Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
              Core Subjects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {subjects.map((subject, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex flex-col items-center mb-4">
                    <div className="gradient-primary p-6 rounded-full mb-4">
                      <subject.icon className="text-4xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 text-center">
                      {subject.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-center">
                    {subject.description}
                  </p>
                  <div className="space-y-2">
                    {subject.topics.map((topic, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-gray-700"
                      >
                        <IoCheckmarkCircle
                          className="mr-2 shrink-0"
                          style={{ color: "var(--theme-primary)" }}
                        />
                        <span className="text-sm">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border"
            style={{ borderColor: "var(--theme-light)" }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Why Choose M.P.C?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start group">
                  <IoCheckmarkCircle
                    className="text-2xl mr-3 shrink-0 mt-1 group-hover:scale-125 transition-transform"
                    style={{ color: "var(--theme-primary)" }}
                  />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="gradient-primary text-white rounded-2xl shadow-2xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Start Your Engineering Journey Today!
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join our M.P.C program and build the foundation for a successful
              engineering career
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <a
                href="/admissions"
                className="bg-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                style={{ color: "var(--theme-primary)" }}
              >
                Apply Now
              </a> */}
              <a
                href="/contact"
                className="text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors border-2 border-white"
                style={{ backgroundColor: "var(--theme-secondary)" }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MPC;

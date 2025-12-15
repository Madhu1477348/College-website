import React from "react";
import { IoLaptop, IoStatsChart, IoCheckmarkCircle } from "react-icons/io5";

const BComCA = () => {
  const subjects = [
    {
      name: "Commerce",
      icon: IoStatsChart,
      description: "Fundamental principles of business and finance",
      topics: [
        "Financial Accounting",
        "Business Statistics",
        "Taxation",
        "Business Law",
        "Cost Accounting",
      ],
    },
    {
      name: "Computer Applications",
      icon: IoLaptop,
      description: "Technical skills for modern business",
      topics: [
        "C & C++ Programming",
        "Relational Database Management Systems (RDBMS)",
        "Web Technologies",
        "E-Commerce",
        "Object Oriented Programming in Java",
      ],
    },
  ];

  const features = [
    "Integrated curriculum of Commerce and Computer Science",
    "Practical training in Tally and Accounting Software",
    "Computer lab sessions for programming and web design",
    "Seminars on latest trends in FinTech and E-Commerce",
    "Internship opportunities with leading companies",
    "Focus on practical skills and employability",
  ];

  return (
    <div
      className="theme-bcomca min-h-screen"
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
              B.Com (CA)
            </h1>
            <p className="text-2xl md:text-3xl mb-4 opacity-95">
              Bachelor of Commerce in Computer Applications
            </p>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Bridging commerce and technology for the digital business era
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
              <IoLaptop
                className="mr-3"
                style={{ color: "var(--theme-primary)" }}
              />
              About B.Com (CA)
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Bachelor of Commerce in Computer Applications is a three-year
              undergraduate program that combines traditional commerce education
              with modern computer applications. This unique blend prepares
              students for the digital transformation happening across all
              business sectors.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Students gain expertise in accounting, finance, taxation, and
              business management while developing strong technical skills in
              programming, database management, and business software
              applications.
            </p>
          </div>

          {/* Subjects Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
              Core Areas of Study
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {subjects.map((subject, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="gradient-primary p-4 rounded-lg">
                      <subject.icon className="text-3xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 ml-4">
                      {subject.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{subject.description}</p>
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
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features & Highlights */}
          <div
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border"
            style={{ borderColor: "var(--theme-light)" }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Program Highlights
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

          {/* Eligibility & Duration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div
              className="bg-white rounded-2xl shadow-xl p-8 border"
              style={{ borderColor: "var(--theme-light)" }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Eligibility Criteria
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <IoCheckmarkCircle
                    className="text-2xl mr-3 shrink-0 mt-1"
                    style={{ color: "var(--theme-primary)" }}
                  />
                  <span className="text-gray-700 text-lg">
                    Completion of 10+2 or equivalent from a recognized board
                  </span>
                </li>
                <li className="flex items-start">
                  <IoCheckmarkCircle
                    className="text-2xl mr-3 shrink-0 mt-1"
                    style={{ color: "var(--theme-primary)" }}
                  />
                  <span className="text-gray-700 text-lg">
                    Minimum 50% aggregate in 12th class
                  </span>
                </li>
                <li className="flex items-start">
                  <IoCheckmarkCircle
                    className="text-2xl mr-3 shrink-0 mt-1"
                    style={{ color: "var(--theme-primary)" }}
                  />
                  <span className="text-gray-700 text-lg">
                    Interest in commerce and computer applications
                  </span>
                </li>
              </ul>
            </div>

            <div
              className="bg-white rounded-2xl shadow-xl p-8 border"
              style={{ borderColor: "var(--theme-light)" }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Course Structure
              </h3>
              <div className="space-y-4">
                <div
                  className="flex items-center justify-between p-4 rounded-lg"
                  style={{
                    background:
                      "linear-gradient(to right, var(--theme-light), var(--theme-lighter))",
                  }}
                >
                  <span className="font-semibold text-gray-800">Duration</span>
                  <span
                    className="font-bold"
                    style={{ color: "var(--theme-primary)" }}
                  >
                    3 Years (6 Semesters)
                  </span>
                </div>
                <div
                  className="flex items-center justify-between p-4 rounded-lg"
                  style={{
                    background:
                      "linear-gradient(to right, var(--theme-light), var(--theme-lighter))",
                  }}
                >
                  <span className="font-semibold text-gray-800">
                    Degree Type
                  </span>
                  <span
                    className="font-bold"
                    style={{ color: "var(--theme-secondary)" }}
                  >
                    Undergraduate
                  </span>
                </div>
                <div
                  className="flex items-center justify-between p-4 rounded-lg"
                  style={{
                    background:
                      "linear-gradient(to right, var(--theme-light), var(--theme-lighter))",
                  }}
                >
                  <span className="font-semibold text-gray-800">Mode</span>
                  <span
                    className="font-bold"
                    style={{ color: "var(--theme-primary)" }}
                  >
                    Regular
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="gradient-primary text-white rounded-2xl shadow-2xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Launch Your Career in Commerce & Technology
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Gain the skills employers are looking for in today's digital
              economy
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
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BComCA;

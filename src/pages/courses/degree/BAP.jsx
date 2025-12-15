import React from "react";
import {
  IoBook,
  IoGlobe,
  IoTrendingUp,
  IoCheckmarkCircle,
  IoNewspaper,
  IoPeople,
} from "react-icons/io5";

const BAP = () => {
  const subjects = [
    {
      name: "History",
      icon: IoBook,
      description: "Study of past civilizations and events",
      topics: [
        "Ancient History",
        "Medieval History",
        "Modern History",
        "World History",
        "Indian Heritage",
      ],
    },
    {
      name: "Economics",
      icon: IoTrendingUp,
      description: "Economic theories and their applications",
      topics: [
        "Microeconomics",
        "Macroeconomics",
        "Development Economics",
        "International Trade",
      ],
    },
    {
      name: "Political Science",
      icon: IoPeople,
      description: "Political systems and governance",
      topics: [
        "Indian Constitution",
        "Political Theory",
        "International Relations",
        "Public Administration",
      ],
    },
  ];

  const features = [
    "Comprehensive understanding of social sciences",
    "Critical thinking and analytical skills development",
    "Preparation for competitive exams (UPSC, State PSC)",
    "Regular seminars and guest lectures",
    "Debate and discussion forums",
    "Research methodology training",
  ];

  const higherStudies = [
    "M.A. in History",
    "M.A. in Political Science",
    "M.A. in Economics",
    "MBA",
    "LLB (Law)",
    "MA in International Relations",
    "Mass Communication",
    "Public Administration",
  ];

  return (
    <div
      className="theme-bap min-h-screen"
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
              B.A (HEP)
            </h1>
            <p className="text-2xl md:text-3xl mb-4 opacity-95">
              History, Economics, Political Science
            </p>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Understanding society, governance, and human history
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
              <IoGlobe
                className="mr-3"
                style={{ color: "var(--theme-primary)" }}
              />
              About B.A (HEP)
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Bachelor of Arts in History, Economics, and Political Science is a
              comprehensive undergraduate program that provides deep insights
              into human society, economic systems, and governance structures.
              This interdisciplinary course fosters critical thinking and
              analytical skills.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              The program is specifically designed for students aspiring for
              Civil Services (UPSC), State Public Service Commissions, and
              careers in public administration, journalism, and social research.
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

          {/* Higher Studies */}
          <div className="gradient-primary text-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Higher Education Opportunities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {higherStudies.map((study, index) => (
                <div
                  key={index}
                  className="bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center font-medium hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 border border-white border-opacity-30"
                >
                  {study}
                </div>
              ))}
            </div>
          </div>

          {/* Skills Developed */}
          <div
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border"
            style={{ borderColor: "var(--theme-light)" }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Skills You Will Develop
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "Critical Thinking",
                "Public Speaking",
                "Research & Analysis",
                "Policy Formulation",
                "Academic Writing",
                "Leadership",
              ].map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 rounded-lg"
                  style={{ backgroundColor: "var(--theme-light)" }}
                >
                  <IoCheckmarkCircle
                    className="text-xl mr-3"
                    style={{ color: "var(--theme-primary)" }}
                  />
                  <span className="font-medium text-gray-800">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility Criteria */}
          <div
            className="rounded-2xl shadow-xl p-8 md:p-12 mb-12 border"
            style={{
              background:
                "linear-gradient(135deg, var(--theme-light), var(--theme-lighter))",
              borderColor: "var(--theme-light)",
            }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Eligibility Criteria
            </h3>
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="flex items-start bg-white p-6 rounded-xl shadow-sm">
                <IoCheckmarkCircle
                  className="text-2xl mr-4 shrink-0 mt-1"
                  style={{ color: "var(--theme-primary)" }}
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    Educational Qualification
                  </h4>
                  <p className="text-gray-600">
                    Completion of 10+2 (Intermediate) or equivalent from any
                    recognized board with any stream (Arts, Science, or
                    Commerce).
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-white p-6 rounded-xl shadow-sm">
                <IoCheckmarkCircle
                  className="text-2xl mr-4 shrink-0 mt-1"
                  style={{ color: "var(--theme-primary)" }}
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    Minimum Marks
                  </h4>
                  <p className="text-gray-600">
                    Minimum 40% aggregate marks in the qualifying examination.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="gradient-primary text-white rounded-2xl shadow-2xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Shape the Future of Society!
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join our B.A program and prepare for a leadership role in public
              service
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

export default BAP;

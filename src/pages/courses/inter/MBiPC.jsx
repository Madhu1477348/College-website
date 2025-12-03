import React from "react";
import { IoBook, IoFlask, IoSchool, IoCheckmarkCircle } from "react-icons/io5";

const MBiPC = () => {
  const subjects = [
    {
      name: "Mathematics",
      icon: IoSchool,
      description: "Advanced calculus, algebra, and analytical geometry",
      topics: ["Calculus", "Algebra", "Vectors", "Probability"],
    },
    {
      name: "Biology",
      icon: IoFlask,
      description: "Botany and Zoology covering life sciences",
      topics: ["Cell Biology", "Genetics", "Evolution", "Ecology"],
    },
    {
      name: "Physics",
      icon: IoBook,
      description: "Fundamental concepts of physical sciences",
      topics: ["Mechanics", "Thermodynamics", "Electromagnetism", "Optics"],
    },
    {
      name: "Chemistry",
      icon: IoFlask,
      description: "Organic, inorganic, and physical chemistry",
      topics: [
        "Organic Chemistry",
        "Inorganic Chemistry",
        "Physical Chemistry",
      ],
    },
  ];

  const features = [
    "State-of-the-art laboratory facilities",
    "Experienced faculty with industry expertise",
    "Regular practical sessions and experiments",
    "Competitive exam preparation (NEET, EAMCET)",
    "Modern digital learning resources",
    "Individual attention and mentoring",
  ];

  const eligibility = [
    "Completion of 10th standard/SSC",
    "Minimum 60% aggregate in 10th class",
    "Interest in medical and engineering fields",
  ];

  return (
    <div
      className="theme-mbipc min-h-screen"
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
              M.Bi.P.C
            </h1>
            <p className="text-2xl md:text-3xl mb-4 opacity-95">
              Mathematics, Biology, Physics, Chemistry
            </p>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              The perfect combination for aspiring medical and biotechnology
              professionals
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
              <IoBook
                className="mr-3"
                style={{ color: "var(--theme-primary)" }}
              />
              About M.Bi.P.C
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              M.Bi.P.C (Mathematics, Biology, Physics, Chemistry) is a
              comprehensive intermediate program designed for students who wish
              to pursue careers in medicine, biotechnology, pharmacy, and
              related fields while maintaining strong mathematical foundations.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              This unique combination provides students with the flexibility to
              pursue both medical and engineering entrance examinations, opening
              up a wider range of career opportunities.
            </p>
          </div>

          {/* Subjects Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
              Core Subjects
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

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Why Choose */}
            <div className="gradient-primary text-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Why Choose M.Bi.P.C?</h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <IoCheckmarkCircle className="text-2xl mr-3 shrink-0 mt-1" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligibility */}
            <div
              className="bg-white rounded-2xl shadow-xl p-8 border"
              style={{ borderColor: "var(--theme-light)" }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Eligibility Criteria
              </h3>
              <ul className="space-y-4">
                {eligibility.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <IoCheckmarkCircle
                      className="text-2xl mr-3 shrink-0 mt-1"
                      style={{ color: "var(--theme-primary)" }}
                    />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="gradient-primary text-white rounded-2xl shadow-2xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join our M.Bi.P.C program and unlock endless possibilities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/admissions"
                className="bg-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                style={{ color: "var(--theme-primary)" }}
              >
                Apply Now
              </a>
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

export default MBiPC;
